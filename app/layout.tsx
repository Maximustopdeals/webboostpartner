import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { BackToTop } from '@/components/shared/BackToTop';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

export const metadata: Metadata = {
  title: 'WebBoostPartner - Website laten maken in Rotterdam',
  description:
    'Razendsnelle websites voor Rotterdamse ondernemers. Geen gedoe, geen maandelijkse kosten. Professioneel webdesign met Next.js.',
  keywords: [
    'webdesign Rotterdam',
    'website laten maken',
    'Next.js developer',
    'webdeveloper Rotterdam',
    'snelle website',
    'webdesign bureau',
  ],
  authors: [{ name: 'WebBoostPartner' }],
  creator: 'WebBoostPartner',
  publisher: 'WebBoostPartner',
  robots: 'index, follow',
  metadataBase: new URL('https://www.webboostpartner.nl'),
  alternates: {
    canonical: 'https://www.webboostpartner.nl',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://www.webboostpartner.nl',
    siteName: 'WebBoostPartner',
    title: 'WebBoostPartner - Website laten maken in Rotterdam',
    description:
      'Razendsnelle websites voor Rotterdamse ondernemers. Geen gedoe, geen maandelijkse kosten.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebBoostPartner - Website laten maken in Rotterdam',
    description:
      'Razendsnelle websites voor Rotterdamse ondernemers. Geen gedoe, geen maandelijkse kosten.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-64x64.png" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/favicon-180x180.png" sizes="180x180" />
      </head>
      <body className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
