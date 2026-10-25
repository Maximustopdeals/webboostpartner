"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Interface voor een FAQ item
interface FAQItem {
  q: string;
  a: string;
}

// Interface voor de FAQ props
interface FAQProps {
  items: FAQItem[];
  schemaId?: string;
}

export default function FAQ({ items, schemaId = "faq" }: FAQProps) {
  // Standaard staat het eerste item open (index 0) voor directe interactie en betere UX
  const [open, setOpen] = useState<number>(0);

  // Modern Google-proof Structured Data Schema (WebPage + hasPart)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://webboostpartner.nl${schemaId}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": "Veelgestelde Vragen",
      "itemListElement": items.map((item: FAQItem, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }
      }))
    }
  };

  return (
    <div data-testid={`faq-${schemaId}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-4">
        {items.map((item: FAQItem, index: number) => {
          const isOpen: boolean = open === index;
          return (
            <div
              key={index}
              className={`border-2 border-black bg-white transition-all duration-200 ${
                isOpen ? "shadow-[4px_4px_0px_0px_#1A1A19]" : "hover:shadow-[2px_2px_0px_0px_#1A1A19]"
              }`}
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                aria-expanded={isOpen}
              >
                {/* ✅ FIX: group-hover:text-[#FF4500] -> group-hover:text-orange-accessible */}
                <span className="font-heading font-black uppercase text-base sm:text-lg tracking-tight text-[#1a1a1a] group-hover:text-orange-accessible transition-colors">
                  {item.q}
                </span>
                <span 
                  /* ✅ FIX: text-white -> text-black voor contrast */
                  className={`shrink-0 grid place-items-center w-9 h-9 border-2 border-black transition-all ${
                    isOpen ? "bg-[#FF4500] text-black" : "bg-[#F5F5F3] text-black group-hover:bg-[#FF4500] group-hover:text-black"
                  }`}
                >
                  {isOpen ? <Minus size={14} strokeWidth={3} /> : <Plus size={14} strokeWidth={3} />}
                </span>
              </button>
              
              {isOpen && (
                <div className="px-5 pb-5 -mt-1 text-[#4a4a48] text-sm sm:text-base leading-relaxed border-t border-gray-100">
                  <div className="pt-4 whitespace-pre-line font-medium">
                    {item.a}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
