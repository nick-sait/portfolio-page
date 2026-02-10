"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {

  const [visible, setVisible] = useState(false); // Set header visible 
  const [activeSection, setActiveSection] = useState("home"); // default -> highlights current page section

  // Reveal header at 300 pixels
  const REVEAL_AT = 300;

  // Scroll event listener to fetch current section
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > REVEAL_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["about", "projects", "contact"];

    // Wait one frame so layout/DOM is settled
    let raf = requestAnimationFrame(() => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const spyLine = () => window.innerHeight * 0.35;

      const observer = new IntersectionObserver(
        (entries) => {
          // Build a map so we can reason over all sections consistently
          const byId = new Map(entries.map((e) => [e.target.id, e]));

          // Consider only the sections we care about (in order)
          const ordered = ids.map((id) => byId.get(id)).filter(Boolean);

          const line = spyLine();

          // 1) Prefer the section that contains the spy line
          const containing = ordered.find((e) => {
            const top = e.boundingClientRect.top;
            const bottom = e.boundingClientRect.bottom;
            return top <= line && bottom >= line;
          });

          if (containing?.target?.id) {
            setActiveSection(containing.target.id);
            return;
          }

          // 2) Fallback: pick the last section whose top is above the spy line
          let current = ids[0];
          for (const e of ordered) {
            if (e.boundingClientRect.top <= line) current = e.target.id;
          }
          setActiveSection(current);
        },
        {
          root: null,
          // Trigger updates “early” and keep updates flowing
          threshold: [0, 0.01, 0.1],
          rootMargin: "0px 0px -60% 0px",
        },
      );

      sections.forEach((s) => observer.observe(s));

      // Also update on resize (spy line changes)
      const onResize = () => {
        // force a recalculation by manually checking current positions
        const line = spyLine();
        let current = ids[0];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= line) current = id;
        }
        setActiveSection(current);
      };

      window.addEventListener("resize", onResize);

      // Cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", onResize);
      };
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  const linkClass = (id) =>
    [
      "text-md lg:text-xl transition-all duration-200",
      "hover:cursor-pointer",
      id === activeSection ? "text-brand" : "text-white",
      "hover:text-brand",
    ].join(" ");


    ["home", "about","projects","contact"].map(id => [id, !!document.getElementById(id)])

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 font-sans",
        "bg-[#101010]/80 flex flex-row lg:justify-end justify-center lg:gap-x-16 gap-x-4 py-4 px-12",
        "transition-all duration-300 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-6 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <Link href="/#home" className={linkClass("home")}>
        Home
      </Link>
      <Link href="/#about" className={linkClass("about")}>
        About
      </Link>
      <Link href="/#projects" className={linkClass("projects")}>
        Projects
      </Link>
      <Link href="/#contact" className={linkClass("contact")}>
        Contact
      </Link>
    </nav>
  );
}
