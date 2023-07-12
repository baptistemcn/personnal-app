import { useTranslation } from "react-i18next";

import { ME } from "@assets";
import { Box, Text } from "@theme";

import { ReImage } from "../image/Image";
import { Wrapper } from "../wrapper/Wrapper";

import { styles } from "./card.styles";

export const Card = () => {
  const { t } = useTranslation();

  const IMG = {
    source: ME,
    styles: styles.img,
    testID: "me-img",
  };

  return (
    <Wrapper>
      <Box alignItems={"center"}>
        <ReImage {...IMG} />
      </Box>
      <Text variant="title1" padding="m">
        {t("card.title")}
      </Text>
      <Text variant="text" padding="m">
        {t("card.presentation")}
      </Text>
    </Wrapper>
  );
};
