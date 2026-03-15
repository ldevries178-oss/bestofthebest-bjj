import { createContext, useContext } from 'react';
import { type Lang, translations, type TranslationKey } from './i18n';

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

export const LangContext = createContext<LangContextType>({
  lang: 'nl',
  setLang: () => {},
  t: (key) => translations.nl[key],
});

export function useLang() {
  return useContext(LangContext);
}
