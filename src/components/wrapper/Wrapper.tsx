import { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./wrapper.styles";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <View style={styles.container} testID="wrapper">
      {children}
    </View>
  );
};
