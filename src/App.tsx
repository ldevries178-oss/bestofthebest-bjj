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
    <div className="fixed top-4 right-4 md:top-6 md:right-8 z-[9999] flex items-center space-x-3 font-bold bg-[#0a0a0f]/80 p-2 pl-6 rounded-lg backdrop-blur-sm border-l border-gray-700 text-sm tracking-widest uppercase">
      {langs.map((l, idx) => (
        <div key={l} className="flex flex-row items-center space-x-3">
          <span 
            onClick={() => setLang(l)}
            className={`cursor-pointer nav-3d-effect transition-all ${lang === l ? 'text-synthBlue' : 'text-synthPink opacity-80 hover:opacity-100 hover:text-synthBlue'}`}
          >
            {l}
          </span>
          {idx < langs.length - 1 && <span className="text-gray-600">|</span>}
        </div>
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

