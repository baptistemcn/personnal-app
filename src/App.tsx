import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";

import i18n from "@i18n";
import { ThemeProvider } from "@theme";

import { AppRoutes } from "./routes";
import { HomeNavigator } from "./screens";

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <I18nextProvider i18n={i18n}>
          <SafeAreaProvider>
            <AppStack.Navigator screenOptions={{ headerTitle: undefined }}>
              <AppStack.Screen
                name="Home"
                options={{
                  title: "Baptiste",
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
