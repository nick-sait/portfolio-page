"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      background: { color: { value: "#161616" } },
      particles: {
        number: { value: 60 },
        color: { value: "#f5f5f5" },
        opacity: { value: 0.5 },
        size: { value: { min: 0.5, max: 1 } },
        move: { enable: true, speed: 2 },
        links: { enable: false },
      },
    }),
    [],
  );

  if (!ready) return null;

  return (
    <>
      <Particles id="tsparticles" options={options}/>
    </>
  );
}
