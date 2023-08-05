import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { getAbout } from "@api";
import { Experience, ReAlert, Spinner, Wrapper } from "@components";
import { Box, Text } from "@theme";
import { ExperienceItem } from "@types";

export const About = () => {
  const [about, setAbout] = useState<Array<ExperienceItem>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<string>("");

  const { i18n, t } = useTranslation();

  const lang = i18n.language;

  useEffect(() => {
    getAbout(lang)
      .then((data) => {
        setAbout(data);
        setLoading(false);
      })
      .catch((error) => {
        setDisplayError(error);
        setError(true);
        setLoading(true);
      });
  }, [lang]);

  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} padding={"l"} testID="title">
          {t("about.title")}
        </Text>
        <Text variant={"text"} padding={"l"} testID="text">
          {t("about.text")}
        </Text>
        <Text variant={"title3"} padding={"l"} testID="title2">
          {t("about.title2")}
        </Text>
        <Box testID="experience">
          {loading ? <Spinner /> : <Experience experiences={about} />}
          {error && (
            <ReAlert message={displayError} title={t("alert.error.title")} />
          )}
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
