import { Box, Text } from "@theme";
import { useTranslation } from "react-i18next";

export const Card = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text variant="title1" padding="m">
        {t("card.title")}
      </Text>
      <Text variant="text" padding="m">
        {t("card.presentation")}
      </Text>
    </Box>
  );
};
