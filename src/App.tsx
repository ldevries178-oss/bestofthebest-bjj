/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import { type Lang, translations } from './i18n';
import { LangContext, useLang } from './LangContext';

function SocialIcons() {
  return (
    <div className="fixed top-0 left-0 p-4 md:p-6 z-[100] pointer-events-none">
      <nav className="flex gap-3 md:gap-4 items-center pointer-events-auto">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        {/* YouTube */}
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
          aria-label="YouTube"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
        </a>
        {/* Smoothcomp */}
        <a
          href="https://www.smoothcomp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link flex items-center justify-center p-[2px]"
          aria-label="Smoothcomp"
        >
          <div 
            style={{ 
              width: '22px',
              height: '22px',
              backgroundColor: 'currentColor', 
              maskImage: 'url(/smoothcomp-icon.png)', 
              maskSize: 'contain', 
              maskRepeat: 'no-repeat', 
              maskPosition: 'center',
              WebkitMaskImage: 'url(/smoothcomp-icon.png)',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center'
            }} 
          />
        </a>
      </nav>
    </div>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <header className="fixed top-0 right-0 p-4 md:p-6 flex justify-end z-[100] pointer-events-none bg-gradient-to-b from-black/80 via-black/40 to-transparent w-auto">
      <nav className="flex gap-4 md:gap-6 items-center px-4 py-2 pointer-events-auto font-orbitron z-50">
        <button 
          onClick={() => setLang('en')} 
          className={`px-2 py-1 text-sm font-bold uppercase transition-all duration-300 rounded hover:scale-110 hover:text-[#00ffff] hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] ${lang === 'en' ? 'text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]' : 'text-[#ff00ff]/70'}`}
        >
          ENG
        </button>
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
  const [lang, setLang] = useState<Lang>('en');
  const t = useCallback(
    (key: keyof typeof translations.en) => translations[lang][key],
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <HelmetProvider>
        <SocialIcons />
        <LanguageSwitcher />
        <Helmet>
          <title>Best of the Best – BJJ Edition | The Ultimate Grappling Championship</title>
          <meta name="description" content="Best of the Best BJJ Edition – The ultimate grappling championship. Experience the retro-futuristic battle in 80s synthwave style." />
          <meta name="keywords" content="BJJ, Best of the Best, Grappling, martial arts, event, synthwave, tickets, line-up" />
          <link rel="canonical" href="/" />
        </Helmet>
        
        <HomePage />
      </HelmetProvider>
    </LangContext.Provider>
  );
}
