"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ParticlesBg = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <ParticlesBg />
      </div>

      <div className="relative z-10">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
