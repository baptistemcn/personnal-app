import { useTranslation } from "react-i18next";

import { Experience, Wrapper } from "@components";
import { Box, Text } from "@theme";
import { ScrollView } from "react-native";
import { experiences } from "@assets";

export const About = () => {
  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  const EXPERIENCES = experiences(lang);

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
          <Experience experiences={EXPERIENCES} />
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
