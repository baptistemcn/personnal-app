import { TouchableOpacity } from "react-native-gesture-handler";

import { ButtonProps } from "@types";

export const ReButton = ({
  ariaLabel = "default button",
  children,
  onPress,
  styles,
  testID = "button",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityLabel={ariaLabel}
      onPress={onPress}
      style={styles}
      testID={testID}
    >
      {children}
    </TouchableOpacity>
  );
};
