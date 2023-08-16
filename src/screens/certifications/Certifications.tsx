import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { Certificate, Spinner, Wrapper } from "@components";
import { mapError } from "@functions";
import { Box, Text } from "@theme";
import { useCertifications } from "@hooks";
import { ReAlert } from "@ui";

export const Certifications = () => {
  const { t } = useTranslation();

  const { certifications, displayError, error, loading } = useCertifications();

  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"} testID="title">
          {t("certificate.title")}
        </Text>
        <Box marginVertical={"l"} testID="certificate">
          {loading ? <Spinner /> : <Certificate certificate={certifications} />}
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
