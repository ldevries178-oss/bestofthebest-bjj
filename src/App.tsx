/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Tournament from './pages/Tournament';
import Sponsors from './pages/Sponsors';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Press from './pages/Press';
import TeamAdmissions from './pages/TeamAdmissions';
import Contact from './pages/Contact';
import TicketsPage from './pages/TicketsPage';
import LineupPage from './pages/LineupPage';
import LocatiePage from './pages/LocatiePage';
import { type Lang, translations } from './i18n';
import { LangContext, useLang } from './LangContext';

function SocialIcons() {
  return (
    <div className="fixed top-0 left-0 p-4 md:p-6 z-[100] pointer-events-none">
      <nav className="flex gap-3 items-center pointer-events-auto">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/bestofthebest_bjj/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-[#0a0a0f]/40 backdrop-blur-sm hover:border-synth-blue transition-all"
          aria-label="Instagram"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/@bestofthebest_bjj"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-[#0a0a0f]/40 backdrop-blur-sm hover:border-synth-blue transition-all"
          aria-label="YouTube"
        >
          <svg className="w-6 h-6 text-current youtube-icon-fix" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
        </a>
        {/* Smoothcomp */}
        <a
          href="https://www.smoothcomp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-[#0a0a0f]/40 backdrop-blur-sm hover:border-synth-blue transition-all"
          aria-label="Smoothcomp"
        >
          <svg className="w-6 h-6 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
            <rect x="8" y="8" width="8" height="8" rx="2" ry="2" />
            <rect x="11" y="11" width="2" height="2" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </nav>
    </div>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <header className="fixed top-0 right-0 p-4 md:p-6 flex justify-end z-[100] pointer-events-none w-auto">
      <nav className="flex gap-1.5 md:gap-2 items-center p-1.5 pointer-events-auto font-orbitron z-50 bg-[#0a0a0f]/60 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl">
        {(['en', 'nl', 'fr', 'de'] as const).map((l) => (
          <button 
            key={l}
            onClick={() => setLang(l)} 
            className={`
              px-3 py-1.5 text-[10px] md:text-xs font-bold tracking-widest rounded-lg transition-all duration-300
              ${lang === l 
                ? 'bg-synth-blue/20 text-synth-blue shadow-[0_0_15px_rgba(0,255,255,0.3)] border border-synth-blue/50' 
                : 'text-white/40 hover:text-white/80 hover:bg-white/5 border border-transparent'}
            `}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
}

function AppContent() {
  return (
    <>
      <SocialIcons />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/press" element={<Press />} />
        <Route path="/teams" element={<TeamAdmissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/lineup" element={<LineupPage />} />
        <Route path="/location" element={<LocatiePage />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const t = useCallback(
    (key: keyof typeof translations.en) => translations[lang][key],
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <HelmetProvider>
        <Router>
          <Helmet>
            <title>Best of the Best – BJJ Edition | The Ultimate Grappling Championship</title>
            <meta name="description" content="Best of the Best BJJ Edition – The ultimate grappling championship. Experience the retro-futuristic battle in 80s synthwave style." />
            <meta name="keywords" content="BJJ, Best of the Best, Grappling, martial arts, event, synthwave, tickets, line-up" />
            <link rel="canonical" href="/" />
          </Helmet>
          
          <AppContent />
        </Router>
      </HelmetProvider>
    </LangContext.Provider>
  );
}
