import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { HomeRoutes } from "@routes";
import { useTheme } from "@theme";

import { Welcome } from "./welcome/Welcome";

const Tab = createBottomTabNavigator<HomeRoutes>();

export const HomeNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Welcome"
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => {
            return (
              <MaterialIcons name="home" size={32} color={theme.colors.icon} />
            );
          },
        }}
        component={Welcome}
      />
    </Tab.Navigator>
  );
};
