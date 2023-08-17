import { Text } from "@theme";

interface ExperienceDurationProps {
  duration?: string;
}

export const Durantion = ({ duration = "NaN" }: ExperienceDurationProps) => (
  <Text variant={"date"} paddingVertical={"s"} testID="exp-date">
    {duration}
  </Text>
);
