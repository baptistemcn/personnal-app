import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface CardProps {
  backgroundColor?: string;
  borderRadius?: number;
  children: ReactNode;
  margin?: number;
  maxWidth?: string;
  minWidth?: string;
  shadowColor?: string;
  shadowOffet?: ShadowOffet;
  shadowOpacity?: number;
  shadowRadius?: number;
  styles?: StyleProp<ViewStyle>;
  padding?: number;
}

interface ShadowOffet {
  height: number;
  width: number;
}
