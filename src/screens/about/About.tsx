import { useTranslation } from "react-i18next";

import { Experience, Wrapper } from "@components";
import { Box, Text } from "@theme";
import { ScrollView } from "react-native";

export const About = () => {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} padding={"l"} testID="title">
          {t("about.title")}
        </Text>
        <Text variant={"text"} padding={"l"} testID="text">
          {t("about.text")}
        </Text>
        <Box>
          <Experience />
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
