import { Box, Text, useTheme } from "@theme";
import { Line } from "../line/Line";
import { Technology } from "../technology/Technology";

export const Experience = () => {
  const theme = useTheme();
  return (
    <Box
      maxWidth={"90%"}
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
    >
      <Box>
        <Text variant={"title3"} paddingVertical={"s"} testID="exp-title">
          Full-Stack Developer - Nehs Digital
        </Text>
        <Text variant={"date"} paddingVertical={"s"} testID="exp-date">
          Janv. 2022
        </Text>
      </Box>
      <Line color={theme.colors.blue} height={2} />
      <Box paddingVertical={"m"}>
        <Text variant={"text"} textAlign={"left"} testID="exp-text">
          Dans mon rôle actuel bla bla bla
        </Text>
      </Box>
      <Line />
      <Box paddingVertical={"m"}>
        <Technology />
      </Box>
    </Box>
  );
};
