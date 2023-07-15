import { Box, Text, useTheme } from "@theme";
import { Line } from "../line/Line";
import { Technology } from "../technology/Technology";
import { ExperienceProps } from "@types";

export const Experience = ({
  experience = [
    {
      name: "Lorem Ipsum",
      duraction: "NaN",
      presentation: "Lorem Ipsum",
      technology: [{ name: "Lorem Ipsum" }],
    },
  ],
}: ExperienceProps) => {
  const theme = useTheme();
  return (
    <>
      {experience?.map((exp, index) => (
        <Box
          maxWidth={"90%"}
          minWidth={"90%"}
          padding={"s"}
          borderRadius={"m"}
          shadowColor={"shadow"}
          shadowOffset={{
            width: -2,
            height: 4,
          }}
          shadowOpacity={0.2}
          shadowRadius={3}
          backgroundColor={"background"}
          key={index}
        >
          <Box>
            <Text variant={"title3"} paddingVertical={"s"} testID="exp-title">
              {exp.name}
            </Text>
            <Text variant={"date"} paddingVertical={"s"} testID="exp-date">
              {exp.duraction}
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
          {exp.technology && (
            <>
              <Line />
              <Box paddingVertical={"m"}>
                <Technology />
              </Box>
            </>
          )}
        </Box>
      ))}
    </>
  );
};
