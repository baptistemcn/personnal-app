import { render } from "@testing-library/react-native";

import { Welcome } from "./Welcome";

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

describe("Welcome screen", () => {
  it("should render", () => {
    render(<Welcome />);
  });

  it("should render card component", () => {
    const { getByTestId } = render(<Welcome />);

    const welcomeComponent = getByTestId("welcome");

    expect(welcomeComponent).toBeTruthy();
    expect(welcomeComponent).toBeOnTheScreen();
  });

  it("should render with passing through props", () => {
    const { getByTestId } = render(<Welcome />);

    const cardComponent = getByTestId("card");

    expect(cardComponent).toBeTruthy();
    expect(cardComponent).toBeOnTheScreen();

    expect(cardComponent.props).toBeDefined();
  });
});
