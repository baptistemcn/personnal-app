import { fireEvent, render } from "@testing-library/react-native";
import { Linking, StyleSheet } from "react-native";

import { GITHUB } from "@assets";

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
    height: 32,
    width: 32,
  },
});

const mockIcons = {
  source: GITHUB,
  link: "https://github.com/baptistemcn",
  name: "Github",
  styles: styles.icons,
};

describe("Icons component", () => {
  it("should render", () => {
    render(<Icons {...mockIcons} />);
  });

  it("should render an icon", () => {
    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(iconElement._fiber.stateNode.props).toBeDefined();
  });

  it("should redirect to link on icon click", () => {
    const link = mockIcons.link;

    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    fireEvent.press(iconElement);

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith(link);
  });

  it("should render an img in the icons", () => {
    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(iconElement.props.source).toEqual(mockIcons.source);
  });

  it("should render an img with defined styles", () => {
    const { getByTestId } = render(<Icons {...mockIcons} />);

    const iconElement = getByTestId("icon");

    expect(iconElement).toBeTruthy();
    expect(iconElement).toBeOnTheScreen();

    expect(iconElement._fiber.stateNode.props.style).toEqual({
      width: 32,
      height: 32,
    });
  });
});
