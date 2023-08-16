import { TouchableOpacity } from "react-native-gesture-handler";

import { openLink } from "@functions";
import { LinkProps } from "@types";

export const Link = ({
  ariaLabel = "link",
  children,
  link = "https://github.com",
  testID = "link",
}: LinkProps) => {
  return (
    <TouchableOpacity
      onPress={() => openLink(link)}
      accessibilityLabel={ariaLabel}
      testID={testID}
    >
      {children}
    </TouchableOpacity>
  );
};
