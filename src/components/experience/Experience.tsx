import { Box, Text, useTheme } from "@theme";
import { ExperienceProps } from "@types";
import { Card } from "@ui";

import { Line } from "../line/Line";
import { Technology } from "../technology/Technology";

export const Experience = ({
  experiences = [
    {
      name: "Lorem Ipsum",
      presentation: "Lorem Ipsum",
      duration: "NaN",
      technologies: [{ name: "Lorem Ipsum" }, { name: "Lorem Ipsum" }],
    },
  ],
}: ExperienceProps) => {
  const theme = useTheme();
  return (
    <>
      {experiences?.map((exp, index) => (
        <Card key={index}>
          <Box>
            <Text variant={"title3"} paddingVertical={"s"} testID="exp-title">
              {exp.name}
            </Text>
            <Text variant={"date"} paddingVertical={"s"} testID="exp-date">
              {exp.duration}
            </Text>
          </Box>
          {exp.presentation && (
            <>
              <Line color={theme.colors.blue} height={2} />
              <Box paddingVertical={"m"}>
                <Text variant={"text"} textAlign={"left"} testID="exp-text">
                  {exp.presentation}
                </Text>
              </Box>
            </>
          )}
          {exp.technologies && (
            <>
              <Line />
              <Box paddingVertical={"m"}>
                <Technology technology={exp.technologies} />
              </Box>
            </>
          )}
        </Card>
      ))}
    </>
  );
};
