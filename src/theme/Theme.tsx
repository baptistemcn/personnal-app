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

import { palette } from "./palette";

interface ThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  colors: {
    background: palette.white,
  },
  spacing: {},
  borderRadii: {},
  breakpoints: {},
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
