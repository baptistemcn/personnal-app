import { useTranslation } from "react-i18next";

import { FRENCH_FLAG, US_FLAG } from "@assets";
import { Box } from "@theme";
import { ReButton, ReImage } from "@ui";

export const LanguagePicker = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  /* istanbul ignore next */
  const changeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  /* istanbul ignore next */
  const handleChangeLanguage = () => {
    const langMap = {
      en: "fr",
      fr: "en",
    }[language];
    changeLanguage(langMap);
  };

  const flags: { [key: string]: string } = {
    fr: US_FLAG,
    en: FRENCH_FLAG,
  };

  const handleFlag = flags[language] || US_FLAG;

  return (
    <Box testID="language-picker-box">
      <ReButton
        ariaLabel="language"
        onPress={handleChangeLanguage}
        testID="language-picker"
      >
        <ReImage
          source={handleFlag}
          styles={{ height: 32, width: 32 }}
          testID="flag"
        />
      </ReButton>
    </Box>
  );
};
