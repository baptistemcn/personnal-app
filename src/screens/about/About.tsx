import { Experience, Wrapper } from "@components";

import { Box, Text } from "@theme";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Text variant={"title1"} padding={"l"} testID="title">
        {t("about.title")}
      </Text>
      <Text variant={"text"} padding={"l"} testID="text">
        {t("about.text")}
      </Text>
      <Box style={{ backgroundColor: "red" }}>
        <Experience />
      </Box>
    </Wrapper>
  );
};
