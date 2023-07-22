import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export interface ButtonProps {
  ariaLabel?: string;
  children?: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
  testID?: string;
}
