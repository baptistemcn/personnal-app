import { TouchableOpacity } from "react-native-gesture-handler";

import { LinkProps } from "@types";
import { useCallback } from "react";
import { Linking } from "react-native";

export const Link = ({
  ariaLabel = "link",
  children,
  link = "https://github.com",
  testID = "link",
}: LinkProps) => {
  const handleClick = useCallback(async () => {
    Linking.openURL(link);
  }, [link]);

  return (
    <TouchableOpacity
      onPress={handleClick}
      accessibilityLabel={ariaLabel}
      testID={testID}
    >
      {children}
    </TouchableOpacity>
  );
};
