import { DUMMYIMG } from "@assets";
import { Box } from "@theme";
import { IconsProps } from "@types";

import { ReImage } from "../image/Image";
import { Link } from "../link/Link";

export const Icons = ({
  link = "https://github.com/baptistemcn",
  name = "Lorem Ipsum",
  source = DUMMYIMG,
  styles = {
    height: 32,
    width: 32,
  },
  testID = "icons",
}: IconsProps) => {
  return (
    <Box padding={"m"} testID={testID}>
      <Link link={link} ariaLabel={name} testID="link">
        <ReImage source={source} styles={styles} testID="icon" />
      </Link>
    </Box>
  );
};
