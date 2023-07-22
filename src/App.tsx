import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { FRENCH_FLAG } from "@assets";
import { LanguagePicker } from "@components";
import { Box } from "@theme";
import { AppRoutes } from "@routes";
import { HomeNavigator } from "@screens";

const AppStack = createStackNavigator<AppRoutes>();

export const App = () => {
  const languagePicker = {
    button: {},
    flag: {
      nation: FRENCH_FLAG,
      styles: { height: 32, width: 32 },
    },
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitle: undefined,
          headerRight: () => (
            <Box margin={"m"}>
              <LanguagePicker {...languagePicker} />
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
