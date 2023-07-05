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

const theme = createTheme({
  colors: {
    background: palette.white,
  },
  spacing: {
    s: spacing.s,
    m: spacing.s,
    l: spacing.s,
    xl: spacing.s,
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
