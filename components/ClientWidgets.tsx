"use client";

import { useState, useEffect } from "react";
import FloatingActions from "@/components/FloatingActions";
import CookieBanner from "@/components/CookieBanner";

export default function ClientWidgets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // ✅ Wacht 2.5 seconden (of tot de browser het rustig heeft) voordat we dit laden
    // Dit haalt de TBT omlaag omdat de main thread eerst vrij is voor de rest van de pagina
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <FloatingActions />
      <CookieBanner />
    </>
  );
}
