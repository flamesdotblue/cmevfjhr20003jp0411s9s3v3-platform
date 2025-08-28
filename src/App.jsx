import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import StatsBar from './components/StatsBar.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-neutral-950 to-black" />
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-red-600/20 blur-[120px]" />
      </div>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <Footer />
    </div>
  );
}
