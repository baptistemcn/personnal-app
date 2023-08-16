import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { Project } from "@components";
import { mapError } from "@functions";
import { useProjects } from "@hooks";
import { Box, Text } from "@theme";
import { ReAlert, Spinner, Wrapper } from "@ui";

export const Projects = () => {
  const { t } = useTranslation();

  const { displayError, error, loading, projects } = useProjects();

  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"} testID="project-title">
          {t("projects.title")}
        </Text>
        <Box marginVertical={"l"} testID="projects">
          {loading ? <Spinner /> : <Project project={projects} />}
          {error && (
            <ReAlert
              message={mapError(t(displayError))}
              title={t("alert.error.title")}
            />
          )}
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
