import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { success: false, message: 'Naam is verplicht' },
        { status: 400 }
      );
    }

    if (!body.email || !body.email.trim()) {
      return NextResponse.json(
        { success: false, message: 'Email is verplicht' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Ongeldig emailadres' },
        { status: 400 }
      );
    }

    if (!body.message || !body.message.trim()) {
      return NextResponse.json(
        { success: false, message: 'Bericht is verplicht' },
        { status: 400 }
      );
    }

    // Send to Formspree
    const formspreeResponse = await fetch('https://formspree.io/f/mdapzjod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone || '',
        message: body.message,
        _subject: `Nieuw bericht van ${body.name} via WebBoostPartner.nl`,
        _replyto: body.email,
      }),
    });

    if (!formspreeResponse.ok) {
      const errorData = await formspreeResponse.json().catch(() => ({}));
      console.error('Formspree error:', errorData);
      return NextResponse.json(
        { success: false, message: 'Er is iets misgegaan bij het versturen. Probeer het later opnieuw.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Bericht succesvol verstuurd' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Er is iets misgegaan. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
