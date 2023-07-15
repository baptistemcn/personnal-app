import { render } from "@testing-library/react-native";
import { Line } from "./Line";

describe("Line component", () => {
  it("should render", () => {
    render(<Line />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Line />);

    const lineElement = getByTestId("line");

    expect(lineElement).toBeDefined();
    expect(lineElement).toBeTruthy();
    expect(lineElement).toBeOnTheScreen();
  });

  it("should render with default color", () => {
    const { getByTestId } = render(<Line />);

    const lineElement = getByTestId("line");

    expect(lineElement).toBeDefined();
    expect(lineElement).toBeTruthy();

    expect(
      lineElement._fiber.stateNode.props.children.props.style.backgroundColor,
    ).toEqual("#000000");
  });

  it("should render with default height", () => {
    const { getByTestId } = render(<Line />);

    const lineElement = getByTestId("line");

    expect(lineElement).toBeDefined();
    expect(lineElement).toBeTruthy();

    expect(lineElement._fiber.stateNode.props.children.props.height).toEqual(1);
  });

  it("should render with a defined color", () => {
    const { getByTestId } = render(<Line color="#FF0000" />);

    const lineElement = getByTestId("line");

    expect(lineElement).toBeDefined();
    expect(lineElement).toBeTruthy();

    expect(
      lineElement._fiber.stateNode.props.children.props.style.backgroundColor,
    ).toEqual("#FF0000");
  });

  it("should render with a defined height", () => {
    const { getByTestId } = render(<Line height={3} />);

    const lineElement = getByTestId("line");

    expect(lineElement).toBeDefined();
    expect(lineElement).toBeTruthy();

    expect(lineElement._fiber.stateNode.props.children.props.height).toEqual(3);
  });
});
