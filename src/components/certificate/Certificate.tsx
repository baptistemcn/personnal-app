import { useTranslation } from "react-i18next";

import { Box, Text } from "@theme";
import { CertificateProps } from "@types";

import { Card } from "../card/Card";
import { Link } from "../link/Link";

export const Certificate = ({
  certificate = [
    {
      inProgress: true,
      link: "https://lorem.ipsum",
      name: "Lorem Ipsum",
      testID: "certificate",
    },
  ],
}: CertificateProps) => {
  const { t } = useTranslation();
  return (
    <>
      {certificate.map((cert, index) => (
        <Card key={index}>
          <Box
            flex={1}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
            alignSelf={"center"}
            marginVertical={"m"}
            style={{ gap: 30 }}
            testID={cert.testID}
          >
            <Text variant={"title4"} testID="cert-name">
              {cert.name}
            </Text>
            {cert.inProgress && (
              <Text testID="inprogress">({t("certificate.label")})</Text>
            )}
          </Box>
          <Box marginVertical={"m"}>
            <Link link={cert.link}>
              <Text variant={"link"} testID="cert-link">
                {cert.link}
              </Text>
            </Link>
          </Box>
        </Card>
      ))}
    </>
  );
};
