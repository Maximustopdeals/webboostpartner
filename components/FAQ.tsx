
"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  schemaId?: string;
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number>(0);
  const instanceId = useId();

  return (
    <div className="border-t border-border-subtle">
      {items.map((item: FAQItem, index: number) => {
        const isOpen = open === index;
        const answerId = `${instanceId}-faq-answer-${index}`;
        const buttonId = `${instanceId}-faq-button-${index}`;

        return (
          <div
            key={index}
            className="border-b border-border-subtle transition-all duration-200"
            data-testid={`faq-item-${index}`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span
                className={`font-sans font-medium text-lg sm:text-xl transition-colors ${
                  isOpen
                    ? "text-brand-accessible"
                    : "text-foreground group-hover:text-brand-accessible"
                }`}
              >
                {item.q}
              </span>

              <span
                className={`shrink-0 grid place-items-center w-8 h-8 rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-brand-accessible text-white rotate-180"
                    : "bg-background-secondary text-foreground group-hover:bg-brand-accessible group-hover:text-white"
                }`}
                aria-hidden="true"
              >
                {isOpen ? (
                  <Minus size={16} strokeWidth={2} />
                ) : (
                  <Plus size={16} strokeWidth={2} />
                )}
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div className="text-foreground-muted font-sans leading-relaxed text-base whitespace-pre-line pr-12">
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
