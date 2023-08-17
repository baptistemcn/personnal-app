import { Box, Text } from "@theme";
import { TechnologyProps } from "@types";

export const Technology = ({
  technology = [{ name: "Lorem Ipsum" }],
}: TechnologyProps) => {
  return (
    <Box flexDirection={"row"} flexWrap={"wrap"}>
      {technology?.map((item, index) => (
        <Box key={index} flexDirection={"row"}>
          <Text paddingHorizontal={"xs"} key={index}>
            {item.name}
          </Text>
          {index !== technology.length - 1 && (
            <Text key={`separator-${index}`}>-</Text>
          )}
        </Box>
      ))}
    </Box>
  );
};
