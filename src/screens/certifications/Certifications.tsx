import { CERTIFICATES } from "@assets";
import { Certificate, Wrapper } from "@components";
import { Box, Text } from "@theme";
import { useTranslation } from "react-i18next";

import { ScrollView } from "react-native";

export const Certifications = () => {
  const { t } = useTranslation();
  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"} testID="title">
          {t("certificate.title")}
        </Text>
        <Box marginVertical={"l"}>
          <Certificate certificate={CERTIFICATES.reverse()} />
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
