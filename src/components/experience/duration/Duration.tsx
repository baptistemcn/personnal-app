import { Text } from "@theme";
import { ExperienceDurationProps } from "@types";

export const Durantion = ({ duration = "NaN" }: ExperienceDurationProps) => (
  <Text variant={"date"} paddingVertical={"s"} testID="exp-date">
    {duration}
  </Text>
);
