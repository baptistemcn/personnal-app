import { fireEvent, render } from "@testing-library/react-native";
import { Certificate } from "./Certificate";
import { BASE64 } from "@assets";
import { Linking } from "react-native";

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

const mockProps = [
  {
    inProgress: true,
    link: "https://google.com/",
    name: "Google",
    icons: [
      { link: "https://github.com/", name: "name", source: "img-base64" },
    ],
    testID: "google",
  },
];

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
    const { getByTestId } = render(<Certificate certificate={mockProps} />);

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
    const { getByTestId } = render(<Certificate certificate={mockProps} />);

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

    expect(linkElement.props.children).toEqual("https://lorem.ipsum");
  });

  it("should render a link with defined props", () => {
    const { getByTestId } = render(<Certificate certificate={mockProps} />);

    const linkElement = getByTestId("cert-link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children).toEqual(mockProps[0].link);
  });

  it("should render a name with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const nameElement = getByTestId("cert-name");

    expect(nameElement).toBeTruthy();
    expect(nameElement).toBeOnTheScreen();

    expect(nameElement.props.children).toEqual("Lorem Ipsum");
  });

  it("should render a name with defined props", () => {
    const { getByTestId } = render(<Certificate certificate={mockProps} />);

    const nameElement = getByTestId("cert-name");

    expect(nameElement).toBeTruthy();
    expect(nameElement).toBeOnTheScreen();

    expect(nameElement.props.children).toBe(mockProps[0].name);
  });

  it("should render base64 icons with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const iconsElement = getByTestId("icons");

    expect(iconsElement).toBeTruthy();
    expect(iconsElement).toBeOnTheScreen();

    expect(iconsElement.props.children.length).toEqual(3);

    iconsElement.props.children.map(
      (icon: {
        props: {
          children: { props: { base64: string } }[];
        };
      }) => {
        expect(icon.props.children[0].props.base64).toEqual(BASE64);
      },
    );
  });

  it("should render base64 icons with defined props", () => {
    const { getByTestId } = render(<Certificate certificate={mockProps} />);

    const iconsElement = getByTestId("icons");

    expect(iconsElement).toBeTruthy();
    expect(iconsElement).toBeOnTheScreen();

    expect(iconsElement.props.children.length).toEqual(1);

    iconsElement.props.children.map(
      (icon: {
        props: {
          children: { props: { base64: string } }[];
        };
      }) => {
        expect(icon.props.children[0].props.base64).toEqual(
          mockProps[0].icons[0].source,
        );
      },
    );
  });

  it("should render base64 technology name with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const nameElement = getByTestId("icons");

    expect(nameElement).toBeTruthy();
    expect(nameElement).toBeOnTheScreen();

    expect(
      nameElement.props.children[0].props.children[1].props.children,
    ).toEqual("Lorem");
  });

  it("should render base64 technology name with defined props", () => {
    const { getByTestId } = render(<Certificate certificate={mockProps} />);

    const nameElement = getByTestId("icons");

    expect(nameElement).toBeTruthy();
    expect(nameElement).toBeOnTheScreen();

    expect(
      nameElement.props.children[0].props.children[1].props.children,
    ).toEqual(mockProps[0].icons[0].name);
  });

  it("should render base64 technology text variant", () => {
    const { getByTestId } = render(<Certificate />);

    const nameElement = getByTestId("icons");

    expect(nameElement).toBeTruthy();
    expect(nameElement).toBeOnTheScreen();

    expect(
      nameElement.props.children[0].props.children[1].props.variant,
    ).toEqual("italic");
  });

  it("should render an onPress function to redirect to technology website with default props", () => {
    const { getByTestId } = render(<Certificate />);

    const buttonElement = getByTestId("icons");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    fireEvent.press(buttonElement.props.children[0]);

    expect(Linking.openURL).toHaveBeenCalled();
    expect(Linking.openURL).toHaveBeenCalledWith("https://lorem.ipsum/1");
  });

  it("should render an onPress function to redirect to technology website with defined props", () => {
    const { getByTestId } = render(<Certificate certificate={mockProps} />);

    const buttonElement = getByTestId("icons");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    fireEvent.press(buttonElement.props.children[0]);

    expect(Linking.openURL).toHaveBeenCalled();
    expect(Linking.openURL).toHaveBeenCalledWith(mockProps[0].icons[0].link);
  });
});
