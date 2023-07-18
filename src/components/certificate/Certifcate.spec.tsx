import { render } from "@testing-library/react-native";
import { Certificate } from "./Certificate";

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
  inProgress: true,
  link: "https://google.com/",
  name: "Google",
  testID: "google",
};

describe("Certicate component", () => {
  it("should render", () => {
    render(<Certificate />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const certificateElement = getByTestId("certificate");

    expect(certificateElement).toBeTruthy();
    expect(certificateElement).toBeOnTheScreen();
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(<Certificate {...mockProps} />);

    const certificateElement = getByTestId("google");

    expect(certificateElement).toBeTruthy();
    expect(certificateElement).toBeOnTheScreen();
  });

  it("should render inProgress status with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const inProgressElement = getByTestId("inprogress");

    expect(inProgressElement).toBeTruthy();
    expect(inProgressElement).toBeOnTheScreen();

    expect(inProgressElement.props.children).toEqual([
      "(",
      "certificate.label",
      ")",
    ]);
  });

  it("should render inProgress status with defined props", () => {
    const { getByTestId } = render(<Certificate {...mockProps} />);

    const inProgressElement = getByTestId("inprogress");

    expect(inProgressElement).toBeTruthy();
    expect(inProgressElement).toBeOnTheScreen();

    expect(inProgressElement.props.children).toEqual([
      "(",
      "certificate.label",
      ")",
    ]);
  });

  it("should render a link with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const linkElement = getByTestId("cert-link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children).toEqual("https://github.com");
  });

  it("should render a link with defined props", () => {
    const { getByTestId } = render(<Certificate {...mockProps} />);

    const linkElement = getByTestId("cert-link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children).toEqual(mockProps.link);
  });

  it("should render a name with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const nameElement = getByTestId("cert-name");

    expect(nameElement).toBeTruthy();
    expect(nameElement).toBeOnTheScreen();

    expect(nameElement.props.children).toEqual("Lorem Ipsum");
  });

  it("should render a name with defined props", () => {
    const { getByTestId } = render(<Certificate {...mockProps} />);

    const nameElement = getByTestId("cert-name");

    expect(nameElement).toBeTruthy();
    expect(nameElement).toBeOnTheScreen();

    expect(nameElement.props.children).toBe(mockProps.name);
  });
});
