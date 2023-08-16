import { DUMMYIMG } from "@assets";
import { FlagProps } from "@types";

import { ReImage } from "../image/Image";

export const Flag = ({
  nation = DUMMYIMG,
  styles = { height: 32, width: 32 },
}: FlagProps) => {
  return <ReImage source={nation} styles={styles} testID="flag" />;
};
