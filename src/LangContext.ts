import { createContext, useContext } from 'react';
import { type Lang, translations, type TranslationKey } from './i18n';

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

export const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => translations.en[key],
});

export function useLang() {
  return useContext(LangContext);
}
