// components/ClientWidgets.tsx
"use client";

import dynamic from "next/dynamic";

// ✅ Deze worden pas na de initiële page load ingeladen
const FloatingActions = dynamic(() => import("@/components/FloatingActions"), {
  ssr: false,
});

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), {
  ssr: false,
});

export default function ClientWidgets() {
  return (
    <>
      <FloatingActions />
      <CookieBanner />
    </>
  );
}
