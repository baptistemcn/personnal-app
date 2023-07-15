import { Box, Text } from "@theme";
import { Line } from "../line/Line";

export const Experience = () => {
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
      <Line />
      <Box paddingVertical={"m"}>
        <Text variant={"text"} textAlign={"left"} testID="exp-text">
          Dans mon rôle actuel bla bla bla
        </Text>
      </Box>
    </Box>
  );
};
