/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import { type Lang, translations } from './i18n';
import { LangContext } from './LangContext';
import { useLang } from './LangContext';

const langs: Lang[] = ['nl', 'fr', 'de'];

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="absolute top-4 right-4 md:top-6 md:right-8 z-50 flex items-center gap-1 border border-purple-300/40 rounded-lg overflow-hidden bg-white/10 backdrop-blur-md">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 md:px-4 md:py-2 font-orbitron text-[10px] md:text-sm font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer border-none ${
            lang === l
              ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.6)]'
              : 'bg-transparent text-purple-300 hover:bg-purple-500/20 hover:text-white'
          }`}
          aria-label={`Taal: ${l.toUpperCase()}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('nl');
  const t = useCallback(
    (key: keyof typeof translations.nl) => translations[lang][key],
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <HelmetProvider>
        <div className="relative h-screen w-screen overflow-hidden bg-black font-sans selection:bg-pink-500/30">
          
          {/* Language Switcher top right */}
          <LanguageSwitcher />

          {/* Purple Synthwave Grid Background */}
          <div className="absolute inset-0 synthwave-grid-light z-0 pointer-events-none opacity-50"></div>

          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] z-0 pointer-events-none"></div>

          <Helmet>
            <title>Best of the Best – BJJ Edition | De Ultieme Confrontatie</title>
            <meta name="description" content="Best of the Best BJJ Edition – De ultieme confrontatie op de mat. Ervaar de retro-futuristische strijd in 80s synthwave stijl." />
            <meta name="keywords" content="BJJ, Best of the Best, Brazilian Jiu-Jitsu, martial arts, evenement, synthwave, tickets, line-up" />
            <link rel="canonical" href="/" />
          </Helmet>
          
          <main className="relative z-10 h-full w-full flex flex-col">
            <HomePage />
          </main>

        </div>
      </HelmetProvider>
    </LangContext.Provider>
  );
}

