import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-white/60 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} F1 Velocity. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="transition hover:text-white" href="#privacy">Privacy</a>
          <a className="transition hover:text-white" href="#terms">Terms</a>
          <a className="transition hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
