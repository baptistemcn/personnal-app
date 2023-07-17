import { render } from "@testing-library/react-native";
import { About } from "./About";

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

const mockProps = {
  title: "about.title",
  text: "about.text",
  subtitle: "about.title2",
};

describe("About Screen", () => {
  it("should render", () => {
    render(<About />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<About />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement._fiber.stateNode.props.children).toEqual(
      mockProps.title,
    );
  });

  it("should render a text", () => {
    const { getByTestId } = render(<About />);

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement._fiber.stateNode.props.children).toEqual(mockProps.text);
  });

  it("should render a subtitle", () => {
    const { getByTestId } = render(<About />);

    const subtitleElement = getByTestId("title2");

    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement).toBeOnTheScreen();

    expect(subtitleElement.props.children).toEqual(mockProps.subtitle);
  });
});
