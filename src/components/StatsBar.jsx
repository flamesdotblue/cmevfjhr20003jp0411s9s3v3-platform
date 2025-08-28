import React from 'react';
import { Gauge, Zap, Wind } from 'lucide-react';

export default function StatsBar() {
  return (
    <section id="features" className="mx-auto mt-4 w-full max-w-6xl px-4 pb-16">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={<Gauge className="h-5 w-5" />} title="Top Speed" value="370 km/h" desc="Blistering straights" />
        <StatCard icon={<Zap className="h-5 w-5" />} title="0-100" value="1.6 s" desc="Lightning acceleration" />
        <StatCard icon={<Wind className="h-5 w-5" />} title="Downforce" value="> 5 G" desc="Cornering forces" />
      </div>
    </section>
  );
}

function StatCard({ icon, title, value, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center gap-3 text-white/80">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">{icon}</div>
        <div className="text-sm">{title}</div>
      </div>
      <div className="mt-3 text-2xl font-semibold">{value}</div>
      <div className="text-sm text-white/60">{desc}</div>
    </div>
  );
}
