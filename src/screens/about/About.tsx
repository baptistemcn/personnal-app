import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { Experience, Spinner, Wrapper } from "@components";
import { mapError } from "@functions";
import { Box, Text } from "@theme";
import { useAbout } from "@hooks";
import { ReAlert } from "@ui";

export const About = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  const { about, displayError, error, loading } = useAbout(lang);

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
