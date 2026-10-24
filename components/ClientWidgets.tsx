"use client";

import { useState, useEffect } from "react";
import FloatingActions from "@/components/FloatingActions";
import CookieBanner from "@/components/CookieBanner";

export default function ClientWidgets() {
  const [isMounted, setIsMounted] = useState(false);

  // Wacht tot de pagina in de browser draait (hydration)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Tijdens de eerste Server Render (SSR) renderen we niets
  if (!isMounted) return null;

  // Zodra de pagina in de browser staat, laden we de zware widgets in
  return (
    <>
      <FloatingActions />
      <CookieBanner />
    </>
  );
}
