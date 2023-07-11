import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";

import { HomeNavigator } from "./index";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("HomeStack Navigator", () => {
  it("should render", () => {
    render(
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>,
    );
  });
});
