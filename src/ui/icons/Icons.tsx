import { DUMMYIMG } from "@assets";
import { Text } from "@theme";
import { IconsProps } from "@types";

import { ReImage } from "../../components/image/Image";
import { openLink } from "@functions";
import { ReButton } from "@ui";

export const Icons = ({
  base64,
  link = "https://github.com/baptistemcn",
  name = "Lorem Ipsum",
  source = DUMMYIMG,
  styles = {
    height: 32,
    width: 32,
  },
  testID = "icon",
}: IconsProps) => {
  return (
    <ReButton
      onPress={() => openLink(link)}
      styles={{ alignItems: "center" }}
      {...{ testID }}
    >
      <ReImage
        source={source}
        base64={base64}
        styles={styles}
        resizeMode="contain"
      />
      {name && (
        <Text variant={"italic"} paddingVertical={"xs"}>
          {name}
        </Text>
      )}
    </ReButton>
  );
};
