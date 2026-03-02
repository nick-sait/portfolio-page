"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const weaveScreenshots = [
  { src: "/images/weave-1.jpg", alt: "Weave app screenshot 1" },
  { src: "/images/weave-2.jpg", alt: "Weave app screenshot 2" },
  { src: "/images/weave-3.jpg", alt: "Weave app screenshot 3" },
];

const abScreenshots = [
  {
    src: "/images/ab-1.png",
    alt: "Absolute Yardworks homepage",
    ratio: "video",
  },
  { src: "/images/ab-2.png", alt: "Quote builder interface", ratio: "5/4" },
  { src: "/images/ab-3.png", alt: "Mobile booking layout", ratio: "video" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(null);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="projects" className="relative mb-60">
      <div className="mx-auto px-4 sm:px-6 lg:px-44 py-12 sm:py-16">
        <h2 className="text-brand font-sans lg:text-left text-center lg:text-6xl text-3xl font-semibold lg:tracking-widest">
          Projects
        </h2>

        {/* Seperator */}
        <div className="bg-[#474747] h-0.5 w-full my-20 lg:my-40"></div>

        {/* Weave */}
        <div className="grid items-center lg:grid-cols-2 lg:items-start">
          {/* Left content */}
          <div className="flex flex-col gap-y-8 sm:gap-y-10 lg:max-w-3/4">
            {/* Header */}
            <div>
              <div className="flex items-center gap-x-4">
                <h3 className="text-brand font-sans text-4xl sm:text-5xl lg:text-7xl">
                  Weave
                </h3>
              </div>

              <p className="text-[#eee] text-base sm:text-lg lg:text-xl mt-4">
                A full-stack mobile app for discovering local events and
                communities, curated and personalized to user interests. Built with React
                Native, Supabase (Postgres), Node.js, Python, and AWS.
              </p>

              <p className="text-brand text-base sm:text-lg lg:text-xl font-light mt-3">
                Launching - Spring 2026
              </p>
            </div>

            <div className="text-[#eee] text-sm sm:text-base font-light py-6 sm:py-8 lg:py-12 rounded-2xl">
              <p className="mb-4">
                <span className="font-bold text-brand text-xl"> • </span>Custom
                ETL pipeline ingests events from high-quality sources,
                classifies them by type, and normalizes them into the
                databases schema.
              </p>
              <p className="mb-4">
                <span className="font-bold text-brand text-xl"> • </span>
                Personalized onboarding captures user interests to surface
                relevant events and reduce noise.
              </p>
              <p className="mb-0">
                <span className="font-bold text-brand text-xl"> • </span>
                Create operations that allow users to generate their own events and communities.
              </p>
            </div>
          </div>

          {/* Screens */}
          <div className="-mx-4 px-4 overflow-x-auto lg:overflow-visible lg:mx-0 lg:px-0">
            <div className="flex gap-x-4 sm:gap-x-6 w-max lg:w-auto justify-start lg:justify-center snap-x snap-mandatory">
              {weaveScreenshots.map((img) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(img)}
                  className="relative w-35 sm:w-45 md:w-55 lg:w-60 aspect-6/13 shrink-0 snap-start transition-transform duration-300 hover:scale-105"
                  aria-label={`Open ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    title="Click me!"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 240px, (min-width: 768px) 220px, (min-width: 640px) 180px, 140px"
                    priority
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Seperator */}
        <div className="bg-[#474747] h-0.5 w-full my-20 lg:my-40"></div>

        {/* AB Yardwoks */}
        <div className="flex flex-col lg:flex-row-reverse lg:gap-x-12 items-center min-h-auto">
          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
            {/* Header */}
            <div>
              <div className="flex items-center gap-x-4">
                <h3 className="text-brand font-sans  text-4xl sm:text-5xl lg:text-6xl">
                  Absolute Yardworks
                </h3>
              </div>

              <p className="text-[#eee] text-base sm:text-lg lg:text-xl mt-4">
                A full-stack marketing + booking site built for a local service
                business. Built with Next.js, Tailwind CSS, and Resend
              </p>
            </div>

            <div className="text-[#eee] text-sm sm:text-base font-light py-4 sm:py-6 rounded-2xl">
              <p className="mb-4">
                <span className="font-bold text-brand text-xl"> • </span>Quote +
                booking flow lets customers submit service requests, see
                estimated pricing, and sends clean email notifications to the
                business.
              </p>
              <p className="mb-4">
                <span className="font-bold text-brand text-xl"> • </span>
                SEO-focused structure with fast load times, clear service pages,
                and mobile-first design.
              </p>
              <p className="mb-0">
                <span className="font-bold text-brand text-xl"> • </span>
                Designed as a conversion-first landing experience with strong
                CTAs and polished UI.
              </p>
            </div>
          </div>

          {/* Image Collage */}
          <div className="w-full lg:w-1/2">
            <div className="group relative w-full rounded-2xl transition-all duration-300 hover:-translate-y-1 p-4">
              <div className="space-y-4">
                {/* Hero (16:9) */}
                <button
                  type="button"
                  onClick={() => setActive(abScreenshots[0])}
                  className="relative w-full aspect-video overflow-hidden rounded"
                >
                  <Image
                    src="/images/ab-1.png"
                    alt="Absolute Yardworks homepage"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 560px, 92vw"
                  />
                </button>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setActive(abScreenshots[1])}
                    className="relative aspect-[5/4] overflow-hidden rounded"
                  >
                    <Image
                      src="/images/ab-2.png"
                      alt="Quote builder interface"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActive(abScreenshots[2])}
                    className="relative aspect-video overflow-hidden rounded"
                  >
                    <Image
                      src="/images/ab-3.png"
                      alt="Mobile booking layout"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seperator */}
        <div className="bg-[#474747] h-0.5 w-full my-20 lg:my-40"></div>

        {/* Trade Data */}
        <div className="grid items-center grid-cols-1  lg:items-start">
          {/* Left content */}
          <div className="mx-4 flex lg:flex-row  flex-col gap-x-8 sm:gap-y-10">
            {/* Header */}
            <div>
              <div className="flex items-center gap-x-4">
                <h3 className="text-brand font-sans text-4xl sm:text-5xl lg:text-7xl">
                  Trade Data Explorer
                </h3>
              </div>

              <p className="text-[#eee] text-base sm:text-lg lg:text-xl mt-4">
                Written in Next.js and DuckDB, this tool combines a passion for
                economics and data manipulation to allow a user to filter by
                trade categories between nations to visualize trade flows.
              </p>
            </div>

            <div className="text-[#eee] text-sm sm:text-base font-light py-6 sm:py-8 lg:py-12 rounded-2xl">
              <p className="mb-4">
                <span className="font-bold text-brand text-xl"> • </span>Ingests
                trade data from UNComtrade and transforms them into parquet
                files for fast fetching.
              </p>
              <p className="mb-4">
                <span className="font-bold text-brand text-xl"> • </span>
                Breaks down trade by parent sectors and further by child
                sectors.
              </p>
              <p className="mb-0">
                <span className="font-bold text-brand text-xl"> • </span>
                Plots defecit/surplus between nations and sectors. 
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <div className="group relative w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/trade-data-explorer.png"
                alt="Trade Data Explorer dashboard"
                fill
                quality={100}
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                sizes="(min-width: 1536px) 1200px,
             (min-width: 1280px) 1000px,
             (min-width: 1024px) 800px,
             92vw"
              />
            </div>
          </div>
        </div>

        {/* Seperator */}
        <div className="bg-[#474747] h-0.5 w-full my-20 lg:my-40"></div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/20"
            >
              ✕
            </button>

            <div
              className={`relative ${
                active.ratio === "video"
                  ? "w-[min(90vw,1000px)] aspect-video"
                  : active.ratio === "5/4"
                    ? "w-[min(90vw,800px)] aspect-[5/4]"
                    : "w-[min(85vw,380px)] aspect-6/13"
              }`}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
