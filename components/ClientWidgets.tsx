"use client";

import dynamic from "next/dynamic";

// ✅ dynamic import voor named exports
const FloatingActions = dynamic(
  () => import("@/components/FloatingActions").then((mod) => mod.FloatingActions),
  { ssr: false }
);

const CookieBanner = dynamic(
  () => import("@/components/CookieBanner").then((mod) => mod.CookieBanner),
  { ssr: false }
);

export default function ClientWidgets() {
  return (
    <>
      <FloatingActions />
      <CookieBanner />
    </>
  );
}
