import { render } from "@testing-library/react-native";

import { DUMMYIMG, FRENCH_FLAG } from "@assets";
import { LanguagePicker } from "@components";

import { App } from "./App";

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

const mockhandleChangeLanguage = jest.fn();

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });

  it("should render languagePicker", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const langPickerElement = getByTestId("language-picker");

    expect(langPickerElement).toBeTruthy();
    expect(langPickerElement).toBeOnTheScreen();

    expect(
      langPickerElement.props.children.props.children.props.source,
    ).toEqual(DUMMYIMG);

    expect(langPickerElement.props.children.props.onPress).toBeUndefined();
  });

  it("should render languagePicker with defined props", () => {
    const { getByTestId } = render(
      <LanguagePicker
        button={{
          onPress: mockhandleChangeLanguage,
        }}
        flag={{
          nation: FRENCH_FLAG,
          styles: { height: 32, width: 32 },
        }}
      />,
    );

    const langPickerElement = getByTestId("language-picker");

    expect(langPickerElement).toBeTruthy();
    expect(langPickerElement).toBeOnTheScreen();

    expect(
      langPickerElement.props.children.props.children.props.source,
    ).toEqual(FRENCH_FLAG);

    expect(
      langPickerElement.props.children.props.onPress._isMockFunction,
    ).toEqual(true);
  });
});
