import { useTranslation } from "react-i18next";

import { DUMMYIMG } from "@assets";
import { Box, Text } from "@theme";
import { CertificateProps } from "@types";

import { Card } from "../card/Card";
import { Link } from "../link/Link";
import { ReImage } from "../image/Image";

export const Certificate = ({
  certificate = [
    {
      inProgress: true,
      link: "https://lorem.ipsum",
      name: "Lorem Ipsum",
      icons: [{ source: DUMMYIMG }, { source: DUMMYIMG }, { source: DUMMYIMG }],
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
              <ReImage
                key={index}
                source={icon.source}
                styles={{ height: 32, width: 32 }}
              />
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
