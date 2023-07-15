import { useTranslation } from "react-i18next";

import { ICONS, IMG } from "@assets";
import { Presentation } from "@components";
import { Box } from "@theme";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <Box flex={1} testID="welcome">
      <Presentation
        icons={ICONS}
        img={IMG}
        title={t("card.title")}
        text={t("card.presentation")}
        testID="card"
      />
    </Box>
  );
};
