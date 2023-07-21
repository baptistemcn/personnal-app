import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { PROJECTS } from "@assets";
import { Project, Wrapper } from "@components";
import { Box, Text } from "@theme";

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"} testID="project-title">
          {t("projects.title")}
        </Text>
        <Box marginVertical={"l"} testID="projects">
          <Project project={PROJECTS.reverse()} />
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
