import { render } from "@testing-library/react-native";
import { StyleSheet } from "react-native";

import { DUMMYIMG, ME } from "@assets";

import { ReImage } from "./Image";

const mockStyles = StyleSheet.create({
  img: {
    height: 256,
    width: 256,
  },
});

describe("ReImage Component", () => {
  const mockImg = {
    source: ME,
    styles: mockStyles.img,
    testID: "test",
  };

  it("should render", () => {
    render(<ReImage {...mockImg} />);
  });

  it("should render a dummy img", () => {
    const { getByTestId } = render(<ReImage />);

    const imgElement = getByTestId("img");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement._fiber.stateNode.props.source).toEqual(DUMMYIMG);
  });

  it("should render an img with a source", () => {
    const { getByTestId } = render(<ReImage {...mockImg} />);

    const imgElement = getByTestId("test");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement._fiber.stateNode.props.source).toEqual(mockImg.source);
  });

  it("should render an img with default style props", () => {
    const { getByTestId } = render(<ReImage />);

    const imgElement = getByTestId("img");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement._fiber.stateNode.props.style).toEqual({
      height: 64,
      width: 64,
    });
  });

  it("should render an img with styles", () => {
    const { getByTestId } = render(<ReImage {...mockImg} />);

    const imgElement = getByTestId("test");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();

    expect(imgElement._fiber.stateNode.props.style).toBe(mockImg.styles);
  });
});
