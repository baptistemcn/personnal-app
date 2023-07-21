import { TouchableOpacity } from "react-native-gesture-handler";

import { ButtonProps } from "@types";

export const ReButton = ({
  ariaLabel = "default button",
  children,
  onPress,
  testID = "button",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityLabel={ariaLabel}
      onPress={onPress}
      testID={testID}
    >
      {children}
    </TouchableOpacity>
  );
};
