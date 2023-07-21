import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

export interface FlagProps {
  nation?: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
}
