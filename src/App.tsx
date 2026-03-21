/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import { type Lang, translations } from './i18n';
import { LangContext } from './LangContext';

export default function App() {
  const [lang, setLang] = useState<Lang>('nl');
  const t = useCallback(
    (key: keyof typeof translations.nl) => translations[lang][key],
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <HelmetProvider>
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
