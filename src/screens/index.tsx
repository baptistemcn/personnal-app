import { useTranslation } from "react-i18next";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { HomeRoutes } from "@routes";
import { useTheme } from "@theme";

import { Welcome } from "./welcome/Welcome";
import { About } from "./about/About";
import { Certifications } from "./certifications/Certifications";
import { Projects } from "./projects/Projects";

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
      <Tab.Screen
        name="Certifications"
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabel: t("tabs.certifications"),
          tabBarIcon: () => {
            return (
              <MaterialIcons
                name="card-membership"
                size={32}
                color={theme.colors.icon}
              />
            );
          },
        }}
        component={Certifications}
      />
      <Tab.Screen
        name="Projects"
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabel: t("tabs.projects"),
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="test-tube"
                size={32}
                color={theme.colors.icon}
              />
            );
          },
        }}
        component={Projects}
      />
    </Tab.Navigator>
  );
};
