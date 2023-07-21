import { FlagProps } from "@types";
import { ReImage } from "../image/Image";
import { DUMMYIMG } from "@assets";
import { Box } from "@theme";

export const Flag = ({
  nation = DUMMYIMG,
  styles = { height: 32, width: 32 },
}: FlagProps) => {
  return (
    <Box margin={"m"}>
      <ReImage source={nation} styles={styles} testID="flag" />
    </Box>
  );
};
