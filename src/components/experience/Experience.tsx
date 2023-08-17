import { Box, useTheme } from "@theme";
import { ExperienceProps } from "@types";
import { Card, Line, Technology } from "@ui";

import { Durantion } from "./duration/Duration";
import { Title } from "./title/Title";
import { Presentation } from "./presentation/Presentation";

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
            <Experience.Title name={exp.name} />
            <Experience.Duration duration={exp.duration} />
          </Box>
          {exp.presentation && (
            <>
              <Line color={theme.colors.blue} height={2} />
              <Box paddingVertical={"m"}>
                <Experience.Presentation text={exp.presentation} />
              </Box>
            </>
          )}
          {exp.technologies && (
            <>
              <Line />
              <Box paddingVertical={"m"}>
                <Experience.Technology technology={exp.technologies} />
              </Box>
            </>
          )}
        </Card>
      ))}
    </>
  );
};

Experience.Title = Title;
Experience.Duration = Durantion;
Experience.Presentation = Presentation;
Experience.Technology = Technology;
