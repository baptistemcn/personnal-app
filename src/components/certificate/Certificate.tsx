import { useTranslation } from "react-i18next";

import { BASE64 } from "@assets";
import { Box, Text } from "@theme";
import { CertificateProps } from "@types";
import { Card, Icons, Link } from "@ui";

export const Certificate = ({
  certificate = [
    {
      inProgress: true,
      link: "https://lorem.ipsum",
      name: "Lorem Ipsum",
      icons: [
        { link: "https://lorem.ipsum/1", name: "Lorem", base64: BASE64 },
        { link: "https://lorem.ipsum/1", name: "Lorem", base64: BASE64 },
        { link: "https://lorem.ipsum/1", name: "Lorem", base64: BASE64 },
      ],
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
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            alignSelf={"center"}
            marginVertical={"s"}
            testID={cert.testID}
          >
            <Text variant={"title4"} testID="cert-name" paddingHorizontal={"m"}>
              {cert.name}
            </Text>
            {cert.inProgress && (
              <Text testID="inprogress">({t("certificate.label")})</Text>
            )}
          </Box>
          <Box
            flexDirection={"row"}
            alignSelf={"center"}
            style={{ columnGap: 20 }}
            testID="icons"
          >
            {cert.icons?.map((icon, index) => (
              <Icons {...icon} key={index} />
            ))}
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
