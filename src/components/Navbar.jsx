import React from 'react';
import { Flag, Car, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-600/90 shadow-lg shadow-red-500/30">
            <Car className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm uppercase tracking-widest text-white/70">Grand Prix</div>
            <div className="text-lg font-semibold">F1 Velocity</div>
          </div>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-white/80 transition hover:text-white" href="#features">Features</a>
          <a className="text-sm text-white/80 transition hover:text-white" href="#schedule">Schedule</a>
          <a className="text-sm text-white/80 transition hover:text-white" href="#tickets">Tickets</a>
          <a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20" href="#cta">
            <Flag className="h-4 w-4" /> Get Access
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white/80 hover:text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
