"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ items, schemaId = "faq" }) {
  const [open, setOpen] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  return (
    <div data-testid={`faq-${schemaId}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="border-2 border-black bg-white"
              data-testid={`faq-item-${i}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-heading font-bold uppercase text-base sm:text-lg tracking-tight">
                  {it.q}
                </span>
                <span className={`shrink-0 grid place-items-center w-9 h-9 border-2 border-black ${isOpen ? "bg-[#FF4500] text-white" : "bg-white"}`}>
                  {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 -mt-1 text-[#1a1a1a] text-base leading-relaxed border-t border-black/10">
                  <div className="pt-4 whitespace-pre-line">{it.a}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
