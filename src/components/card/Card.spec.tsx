import { render } from "@testing-library/react-native";
import { StyleSheet } from "react-native";

import { GITHUB, LINKEDIN, ME } from "@assets";

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
  },
  {
    source: LINKEDIN,
    link: "https://www.linkedin.com/in/baptiste-marcon/",
    name: "Linkedin",
    styles: styles.icons,
  },
];

const mockTitle = "test1";
const mockText = "test2";

describe("Card Component", () => {
  it("should render", () => {
    render(<Card icons={ICONS} img={IMG} title={mockTitle} text={mockText} />);
  });

  it("should render a img", () => {
    const { getByTestId } = render(
      <Card icons={ICONS} img={IMG} title={mockTitle} text={mockText} />,
    );

    const imgElement = getByTestId("me-img");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();
  });

  it("should render a title", () => {
    const { getByTestId } = render(
      <Card icons={ICONS} img={IMG} title={mockTitle} text={mockText} />,
    );

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();
  });

  it("should render a text presentation", () => {
    const { getByTestId } = render(
      <Card icons={ICONS} img={IMG} title={mockTitle} text={mockText} />,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();
  });
});
