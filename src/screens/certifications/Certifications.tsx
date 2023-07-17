import { Certificate, Wrapper } from "@components";
import { Box, Text } from "@theme";
import { ScrollView } from "react-native";

export const Certifications = () => {
  return (
    <ScrollView>
      <Wrapper>
        <Text variant={"title1"} marginVertical={"l"} testID="title">
          Certifications
        </Text>
        <Box marginVertical={"l"}>
          <Certificate />
        </Box>
      </Wrapper>
    </ScrollView>
  );
};
