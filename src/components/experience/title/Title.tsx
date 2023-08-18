import { Text } from "@theme";
import { ExperienceTitleProps } from "@types";

export const Title = ({ name = "Lorem Ipsum" }: ExperienceTitleProps) => (
  <Text variant={"title3"} paddingVertical={"s"} testID="exp-title">
    {name}
  </Text>
);
