import { ImageSourcePropType, StyleProp, ImageStyle } from "react-native";

export interface IconsProps {
  source: ImageSourcePropType;
  link: string;
  name: string;
  styles: StyleProp<ImageStyle>;
}
