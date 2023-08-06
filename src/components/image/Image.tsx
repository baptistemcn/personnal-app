import { Image } from "react-native";

import { ImageProps } from "@types";
import { DUMMYIMG } from "@assets";

export const ReImage = ({
  base64,
  resizeMode,
  source = DUMMYIMG,
  styles = { height: 64, width: 64 },
  testID = "img",
}: ImageProps) => {
  return (
    <Image
      source={source}
      style={styles}
      testID={testID}
      src={base64}
      resizeMode={resizeMode}
    />
  );
};
