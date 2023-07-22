import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";

import i18n from "@i18n";
import { ThemeProvider } from "@theme";

import { App } from "./App";

export const Entry = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
