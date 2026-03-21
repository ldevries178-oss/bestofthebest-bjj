/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import { type Lang, translations } from './i18n';
import { LangContext, useLang } from './LangContext';

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <header className="fixed top-0 left-0 w-full p-4 md:p-6 flex justify-end z-[100] pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      <nav className="flex gap-4 md:gap-6 items-center px-4 py-2 pointer-events-auto font-orbitron z-50">
        <button 
          onClick={() => setLang('nl')} 
          className={`px-2 py-1 text-sm font-bold uppercase transition-all duration-300 rounded hover:scale-110 hover:text-[#00ffff] hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${lang === 'nl' ? 'text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]' : 'text-[#ff00ff]/70'}`}
        >
          NL
        </button>
        <button 
          onClick={() => setLang('fr')} 
          className={`px-2 py-1 text-sm font-bold uppercase transition-all duration-300 rounded hover:scale-110 hover:text-[#00ffff] hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${lang === 'fr' ? 'text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]' : 'text-[#ff00ff]/70'}`}
        >
          FR
        </button>
        <button 
          onClick={() => setLang('de')} 
          className={`px-2 py-1 text-sm font-bold uppercase transition-all duration-300 rounded hover:scale-110 hover:text-[#00ffff] hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${lang === 'de' ? 'text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]' : 'text-[#ff00ff]/70'}`}
        >
          DE
        </button>
      </nav>
    </header>
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
        <LanguageSwitcher />
        <Helmet>
          <title>Best of the Best – BJJ Edition | De Ultieme Confrontatie</title>
          <meta name="description" content="Best of the Best BJJ Edition – De ultieme confrontatie op de mat. Ervaar de retro-futuristische strijd in 80s synthwave stijl." />
          <meta name="keywords" content="BJJ, Best of the Best, Brazilian Jiu-Jitsu, martial arts, evenement, synthwave, tickets, line-up" />
          <link rel="canonical" href="/" />
        </Helmet>
        
        <HomePage />
      </HelmetProvider>
    </LangContext.Provider>
  );
}
