import { Image } from "react-native";
import { useTranslation } from "react-i18next";

import { ME } from "@assets";
import { Box, Text } from "@theme";

import { styles } from "./card.styles";
import { Wrapper } from "../wrapper/Wrapper";

export const Card = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Box alignItems={"center"}>
        <Image source={ME} style={styles.img} testID="me-img" />
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
