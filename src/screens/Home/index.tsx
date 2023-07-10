import { Card } from "@components";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeRoutes } from "src/routes";

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
        component={Card}
      />
    </HomeStack.Navigator>
  );
};
