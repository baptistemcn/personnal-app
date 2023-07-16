import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { HomeRoutes } from "@routes";
import { useTheme } from "@theme";

import { Welcome } from "./welcome/Welcome";
import { About } from "./about/About";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator<HomeRoutes>();

export const HomeNavigator = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabel: t("tabs.home"),
          tabBarIcon: () => {
            return (
              <MaterialIcons name="home" size={32} color={theme.colors.icon} />
            );
          },
        }}
        component={Welcome}
      />
      <Tab.Screen
        name="About"
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabel: t("tabs.about"),
          tabBarIcon: () => {
            return (
              <MaterialIcons name="info" size={32} color={theme.colors.icon} />
            );
          },
        }}
        component={About}
      />
    </Tab.Navigator>
  );
};
