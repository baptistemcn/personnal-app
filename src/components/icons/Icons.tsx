import { useCallback } from "react";
import { Linking } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Box } from "@theme";
import { IconsProps } from "@types";

import { ReImage } from "../image/Image";
import { DUMMYIMG } from "@assets";

export const Icons = ({
  link = "https://github.com/baptistemcn",
  name = "Lorem Ipsum",
  source = DUMMYIMG,
  styles = {
    height: 32,
    width: 32,
  },
  testID = "icons",
}: IconsProps) => {
  const handleClick = useCallback(async () => {
    Linking.openURL(link);
  }, [link]);

  return (
    <Box padding={"m"} testID={testID}>
      <TouchableOpacity onPress={handleClick} aria-label={name} testID="link">
        <ReImage source={source} styles={styles} testID="icon" />
      </TouchableOpacity>
    </Box>
  );
};
