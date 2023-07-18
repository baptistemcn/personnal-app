import { render } from "@testing-library/react-native";
import { Certifications } from "./Certifications";

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

describe("Certifications screen", () => {
  it("should render", () => {
    render(<Certifications />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<Certifications />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual("Certifications");
  });

  it("should render a certificate card", () => {
    const { getByTestId } = render(<Certifications />);

    const cardElement = getByTestId("certification1");

    expect(cardElement.props.children[0].props).toEqual({
      children: "Modern Javascript by dev.ui",
      paddingHorizontal: "m",
      variant: "title4",
      testID: "cert-name",
    });
  });
});
