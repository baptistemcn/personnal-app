import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";

import i18n from "@i18n";

import { FRENCH_FLAG } from "@assets";
import { Flag } from "@components";
import { Box, ThemeProvider } from "@theme";
import { AppRoutes } from "@routes";
import { HomeNavigator } from "@screens";

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <AppStack.Navigator
              screenOptions={{
                headerTitle: undefined,
                headerRight: () => (
                  <Box margin={"m"}>
                    <Flag nation={FRENCH_FLAG} />
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
          </SafeAreaProvider>
        </I18nextProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
