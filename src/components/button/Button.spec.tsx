import { fireEvent, render } from "@testing-library/react-native";
import { ReButton } from "./Button";

const mockReButton = {
  ariaLabel: "mock-button",
  children: "S-CREW",
  onPress: () => {
    return "s-crew";
  },
  testID: "mock-testid",
};

const mockOnPress = jest.fn();

describe("Button component", () => {
  it("should render", () => {
    render(<ReButton>{mockReButton.children}</ReButton>);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(
      <ReButton>{mockReButton.children}</ReButton>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(
      <ReButton {...mockReButton}>{mockReButton.children}</ReButton>,
    );

    const buttonElement = getByTestId(mockReButton.testID);

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();
  });

  it("should render an accessibilityLabel with default props", () => {
    const { getByTestId } = render(
      <ReButton>{mockReButton.children}</ReButton>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.children.props.accessible).toEqual(true);
    expect(buttonElement.props.children.props.accessibilityLabel).toEqual(
      "default button",
    );
  });

  it("should render an accessibilityLabel with defined props", () => {
    const { getByTestId } = render(
      <ReButton {...mockReButton}>{mockReButton.children}</ReButton>,
    );

    const buttonElement = getByTestId(mockReButton.testID);

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.children.props.accessible).toEqual(true);
    expect(buttonElement.props.children.props.accessibilityLabel).toEqual(
      mockReButton.ariaLabel,
    );
  });

  it("should render an onPress function", () => {
    const { getByTestId } = render(
      <ReButton onPress={mockOnPress}>{mockReButton.children}</ReButton>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    fireEvent.press(buttonElement);

    expect(mockOnPress).toHaveBeenCalled();
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
