import { useTranslation } from "react-i18next";

import { Box, Text } from "@theme";
import { CertificateProps } from "@types";

import { Card } from "../card/Card";
import { Link } from "../link/Link";

export const Certificate = ({
  inProgress = true,
  link = "https://github.com",
  name = "Lorem Ipsum",
}: CertificateProps) => {
  const { t } = useTranslation();
  return (
    <Card>
      <Box
        flex={1}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        alignSelf={"center"}
        marginVertical={"m"}
        style={{ gap: 30 }}
      >
        <Text variant={"title4"} marginHorizontal={"s"}>
          {name}
        </Text>
        {inProgress && <Text>({t("certificate.label")})</Text>}
      </Box>
      <Box marginVertical={"m"}>
        <Link link={link}>
          <Text variant={"link"}>{link}</Text>
        </Link>
      </Box>
    </Card>
  );
};
