import { render } from "@testing-library/react-native";
import { StyleSheet } from "react-native";

import { DUMMYIMG, GITHUB, LINKEDIN, ME } from "@assets";

import { Presentation } from "./Presentation";

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

const styles = StyleSheet.create({
  img: {},
  icons: {},
});

const IMG = {
  source: ME,
  styles: styles.img,
  testID: "me-img",
};

const ICONS = [
  {
    source: GITHUB,
    link: "https://github.com/baptistemcn",
    name: "Github",
    styles: styles.icons,
    testID: "icons-1",
  },
  {
    source: LINKEDIN,
    link: "https://www.linkedin.com/in/baptiste-marcon/",
    name: "Linkedin",
    styles: styles.icons,
    testID: "icons-2",
  },
];

const mockTitle = "test1";
const mockText = "test2";

describe("Presentation Component", () => {
  it("should render", () => {
    render(<Presentation />);
  });

  it("should render an img with default props", () => {
    const { getByTestId } = render(<Presentation />);

    const imgElement = getByTestId("me-img");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.source).toEqual(DUMMYIMG);
  });

  it("should render an img", () => {
    const { getByTestId } = render(
      <Presentation
        icons={ICONS}
        img={IMG}
        title={mockTitle}
        text={mockText}
      />,
    );

    const imgElement = getByTestId("me-img");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement.props.source).toEqual(IMG.source);
  });

  it("should render a title with default props", () => {
    const { getByTestId } = render(<Presentation />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual("Lorem Ipsum Title");
  });

  it("should render a title", () => {
    const { getByTestId } = render(
      <Presentation
        icons={ICONS}
        img={IMG}
        title={mockTitle}
        text={mockText}
      />,
    );

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual(mockTitle);
  });

  it("should render a text presentation with default props", () => {
    const { getByTestId } = render(<Presentation />);

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toEqual("Lorem Ipsum Text");
  });

  it("should render a text presentation", () => {
    const { getByTestId } = render(
      <Presentation
        icons={ICONS}
        img={IMG}
        title={mockTitle}
        text={mockText}
      />,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toEqual(mockText);
  });

  it("should render icons with default props", () => {
    const { getByTestId } = render(<Presentation />);

    const iconsElement = getByTestId("icons");

    expect(iconsElement).toBeTruthy();
    expect(iconsElement).toBeOnTheScreen();

    expect(iconsElement.props.children.props.children[0].props.source).toEqual(
      DUMMYIMG,
    );
  });

  it("should render icons with defined props", () => {
    const { getByTestId } = render(
      <Presentation
        icons={ICONS}
        img={IMG}
        title={mockTitle}
        text={mockText}
      />,
    );

    const iconsElement = getByTestId("icons-1");

    expect(iconsElement).toBeTruthy();
    expect(iconsElement).toBeOnTheScreen();

    expect(iconsElement.props.children.props.children[0].props.source).toEqual(
      IMG.source,
    );
  });
});
