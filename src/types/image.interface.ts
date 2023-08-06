import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";

export interface ImageProps {
  base64?: string;
  resizeMode?: ImageResizeMode | undefined;
  source?: ImageSourcePropType;
  styles?: StyleProp<ImageStyle>;
  testID?: string;
}
