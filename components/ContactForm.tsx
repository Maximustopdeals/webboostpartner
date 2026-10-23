"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const FALLBACK_ENDPOINT: string = "https://formspree.io/f/mdapzjod";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  testid: string;
}

interface FormStatus {
  status: "idle" | "loading" | "success" | "error";
  errorMsg: string;
}

function Field({ label, name, type = "text", required = false, testid }: FieldProps) {
  return (
    <div>
      <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2 text-[#1a1a1a]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        data-testid={testid}
        className="w-full border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
      />
    </div>
  );
}

/* ---------- Intent helpers (single source of truth) ---------- */
const isAnalyseIntent = (v: string | null): boolean =>
  v === "analyse" ||
  v === "quickscan" ||
  v === "quickscan_analyse" ||
  v === "migratie_analyse" ||
  v === "website_analyse";

const isOfferteIntent = (v: string | null): boolean =>
  v === "offerte" || (v ? v.startsWith("pakket_") : false);

const isAdviesIntent = (v: string | null): boolean =>
  v === "advies" || v === "gesprek" || v === "adviesgesprek";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent");

  const [analyseAanvraag, setAnalyseAanvraag] = useState<boolean>(() => isAnalyseIntent(intent));
  const [offerteAanvraag, setOfferteAanvraag] = useState<boolean>(() => isOfferteIntent(intent));
  const [adviesAanvraag, setAdviesAanvraag] = useState<boolean>(() => isAdviesIntent(intent));

  const [status, setStatus] = useState<FormStatus["status"]>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Sync checkboxes when the URL intent changes (soft navigation, CTA clicks)
  useEffect(() => {
    setAnalyseAanvraag(isAnalyseIntent(intent));
    setOfferteAanvraag(isOfferteIntent(intent));
    setAdviesAanvraag(isAdviesIntent(intent));
  }, [intent]);

  const getTitle = (): string => {
    if (isAnalyseIntent(intent)) return "Vraag een gratis website-analyse aan";
    if (isOfferteIntent(intent)) return "Vraag een voorstel op maat aan";
    if (isAdviesIntent(intent)) return "Plan een vrijblijvend adviesgesprek";
    return "Stuur een bericht";
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);

    data.set("intentie_analyse", analyseAanvraag ? "JA" : "NEE");
    data.set("intentie_offerte", offerteAanvraag ? "JA" : "NEE");
    data.set("intentie_advies", adviesAanvraag ? "JA" : "NEE");

    if (intent) {
      data.set("cta_bron", intent);
    }

    try {
      const res = await fetch(FALLBACK_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        let msg = "Er ging iets mis. Probeer het opnieuw.";
        try {
          const json = await res.json();
          if (json?.errors?.[0]?.message) {
            msg = json.errors[0].message;
          } else if (json?.error) {
            msg = json.error;
          }
        } catch {
          msg = `Server fout (${res.status}). Probeer het later opnieuw.`;
        }
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Netwerkfout. Probeer het later opnieuw.";
      setErrorMsg(errorMessage);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="bg-white border-2 border-black p-8 sm:p-12 shadow-brutal"
        data-testid="contact-form-success"
      >
        <CheckCircle2 size={48} className="text-[#FF4500] mb-4" strokeWidth={2.5} />
        <h3 className="font-heading font-extrabold uppercase text-3xl mb-2 text-black">
          Bedankt voor je aanvraag!
        </h3>
        <p className="text-base text-[#525252] max-w-prose leading-relaxed">
          Ik ga direct voor je aan de slag en stuur je binnen 24 tot 48 uur een
          persoonlijke reactie. Tot snel!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-black p-6 sm:p-10 shadow-brutal space-y-5"
      data-testid="contact-form"
    >
      <div className="border-b-2 border-black pb-4 mb-2">
        <h2 className="font-heading font-extrabold uppercase text-2xl text-black">
          {getTitle()}
        </h2>
        <p className="text-sm text-[#525252] mt-1 leading-relaxed">
          Vul de velden in en je ontvangt binnen 24 tot 48 uur een persoonlijk en
          onafhankelijk advies.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Naam *" name="naam" required={true} testid="field-naam" />
        <Field label="Bedrijfsnaam" name="bedrijf" testid="field-bedrijf" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="E-mail *" name="email" type="email" required={true} testid="field-email" />
        <Field label="Telefoon" name="telefoon" type="tel" testid="field-telefoon" />
      </div>

      <div>
        <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2 text-[#1a1a1a]">
          Website URL (optioneel voor analyse)
        </label>
        <input
          type="text"
          name="website_url"
          placeholder="www.jouwbedrijf.nl"
          className="w-full border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
        />
      </div>

      <div>
        <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2 text-[#1a1a1a]">
          Bericht of aanvullende opmerking *
        </label>
        <textarea
          name="bericht"
          required
          rows={4}
          placeholder="Vertel kort wat over je bedrijf en je online ambities..."
          className="w-full border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
          data-testid="field-bericht"
        />
      </div>

      <div>
        <label className="block font-heading uppercase text-xs font-bold tracking-widest mb-2 text-[#1a1a1a]">
          Hoe heb je mij gevonden?
        </label>
        <select
          name="bron"
          className="w-full border-2 border-black p-4 bg-[#FAFAFA] focus:bg-white focus:border-[#FF4500] outline-none transition-colors text-sm"
          data-testid="field-bron"
          defaultValue=""
        >
          <option value="">Maak een keuze</option>
          <option value="Google">Google Zoekmachine</option>
          <option value="Vrienden/kennissen">Vrienden / kennissen</option>
          <option value="Eigen netwerk">Eigen netwerk</option>
          <option value="Anders">Anders</option>
        </select>
      </div>

      <div className="border-2 border-black bg-[#FAFAFA] p-5 space-y-4">
        <p className="font-heading font-bold uppercase text-xs tracking-widest text-[#525252]">
          Kies jouw gewenste startmethode:
        </p>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={analyseAanvraag}
            onChange={(e) => setAnalyseAanvraag(e.target.checked)}
            className="w-5 h-5 border-2 border-black accent-[#FF4500] mt-0.5 shrink-0"
            data-testid="intent-analyse"
          />
          <span className="text-sm text-black">
            <strong>Ja, ik wil een gratis website-analyse</strong>
            <br />
            <span className="text-[#525252] text-xs">
              Binnen 48 uur een heldere, vrijblijvende analyse van uw huidige site.
            </span>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={offerteAanvraag}
            onChange={(e) => setOfferteAanvraag(e.target.checked)}
            className="w-5 h-5 border-2 border-black accent-[#FF4500] mt-0.5 shrink-0"
            data-testid="intent-offerte"
          />
          <span className="text-sm text-black">
            <strong>Ja, ik wil een transparant voorstel</strong>
            <br />
            <span className="text-[#525252] text-xs">
              Een helder projectvoorstel met een vaste all-in prijs vooraf.
            </span>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={adviesAanvraag}
            onChange={(e) => setAdviesAanvraag(e.target.checked)}
            className="w-5 h-5 border-2 border-black accent-[#FF4500] mt-0.5 shrink-0"
            data-testid="intent-advies"
          />
          <span className="text-sm text-black">
            <strong>Ja, ik wil een vrijblijvend adviesgesprek</strong>
            <br />
            <span className="text-[#525252] text-xs">
              Een kort gesprek via telefoon of op locatie in de regio.
            </span>
          </span>
        </label>
      </div>

      {status === "error" && (
        <div
          className="flex items-start gap-2 border-2 border-black bg-[#FFE5DA] p-4"
          data-testid="contact-form-error"
        >
          <AlertCircle size={20} className="text-[#FF4500] mt-0.5 shrink-0" />
          <p className="text-sm font-medium text-black">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Versturen...
          </>
        ) : (
          <>
            Verzend Mijn Aanvraag <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
