export const metadata = {
  title: "Cookiebeleid & Disclaimer | WebBoost Partner",
  description: "Cookiebeleid en disclaimer van WebBoost Partner. Lees meer over het gebruik van cookies op onze website.",
};

export default function CookiebeleidPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground leading-[1.05] tracking-tight mb-6">
            <span className="block">
              <span className="text-brand italic">Cookie</span>beleid
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground-muted font-sans max-w-2xl">
            Laatst bijgewerkt: <strong className="text-foreground font-semibold">19-09-2026</strong>. WebBoost Partner gebruikt cookies om uw ervaring op onze website te verbeteren. In dit beleid leggen wij uit welke cookies wij gebruiken en waarom.
          </p>
        </div>
      </section>

      {/* Cookiebeleid Content */}
      <section className="bg-background-secondary py-16 sm:py-24 border-t border-border-subtle">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <div className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4 pb-3 border-b border-border-subtle">
              1. Wat zijn cookies?
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              Cookies zijn kleine tekstbestanden die door een website op uw computer, tablet of telefoon worden geplaatst wanneer u de website bezoekt. Cookies helpen ons om uw voorkeuren te onthouden en om te begrijpen hoe bezoekers onze website gebruiken.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4 pb-3 border-b border-border-subtle">
              2. Welke cookies gebruiken wij?
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              WebBoost Partner maakt gebruik van de volgende soorten cookies:
            </p>
            <ul className="space-y-4 text-base text-foreground-muted leading-relaxed font-sans pl-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                <span><strong className="text-foreground font-semibold">Noodzakelijke cookies</strong><br />Deze cookies zijn essentieel voor het correct functioneren van de website. Zij zorgen bijvoorbeeld voor de beveiliging van formulieren en het onthouden van uw cookievoorkeuren. Deze cookies kunnen niet worden uitgeschakeld.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                <span><strong className="text-foreground font-semibold">Analytische cookies</strong><br />Wij gebruiken Google Analytics om anonieme statistieken te verzamelen over het gebruik van onze website. Dit helpt ons te begrijpen welke pagina&apos;s populair zijn en waar wij onze website kunnen verbeteren. Deze gegevens zijn volledig geanonimiseerd.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                <span><strong className="text-foreground font-semibold">Functionele cookies</strong><br />Deze cookies onthouden keuzes die u maakt tijdens uw bezoek, zoals taalvoorkeuren of formulierinvoer. Zij verbeteren de gebruikservaring maar zijn niet strikt noodzakelijk.</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4 pb-3 border-b border-border-subtle">
              3. Overzicht van cookies
            </h2>
            
            <div className="overflow-x-auto border border-border-subtle rounded-sm shadow-soft">
              <table className="w-full text-sm font-sans">
                <thead>
                  <tr className="bg-background-secondary text-foreground border-b border-border-subtle">
                    <th className="text-left p-4 font-semibold uppercase tracking-wider text-xs">Cookie</th>
                    <th className="text-left p-4 font-semibold uppercase tracking-wider text-xs">Type</th>
                    <th className="text-left p-4 font-semibold uppercase tracking-wider text-xs">Doel</th>
                    <th className="text-left p-4 font-semibold uppercase tracking-wider text-xs text-brand">Looptijd</th>
                  </tr>
                </thead>
                <tbody className="text-foreground-muted">
                  <tr className="border-b border-border-subtle hover:bg-background/50 transition-colors">
                    <td className="p-4 font-medium text-foreground">cookieConsent</td>
                    <td className="p-4">Noodzakelijk</td>
                    <td className="p-4">Onthoudt uw cookievoorkeuren</td>
                    <td className="p-4">1 jaar</td>
                  </tr>
                  <tr className="border-b border-border-subtle hover:bg-background/50 transition-colors">
                    <td className="p-4 font-medium text-foreground">_ga</td>
                    <td className="p-4">Analytisch</td>
                    <td className="p-4">Google Analytics: onderscheidt gebruikers</td>
                    <td className="p-4">2 jaar</td>
                  </tr>
                  <tr className="border-b border-border-subtle hover:bg-background/50 transition-colors">
                    <td className="p-4 font-medium text-foreground">_gid</td>
                    <td className="p-4">Analytisch</td>
                    <td className="p-4">Google Analytics: onderscheidt gebruikers</td>
                    <td className="p-4">24 uur</td>
                  </tr>
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="p-4 font-medium text-foreground">_gat</td>
                    <td className="p-4">Analytisch</td>
                    <td className="p-4">Google Analytics: beperkt verzoeken</td>
                    <td className="p-4">1 minuut</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4 pb-3 border-b border-border-subtle">
              4. Cookies uitschakelen
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              U kunt cookies uitschakelen via de instellingen van uw browser. Houd er rekening mee dat sommige delen van onze website mogelijk niet correct functioneren wanneer u cookies volledig uitschakelt. Analytische cookies kunt u ook uitschakelen via het cookievoorkeurenpaneel op onze website.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4 pb-3 border-b border-border-subtle">
              5. Cookies van derden
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              Onze website kan links bevatten naar externe websites (zoals LinkedIn of projectportfolios van klanten). Deze websites kunnen hun eigen cookies plaatsen. WebBoost Partner heeft geen controle over de cookies van derden en verwijst u naar de cookiebeleidspagina&apos;s van deze partijen.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4 pb-3 border-b border-border-subtle">
              6. Wijzigingen cookiebeleid
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              Wij kunnen dit cookiebeleid van tijd tot tijd wijzigen, bijvoorbeeld wanneer wij nieuwe functionaliteiten toevoegen aan onze website. De actuele versie is altijd beschikbaar op deze pagina.
            </p>
          </div>

        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-background py-16 sm:py-24 border-t border-border-subtle">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8 pb-4 border-b border-border-subtle">
            Disclaimer
          </h2>

          <div className="mb-12">
            <h3 className="font-serif text-2xl text-foreground mb-4 pb-2 border-b border-border-subtle">
              1. Algemeen
            </h3>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              De informatie op deze website is met zorg samengesteld. WebBoost Partner spant zich in om de inhoud actueel, juist en duidelijk te houden. Desondanks kunnen wij niet garanderen dat alle informatie op deze website te allen tijde volledig correct is.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl text-foreground mb-4 pb-2 border-b border-border-subtle">
              2. Aansprakelijkheid
            </h3>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              WebBoost Partner is niet aansprakelijk voor schade of ongemak ontstaan als gevolg van het gebruik van informatie op deze website. Ook zijn wij niet aansprakelijk voor technische storingen, virussen of andere schadelijke software die via onze website zou kunnen worden verspreid, tenzij sprake is van opzet of grove nalatigheid aan onze zijde.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl text-foreground mb-4 pb-2 border-b border-border-subtle">
              3. Links naar derden
            </h3>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              Onze website bevat links naar externe websites. WebBoost Partner is niet verantwoordelijk voor de inhoud, privacypraktijken of beschikbaarheid van deze websites. Het volgen van een externe link is voor eigen risico van de gebruiker.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl text-foreground mb-4 pb-2 border-b border-border-subtle">
              4. Intellectueel eigendom
            </h3>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              Alle rechten op de inhoud van deze website — waaronder teksten, afbeeldingen, logo&apos;s, ontwerpen en code — zijn voorbehouden aan WebBoost Partner of haar licentiegevers. Zonder voorafgaande schriftelijke toestemming is het niet toegestaan om inhoud van deze website te kopiëren, reproduceren of verspreiden, behalve voor persoonlijk, niet-commercieel gebruik.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl text-foreground mb-4 pb-2 border-b border-border-subtle">
              5. SEO-resultaten en prestatieclaims
            </h3>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              Op deze website worden prestatie-indicatoren genoemd, zoals laadtijden en Google-scores. Deze cijfers zijn gebaseerd op meetresultaten van specifieke projecten en tools (zoals Google PageSpeed Insights). Wij kunnen geen garantie geven dat toekomstige projecten identieke resultaten zullen behalen. SEO-prestaties zijn afhankelijk van vele factoren buiten onze controle, waaronder de concurrentie, algoritmewijzigingen en de kwaliteit van de door de klant aangeleverde content.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl text-foreground mb-4 pb-2 border-b border-border-subtle">
              6. Wijzigingen
            </h3>
            <p className="text-base text-foreground-muted leading-relaxed mb-4 font-sans">
              WebBoost Partner behoudt zich het recht voor om deze disclaimer te allen tijde te wijzigen. Wij raden u aan om deze pagina regelmatig te raadplegen.
            </p>
          </div>

          <div className="pt-8 border-t border-border-subtle mt-16">
            <p className="text-sm text-foreground-muted leading-relaxed font-sans">
              WebBoost Partner &middot; Neeltje Griffijnstraat 12, 3065 KD Rotterdam &middot; info@webboostpartner.nl
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
