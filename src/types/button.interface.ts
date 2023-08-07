import { ReactNode } from "react";
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  ariaLabel?: string;
  children?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  styles?: StyleProp<ViewStyle>;
  testID?: string;
}
