# WebBoostPartner - Next.js 15 Website

Een complete Next.js 15 website met App Router voor WebBoostPartner.nl.

## Migratie van Vite naar Next.js

Deze website is gemigreerd van Vite + React naar Next.js 15 met App Router.

### Belangrijkste wijzigingen

- **Routing**: Geen React Router meer, maar Next.js App Router (`/app` folder)
- **SEO**: Elke pagina heeft eigen metadata via `generateMetadata`
- **Contactformulier**: Werkt via API route (`/app/api/contact/route.ts`) die Formspree aanroept
- **Sitemap & Robots**: Automatisch gegenereerd
- **Statische export**: Geconfigureerd voor Vercel deployment

## Installatie

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## Build

```bash
npm run build
```

De statische bestanden worden geëxporteerd naar de `dist` folder.

## Deployment naar Vercel

1. Push de code naar GitHub
2. Importeer het project in Vercel
3. Vercel herkent automatisch dat het een Next.js project is
4. Deploy!

## Pagina's

- `/` - Homepage
- `/over-mij/` - Over mij
- `/pakketten/` - Pakketten
- `/faq/` - Veelgestelde vragen
- `/contact/` - Contact (met werkend formulier)

## Contactformulier

Het contactformulier werkt via een API route die een POST request doet naar Formspree.
Het Formspree endpoint is: `https://formspree.io/f/mdapzjod`

## Domein

De website is geconfigureerd voor: `https://www.webboostpartner.nl`

Canonical URLs en alle metadata verwijzen naar dit domein.
