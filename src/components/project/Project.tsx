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
          <Box testID="project">
            <Text variant={"title4"} testID="title">
              {proj.title}
            </Text>
            <Box marginVertical={"m"}>
              <Text variant={"text"} testID="description">
                {proj.description}
              </Text>
            </Box>
            <Box marginVertical={"s"}>
              <Link link={proj.link}>
                <Text variant={"link"} testID="link-label">
                  {proj.link}
                </Text>
              </Link>
            </Box>
          </Box>
        </Card>
      ))}
    </>
  );
};
