"use client";

import ParticlesBg from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black">
      {/* background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <ParticlesBg />
      </div>

      {/* content */}
      <div className="relative z-10">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
