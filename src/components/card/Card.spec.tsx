import { render } from "@testing-library/react-native";
import { Card } from "./Card";

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

describe("Card Component", () => {
  it("should render", () => {
    render(<Card />);
  });

  it("should render a title", () => {
    const { getByText } = render(<Card />);

    const titleElement = getByText("card.title");

    expect(titleElement).toBeTruthy();
  });

  it("should render a text presentation", () => {
    const { getByText } = render(<Card />);

    const textElement = getByText("card.presentation");

    expect(textElement).toBeTruthy();
  });
});
