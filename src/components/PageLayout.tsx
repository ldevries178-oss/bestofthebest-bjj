import React from 'react';
import { useLang } from '../LangContext';
import { Link } from 'react-router-dom';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  const { t } = useLang();

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white flex flex-col items-center relative overflow-x-hidden font-sans">
      {/* Static Retro Grid */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #00ffff 1px, transparent 1px),
              linear-gradient(to bottom, #00ffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-4xl px-4 py-24 md:py-32 flex flex-col items-center">
        <Link to="/" className="mb-8 group flex items-center gap-2 text-synth-blue hover:text-synth-pink transition-colors font-orbitron text-sm">
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {t('backToHome') || 'BACK TO HOME'}
        </Link>

        <h1 className="font-orbitron font-bold text-3xl md:text-5xl mb-12 text-center tracking-tighter neon-text-blue">
          {title}
        </h1>

        <div className="w-full bg-[#1a1a2e]/60 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-synth-blue/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
          {children}
        </div>
      </main>

      {/* Footer (Simplified) */}
      <footer className="relative z-10 w-full py-12 border-t border-white/10 flex justify-center gap-8 font-orbitron text-[10px] md:text-xs tracking-widest uppercase opacity-60">
        <Link to="/about" className="hover:text-synth-blue transition-colors">About</Link>
        <Link to="/terms" className="hover:text-synth-blue transition-colors">Terms</Link>
        <Link to="/privacy" className="hover:text-synth-blue transition-colors">Privacy</Link>
        <Link to="/contact" className="hover:text-synth-blue transition-colors">Contact</Link>
      </footer>
    </div>
  );
}
