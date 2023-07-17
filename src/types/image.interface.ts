import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

export interface ImageProps {
  source?: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
  testID?: string;
}
