import { Box, Text } from "@theme";

interface ExperiencePresentationProps {
  text?: string;
}

export const Presentation = ({
  text = "Lorem Ipsum",
}: ExperiencePresentationProps) => (
  <Box paddingVertical={"m"}>
    <Text variant={"text"} textAlign={"left"} testID="exp-text">
      {text}
    </Text>
  </Box>
);
