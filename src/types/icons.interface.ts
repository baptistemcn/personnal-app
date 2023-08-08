import { ImageSourcePropType, StyleProp, ImageStyle } from "react-native";

export interface IconsProps {
  source?: ImageSourcePropType;
  base64?: string;
  link?: string;
  name?: string;
  styles?: StyleProp<ImageStyle>;
  testID?: string;
}
