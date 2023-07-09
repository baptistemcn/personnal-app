import { Card, Wrapper } from "@components";
import { ThemeProvider } from "@theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

export default function App() {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Wrapper>
          <Card />
        </Wrapper>
      </I18nextProvider>
    </ThemeProvider>
  );
}
