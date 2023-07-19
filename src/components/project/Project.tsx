import { Box, Text } from "@theme";

import { Card } from "../card/Card";
import { Link } from "../link/Link";

export const Project = () => {
  return (
    <Card>
      <Text variant={"title4"}>Title</Text>
      <Box marginVertical={"m"}>
        <Text variant={"text"}>Description</Text>
      </Box>
      <Box>
        <Link>
          <Text variant={"link"}>Link</Text>
        </Link>
      </Box>
    </Card>
  );
};
