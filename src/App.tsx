import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LanguagePicker } from "@components";
import { Box } from "@theme";
import { AppRoutes } from "@routes";
import { HomeNavigator } from "@screens";

const AppStack = createStackNavigator<AppRoutes>();

export const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitle: undefined,
          headerRight: () => (
            <Box margin={"m"}>
              <LanguagePicker />
            </Box>
          ),
        }}
      >
        <AppStack.Screen
          name="Home"
          options={{
            title: "Baptiste Marcon",
          }}
          component={HomeNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
