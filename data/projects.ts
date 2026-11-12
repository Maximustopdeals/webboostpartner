export interface Project {
  slug: string;
  name: string;
  url: string;
  tagline: string;
  resultMetric: string;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  isDemo?: boolean;
}

export const projects: Project[] = [
  {
    slug: "de-islamitische-kraamzorg",
    name: "De Islamitische Kraamzorg",
    url: "https://www.deislamitischekraamzorg.nl/", // Pas deze URL aan indien nodig
    tagline: "Liefdevolle Islamitische kraamzorg in Utrecht en omstreken. Een warme, toegankelijke website die 24/7 beschikbaarheid en vertrouwen uitstraalt.",
    resultMetric: "Optimale gebruikerservaring en 24/7 bereikbaarheid",
    image: "/images/portfolio/Schermafbeelding-deislamitische-kraamzorg.webp", // <-- .webp toegevoegd
    testimonial: {
      quote: "De nieuwe website straalt precies de warmte, rust en professionaliteit uit die wij als Islamitische kraamzorg willen bieden. Aanstaande ouders weten ons nu veel gemakkelijker te vinden.",
      author: "Nadia - Eigenaresse",
      role: "De Islamitische Kraamzorg",
    },
  },
  {
    slug: "kraamzorg-t-gouden-hartje",
    name: "Kraamzorg 'T Gouden Hartje",
    url: "https://www.kraamzorg-tgoudenhartje.nl/",
    tagline: "Een warm en persoonlijk platform voor kraamzorg. Gericht op rust, vertrouwen en een liefdevolle start voor het hele gezin.",
    resultMetric: "Perfecte snelheidsscore en gebruikservaring",
    image: "/images/portfolio/Kraamzorg-tgoudenhartje-hero.jpg",
    testimonial: {
      quote: "Als kraamverzorgende wil ik dat ouders zich direct op hun gemak voelen. De nieuwe website straalt precies die warmte en rust uit die ik in mijn praktijk breng. Ik word nu veel beter gevonden door gezinnen in Almere en kan mijn verhaal op een prachtige manier vertellen.",
      author: "Hanan",
      role: "Eigenaresse, Kraamzorg 'T Gouden Hartje",
    },
  },
  {
    slug: "marleys-kraamzorg",
    name: "Marley's Kraamzorg",
    url: "https://www.marleyskraamzorg.nl",
    tagline: "Volledig maatwerk met een warme, betrouwbare uitstraling en een intuïtieve flow voor aanstaande ouders.",
    resultMetric: "Laadtijd onder 1 seconde en 100% score",
    image: "/images/portfolio/marleyskraamzorg-hero.jpg",
    testimonial: {
      quote: "Ik ben ontzettend blij met mijn nieuwe website. Het geeft precies de warme, persoonlijke uitstraling die ik wilde. Klanten vinden mij nu veel makkelijker online en de site voelt echt als een verlengstuk van mijn praktijk.",
      author: "Lisa",
      role: "Oprichter, Marley's Kraamzorg",
    },
  },
  {
    slug: "dtg-cleaning",
    name: "DTG Cleaning",
    url: "https://dtgcleaning.nl",
    tagline: "Razendsnel lokaal platform, speciaal ingericht om direct meer offerte-aanvragen te ontvangen in de schoonmaakbranche.",
    resultMetric: "Top 3 posities in Google en meer aanvragen",
    image: "/images/portfolio/dtg-cleaning.jpg",
    testimonial: {
      quote: "De nieuwe website is een enorme sprong vooruit. Hij laadt razendsnel en ziet er professioneel uit. Ik krijg nu veel meer aanvragen via de site.",
      author: "Dominique",
      role: "Eigenaar, D.T.G. Cleaning",
    },
  },
  {
    slug: "autorijschool-valberg",
    name: "Autorijschool Valberg",
    url: "https://autorijschoolvalberg.nl",
    tagline: "Overzichtelijke pagina's met slimme call-to-actions voor een constante stroom van nieuwe leerlingen.",
    resultMetric: "5-Sterren gebruikerservaring en meer aanmeldingen",
    image: "/images/portfolio/valberg.jpg",
    testimonial: {
      quote: "De website is modern, overzichtelijk en trekt precies de juiste doelgroep aan. Het aantal aanmeldingen via de site is flink gestegen.",
      author: "Roy",
      role: "Eigenaar, Autorijschool Valberg",
    },
  },
  {
    slug: "luxe-webshop",
    name: "Luxe Webshop",
    url: "https://luxe-webshop.vercel.app",
    tagline: "High-end e-commerce platform met een strak design en een vlekkeloos bestelproces.",
    resultMetric: "Webshop op maat concept",
    image: "/images/portfolio/luxe-webshop.jpg",
    isDemo: true,
  },
  {
    slug: "inas-kraamzorg",
    name: "Inas Kraamzorg",
    url: "https://inaskraamzorg.nl",
    tagline: "Zorgplatform met meertalige ondersteuning en een uiterst toegankelijke structuur voor mobiel gebruik.",
    resultMetric: "Optimale mobiele ervaring en bereikbaarheid",
    image: "/images/portfolio/inas.jpg",
    testimonial: {
      quote: "De website straalt precies de warmte en professionaliteit uit die bij mijn praktijk past. Ik merk dat aanstaande ouders mij nu makkelijker weten te vinden.",
      author: "Fatima",
      role: "Oprichter, Inas Kraamzorg",
    },
  },
  {
    slug: "cindys-kraamzorg",
    name: "Cindy's Kraamzorg",
    url: "https://cindyskraamzorg.nl",
    tagline: "Complete modernisering van een verouderde site. Nieuwe fotografie en een razendsnelle basis.",
    resultMetric: "Lagere kosten en 3x snellere laadtijd",
    image: "/images/portfolio/cindys-kraamzorg.jpg",
    testimonial: {
      quote: "Volgens mij werkt de nieuwe website en de foto's goed. Ik krijg zoveel aanmeldingen, dus ontzettend bedankt daarvoor!",
      author: "Cindy",
      role: "Eigenaar, Cindy's Kraamzorg",
    },
  },
  // --- NIEUW PROJECT ---
  {
    slug: "kraamzorg-t-gouden-wiegje",
    name: "Kraamzorg 't Gouden Wiegje",
    url: "https://kraamzorgtgoudenwiegje.nl/",
    tagline: "Een zachte start. Een warme, rustgevende website die de persoonlijke kraamzorg van Vania perfect weerspiegelt en vertrouwen uitstraalt naar aanstaande ouders.",
    resultMetric: "Perfecte PageSpeed 100 (Desktop) & 95 (Mobiel) met 100 SEO-score",
    image: "/images/portfolio/Schermafbeelding -kraamzorgtgoudenwiegje.webp",
    testimonial: {
      quote: "Ik ben ontzettend dankbaar voor het resultaat! De website voelt precies zoals mijn kraamzorg: warm, rustig en professioneel. Het verschil in snelheid is enorm; waar de site eerst traag was, scoren we nu fantastische PageSpeed-cijfers (95 mobiel en zelfs een perfecte 100 op desktop) met een perfecte 100 voor SEO. Aanstaande ouders vinden mij nu veel sneller en makkelijker online. Echt een gouden samenwerking!",
      author: "Vania",
      role: "Eigenaresse, Kraamzorg 't Gouden Wiegje",
    },
  },
];
