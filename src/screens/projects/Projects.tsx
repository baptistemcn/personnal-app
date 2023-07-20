import { ScrollView } from "react-native";

import { PROJECTS } from "@assets";
import { Project, Wrapper } from "@components";
import { Box, Text } from "@theme";

export const Projects = () => {
  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"}>
          Projects
        </Text>
        <Box marginVertical={"l"}>
          <Project project={PROJECTS.reverse()} />
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
