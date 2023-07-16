import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as SecureStore from "expo-secure-store";
import { getLocales } from "expo-localization";

import * as en from "./translations/en.json";
import * as fr from "./translations/fr.json";

const locales = {
  en,
  fr,
};

const DEFAULT_LOCALE = "fr";
const defaultLanguage = getLocales()[0]?.languageCode || DEFAULT_LOCALE;

const useLanguageStorage = {
  type: "languageDetector",
  async: true,
  detect: async (callback: (arg0: string) => void) => {
    const lang = await SecureStore.getItemAsync("language");
    callback(lang || defaultLanguage);
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init: () => {},
  cacheUserLanguage: async (language: string) => {
    SecureStore.setItemAsync("language", language);
  },
};

i18n
  .use(initReactI18next)
  .use(useLanguageStorage)
  .init({
    fallbackLng: DEFAULT_LOCALE,
    compatibilityJSON: "v3",
    resources: locales,
    debug: false,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
