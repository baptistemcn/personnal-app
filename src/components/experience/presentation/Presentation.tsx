import { Text } from "@theme";
import { ExperiencePresentationProps } from "@types";

export const Presentation = ({
  text = "Lorem Ipsum",
}: ExperiencePresentationProps) => (
  <Text variant={"text"} textAlign={"left"} testID="exp-text">
    {text}
  </Text>
);
