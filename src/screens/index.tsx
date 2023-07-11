import { createStackNavigator } from "@react-navigation/stack";

import { HomeRoutes } from "@routes";
import { Welcome } from "./welcome/Welcome";

const HomeStack = createStackNavigator<HomeRoutes>();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Welcome"
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
        component={Welcome}
      />
    </HomeStack.Navigator>
  );
};
