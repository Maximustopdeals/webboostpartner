"use client";

import { useState, useEffect } from "react";
import FloatingActions from "@/components/FloatingActions";
import CookieBanner from "@/components/CookieBanner";

export default function ClientWidgets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <FloatingActions />
      <CookieBanner />
    </>
  );
}
