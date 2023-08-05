import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { Project, ReAlert, Spinner, Wrapper } from "@components";
import { Box, Text } from "@theme";
import { useEffect, useState } from "react";
import { getProjects } from "@api";
import { ProjectItems } from "@types";

export const Projects = () => {
  const [projects, setProjects] = useState<Array<ProjectItems>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<string>("");

  const { t } = useTranslation();

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setDisplayError(error);
        setError(true);
        setLoading(true);
      });
  }, []);

  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"} testID="project-title">
          {t("projects.title")}
        </Text>
        <Box marginVertical={"l"} testID="projects">
          {loading ? <Spinner /> : <Project project={projects} />}
          {error && (
            <ReAlert message={displayError} title={t("alert.error.title")} />
          )}
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
