import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import { getCertifications } from "@api";
import { Certificate, ReAlert, Spinner, Wrapper } from "@components";
import { mapError } from "@functions";
import { Box, Text } from "@theme";
import { CertificateItem } from "@types";

export const Certifications = () => {
  const [certifications, setCertifications] =
    useState<Array<CertificateItem>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<string>("");

  const { t } = useTranslation();

  useEffect(() => {
    getCertifications()
      .then((data) => {
        setCertifications(data);
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
