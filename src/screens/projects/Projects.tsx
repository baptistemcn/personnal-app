import { Project, Wrapper } from "@components";
import { Box, Text } from "@theme";
import { ScrollView } from "react-native";

export const Projects = () => {
  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"}>
          Projects
        </Text>
        <Box marginVertical={"l"}>
          <Project />
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
