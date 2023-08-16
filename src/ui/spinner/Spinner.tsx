import { ActivityIndicator } from "react-native";

import { Box } from "@theme";
import { SpinnerProps } from "@types";

export const Spinner = ({ color = "000000", size = "small" }: SpinnerProps) => {
  return (
    <Box>
      <ActivityIndicator color={color} size={size} testID="spinner" />
    </Box>
  );
};
