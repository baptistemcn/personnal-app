import { Wrapper } from "@components";

import { Text } from "@theme";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Text variant={"title1"} padding={"l"} testID="title">
        {t("about.title")}
      </Text>
      <Text variant={"text"} padding={"l"} testID="text">
        {t("about.text")}
      </Text>
    </Wrapper>
  );
};
