import { fireEvent, render } from "@testing-library/react-native";
import { Linking, StyleSheet } from "react-native";

import { DUMMYIMG, GITHUB } from "@assets";

import { Icons } from "./Icons";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

const styles = StyleSheet.create({
  icons: {
    height: 64,
    width: 64,
  },
});

const mockIcons = {
  source: GITHUB,
  link: "https://lorem.ipsum/",
  name: "Github",
  styles: styles.icons,
};

describe("Icons component", () => {
  it("should render", () => {
    render(<Icons />);
  });

  it("should render an icon with default props", () => {
    const { getByTestId } = render(<Icons />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(
      iconElement.props.children.props.children[0].props.source,
    ).toBeDefined();
    expect(iconElement.props.children.props.children[0].props.source).toEqual(
      DUMMYIMG,
    );
  });

  it("should render an icon with passing props", () => {
    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(
      iconElement.props.children.props.children[0].props.source,
    ).toBeDefined();
    expect(iconElement.props.children.props.children[0].props.source).toEqual(
      mockIcons.source,
    );
  });

  it("should render with a default link props and redirect on click", () => {
    const { getByTestId } = render(<Icons />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    fireEvent.press(iconElement);

    expect(Linking.openURL).toHaveBeenCalled();
    expect(Linking.openURL).toHaveBeenCalledWith(
      "https://github.com/baptistemcn",
    );
  });

  it("should render with a defined props a link on icon and redirect on click", () => {
    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    fireEvent.press(iconElement);

    expect(Linking.openURL).toHaveBeenCalled();
    expect(Linking.openURL).toHaveBeenCalledWith(mockIcons.link);
  });

  it("should render an dummy img in the icons with default props", () => {
    const { getByTestId } = render(<Icons />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(iconElement.props.children.props.children[0].props.source).toEqual(
      DUMMYIMG,
    );
  });

  it("should render an img in the icons when passing props", () => {
    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(iconElement.props.children.props.children[0].props.source).toEqual(
      mockIcons.source,
    );
  });

  it("should render a dummy img with default props", () => {
    const { getByTestId } = render(<Icons />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(iconElement.props.children.props.children[0].props.styles).toEqual({
      height: 32,
      width: 32,
    });
  });

  it("should render an img with defined styles", () => {
    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(iconElement.props.children.props.children[0].props.styles).toEqual({
      width: 64,
      height: 64,
    });
  });
});
