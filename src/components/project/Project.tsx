import { Box, Text, useTheme } from "@theme";
import { ProjectProps } from "@types";

import { Card } from "../card/Card";
import { Link } from "../link/Link";

export const Project = ({
  project = [
    {
      title: "Lorem Ipsum Title",
      description: "Lorem Ipsum Description",
      link: "https://lorem.ipsum",
    },
  ],
}: ProjectProps) => {
  const theme = useTheme();
  return (
    <>
      {project?.map((proj, index) => (
        <Card key={index} padding={theme.spacing.m}>
          <Text variant={"title4"}>{proj.title}</Text>
          <Box marginVertical={"m"}>
            <Text variant={"text"}>{proj.description}</Text>
          </Box>
          <Box>
            <Link link={proj.link}>
              <Text variant={"link"}>{proj.link}</Text>
            </Link>
          </Box>
        </Card>
      ))}
    </>
  );
};
