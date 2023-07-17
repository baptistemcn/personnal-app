import { Image } from "react-native";

import { ImageProps } from "@types";
import { DUMMYIMG } from "@assets";

export const ReImage = ({
  source = DUMMYIMG,
  styles = { height: 64, width: 64 },
  testID = "img",
}: ImageProps) => {
  return <Image source={source} style={styles} testID={testID} />;
};
