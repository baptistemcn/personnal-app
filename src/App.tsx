import { useTranslation } from "react-i18next";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { FRENCH_FLAG, US_FLAG } from "@assets";
import { LanguagePicker } from "@components";
import { Box } from "@theme";
import { AppRoutes } from "@routes";
import { HomeNavigator } from "@screens";

const AppStack = createStackNavigator<AppRoutes>();

export const App = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  /* istanbul ignore next */
  const changeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  /* istanbul ignore next */
  const handleChangeLanguage = () => {
    const langMap = {
      en: "fr",
      fr: "en",
    }[language];
    changeLanguage(langMap);
  };

  const flags: { [key: string]: string } = {
    fr: US_FLAG,
    en: FRENCH_FLAG,
  };

  const handleFlag = flags[language] || US_FLAG;

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitle: undefined,
          headerRight: () => (
            <Box margin={"m"}>
              <LanguagePicker
                button={{
                  onPress: handleChangeLanguage,
                }}
                flag={{
                  nation: handleFlag,
                  styles: { height: 32, width: 32 },
                }}
              />
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
