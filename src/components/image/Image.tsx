import { Image } from "react-native";

import { ImageProps } from "@types";

export const ReImage = ({ source, styles, testID }: ImageProps) => {
  return <Image source={source} style={styles} testID={testID} />;
};
