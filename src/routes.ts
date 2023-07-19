import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type AppRoutes = {
  Home: undefined;
};

export type HomeRoutes = {
  Welcome: undefined;
  About: undefined;
  Certifications: undefined;
  Projects: undefined;
};
