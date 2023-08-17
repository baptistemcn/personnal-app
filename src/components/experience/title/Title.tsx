import { Text } from "@theme";

interface ExperienceTitleProps {
  name?: string;
}

export const Title = ({ name = "Lorem Ipsum" }: ExperienceTitleProps) => (
  <Text variant={"title3"} paddingVertical={"s"} testID="exp-title">
    {name}
  </Text>
);
