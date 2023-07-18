/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";

import { borderRadius } from "./borderradius";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";
import { spacing } from "./spacing";

interface ThemeProviderProps {
  children: ReactNode;
}

export const theme = createTheme({
  colors: {
    background: palette.white,
    icon: palette.grey,
    text: palette.black,
    shadow: palette.shadow,
    blue: palette.blue,
  },
  spacing: {
    xs: spacing.xs,
    s: spacing.s,
    m: spacing.m,
    l: spacing.l,
    xl: spacing.xl,
  },
  borderRadii: {
    s: borderRadius.s,
    m: borderRadius.m,
    l: borderRadius.l,
    xl: borderRadius.xl,
  },
  breakpoints: {
    phone: breakpoints.phone,
    tablet: breakpoints.tablet,
  },
  textVariants: {
    title1: {
      fontSize: 28,
      color: "text",
      textAlign: "center",
    },
    title2: {
      fontSize: 24,
      color: "text",
      textAlign: "center",
    },
    title3: {
      fontSize: 20,
      color: "text",
      fontWeight: "bold",
      textAlign: "left",
    },
    title4: {
      fontSize: 18,
      color: "text",
      fontWeight: "bold",
      textAlign: "center",
    },
    date: {
      fontSize: 18,
      color: "text",
      fontStyle: "italic",
      textAlign: "left",
    },
    text: {
      fontSize: 16,
      color: "text",
      textAlign: "center",
    },
    link: {
      fontSize: 16,
      color: "blue",
      textAlign: "center",
      textDecorationLine: "underline",
    },
  },
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
