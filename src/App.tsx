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
    <header className="fixed top-0 right-0 w-full p-4 md:p-6 flex justify-end z-[100] pointer-events-none">
      <nav className="flex gap-4 md:gap-6 items-center bg-black/40 px-6 py-2 rounded-full border border-[#ff00ff]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(255,0,255,0.2)] pointer-events-auto font-orbitron">
        <button 
          onClick={() => setLang('nl')} 
          className={`px-3 py-1 text-sm font-bold uppercase transition-colors rounded ${lang === 'nl' ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
        >
          NL
        </button>
        <button 
          onClick={() => setLang('fr')} 
          className={`px-3 py-1 text-sm font-bold uppercase transition-colors rounded ${lang === 'fr' ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
        >
          FR
        </button>
        <button 
          onClick={() => setLang('de')} 
          className={`px-3 py-1 text-sm font-bold uppercase transition-colors rounded ${lang === 'de' ? 'text-pink-400' : 'text-white hover:text-pink-400'}`}
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
        {/* Fixeer de taalknoppen (NL, FR, DE) rechtsboven */}
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
