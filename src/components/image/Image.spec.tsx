import { render } from "@testing-library/react-native";
import { StyleSheet } from "react-native";

import { ME } from "@assets";

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

  it("should render an img", () => {
    const { getByTestId } = render(<ReImage {...mockImg} />);

    const imgElement = getByTestId("test");

    expect(imgElement).toBeTruthy();
    expect(imgElement).toBeOnTheScreen();
  });

  it("should render an img with a source", () => {
    const { getByTestId } = render(<ReImage {...mockImg} />);

    const imgElement = getByTestId("test");

    expect(imgElement.props.source).toBe(mockImg.source);
  });

  it("should render an img with styles", () => {
    const { getByTestId } = render(<ReImage {...mockImg} />);

    const imgElement = getByTestId("test");

    expect(imgElement.props.style).toBe(mockImg.styles);
  });
});
