import { Box, theme } from "@theme";
import { CardProps } from "@types";

export const Card = ({
  backgroundColor = theme.colors.background,
  borderRadius = theme.borderRadii.m,
  children,
  maxWidth = "90%",
  minWidth = "90%",
  shadowColor = theme.colors.shadow,
  shadowOffet = {
    height: 4,
    width: -2,
  },
  shadowOpacity = 0.2,
  shadowRadius = 3,
  padding = theme.spacing.s,
  styles = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    padding: padding,
    shadowColor: shadowColor,
    shadowOffset: shadowOffet,
  },
}: CardProps) => {
  return (
    <Box
      maxWidth={maxWidth}
      minWidth={minWidth}
      shadowOffset={shadowOffet}
      shadowOpacity={shadowOpacity}
      shadowRadius={shadowRadius}
      style={styles}
      testID="card"
    >
      {children}
    </Box>
  );
};
