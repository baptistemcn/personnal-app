import { useCallback } from "react";
import { Linking } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Box } from "@theme";
import { IconsProps } from "@types";

import { ReImage } from "../image/Image";

export const Icons = ({ link, name, source, styles }: IconsProps) => {
  const handleClick = useCallback(async () => {
    Linking.openURL(link);
  }, [link]);

  return (
    <Box padding={"m"}>
      <TouchableOpacity onPress={handleClick} aria-label={name}>
        <ReImage source={source} styles={styles} testID="icon" />
      </TouchableOpacity>
    </Box>
  );
};
