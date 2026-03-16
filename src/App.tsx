/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import TicketsPage from './pages/TicketsPage';
import LineupPage from './pages/LineupPage';
import LocatiePage from './pages/LocatiePage';
import { type Lang, translations } from './i18n';
import { LangContext } from './LangContext';
import { useLang } from './LangContext';

const langs: Lang[] = ['nl', 'fr', 'de'];

function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 ml-4 border border-purple-300/40 rounded-lg overflow-hidden">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1.5 font-orbitron text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border-none ${
            lang === l
              ? 'bg-purple-600 text-white'
              : 'bg-transparent text-purple-500 hover:bg-purple-100 hover:text-purple-700'
          }`}
          aria-label={`Taal: ${l.toUpperCase()}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Navigation() {
  const { t } = useLang();
  const navLinks = [
    { to: '#home', label: t('home') },
    { to: '#about', label: t('about') },
    { to: '#tickets', label: t('tickets') },
    { to: '#line-up', label: t('lineup') },
    { to: '#contact', label: t('contact') },
  ];

  return (
    <nav id="main-navigation" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-purple-200/50 shadow-sm" aria-label="Hoofdnavigatie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 no-underline group" aria-label="Naar homepage">
            <span className="font-orbitron text-sm md:text-base font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300">
              BOTB
            </span>
            <span className="hidden sm:inline font-rajdhani text-xs text-purple-400 tracking-[0.15em] uppercase border-l border-purple-200 pl-3">
              BJJ Edition
            </span>
          </a>

          {/* Nav Links + Language Switcher */}
          <div className="flex items-center">
            <ul className="flex items-center gap-1 sm:gap-2 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    id={`nav-${link.label.toLowerCase().replace(/[^a-z]/g, '-')}`}
                    className="relative px-3 py-2 sm:px-4 font-orbitron text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase rounded-md transition-all duration-300 no-underline text-purple-400 hover:text-purple-700 hover:bg-purple-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
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
        <div className="relative min-h-screen flex flex-col overflow-hidden bg-white font-sans selection:bg-pink-500/30">
          
          {/* Purple Synthwave Grid Background */}
          <div className="absolute inset-0 synthwave-grid-light z-0 pointer-events-none"></div>

          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06)_0%,transparent_70%)] z-0 pointer-events-none"></div>

          {/* Navigation */}
          <Navigation />

          {/* Main Content Area with top padding for fixed nav */}
          <Helmet>
            <title>Best of the Best – BJJ Edition | De Ultieme Confrontatie</title>
            <meta name="description" content="Best of the Best BJJ Edition – De ultieme confrontatie op de mat. Ervaar de retro-futuristische strijd in 80s synthwave stijl." />
            <meta name="keywords" content="BJJ, Best of the Best, Brazilian Jiu-Jitsu, martial arts, evenement, synthwave, tickets, line-up" />
            <link rel="canonical" href="/" />
          </Helmet>
          <main className="relative z-10 flex-1 flex flex-col pt-16">
            <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col">
              <HomePage />
            </section>
            <section id="tickets" className="min-h-screen flex flex-col border-t border-purple-100">
              <TicketsPage />
            </section>
            <section id="line-up" className="min-h-screen flex flex-col border-t border-purple-100 bg-purple-50/30">
              <LineupPage />
            </section>
            <section id="locatie" className="min-h-screen flex flex-col border-t border-purple-100">
              <LocatiePage />
            </section>
          </main>

          {/* Footer */}
          <footer className="relative z-10 border-t border-purple-100 bg-white/90 backdrop-blur-md py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-rajdhani text-xs text-purple-400 tracking-wider uppercase">
                {t('copyright')}
              </p>
              <div className="flex items-center gap-4">
                {[
                  { to: '#tos', label: t('tos') },
                  { to: '#privacy', label: t('privacy') },
                ].map((link) => (
                  <a
                    key={link.to}
                    href={link.to}
                    className="font-rajdhani text-xs text-purple-400 tracking-wider uppercase hover:text-purple-600 transition-colors duration-300 no-underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </HelmetProvider>
    </LangContext.Provider>
  );
}
