import React from 'react';
import { Rocket, Play } from 'lucide-react';
import SplineCanvas from './SplineCanvas.jsx';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" /> Live 3D
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Feel the Speed of Formula 1
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Immerse yourself in a high-octane, real-time 3D experience. Explore the aerodynamics, power, and precision of modern F1 engineering right in your browser.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-500">
              <Rocket className="h-4 w-4" /> Start Your Engine
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              <Play className="h-4 w-4" /> Watch Demo
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
            <div>
              <span className="font-semibold text-white">60 FPS</span> smooth playback
            </div>
            <div>
              <span className="font-semibold text-white">WebGL</span> accelerated
            </div>
            <div>
              <span className="font-semibold text-white">Interactive</span> controls
            </div>
          </div>
        </div>
        <div className="relative h-[420px] w-full md:h-[560px]">
          <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-red-600/30 via-transparent to-transparent blur-2xl" />
          <div className="h-full w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl">
            <SplineCanvas url="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}
