import { Box, Text } from "@theme";
import { Card } from "../card/Card";

export const Certificate = () => {
  return (
    <Card>
      <Box
        flex={1}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        alignSelf={"center"}
        marginVertical={"m"}
        style={{ gap: 30 }}
      >
        <Text variant={"title4"} marginHorizontal={"s"}>
          Certificate
        </Text>
        <Text textAlign={"right"}>inProgress</Text>
      </Box>
      <Box marginVertical={"m"}>
        <Text variant={"text"}>Link</Text>
      </Box>
    </Card>
  );
};
