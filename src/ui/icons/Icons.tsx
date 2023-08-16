import { DUMMYIMG } from "@assets";
import { openLink } from "@functions";
import { Text } from "@theme";
import { IconsProps } from "@types";

import { ReButton } from "../button/Button";
import { ReImage } from "../image/Image";

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
