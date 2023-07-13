import { useTranslation } from "react-i18next";

import { ICONS, IMG } from "@assets";
import { Card } from "@components";
import { Box } from "@theme";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <Box flex={1}>
      <Card
        icons={ICONS}
        img={IMG}
        title={t("card.title")}
        text={t("card.presentation")}
      />
    </Box>
  );
};
