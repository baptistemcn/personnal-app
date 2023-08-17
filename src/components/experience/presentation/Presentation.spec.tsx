import { render } from "@testing-library/react-native";
import { Presentation } from "./Presentation";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

const mockPresentation = "In my current role";

describe("Experience Presentation", () => {
  it("should render", () => {
    render(<Presentation />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Presentation />);

    const presentation = getByTestId("exp-text");

    expect(presentation).toBeTruthy();
    expect(presentation).toBeOnTheScreen();

    expect(presentation.props.children).toBe("Lorem Ipsum");
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(<Presentation text={mockPresentation} />);

    const presentation = getByTestId("exp-text");

    expect(presentation).toBeTruthy();
    expect(presentation).toBeOnTheScreen();

    expect(presentation.props.children).toEqual(mockPresentation);
  });

  it("should render text with text variant", () => {
    const { getByTestId } = render(<Presentation />);

    const presentation = getByTestId("exp-text");

    expect(presentation).toBeTruthy();
    expect(presentation).toBeOnTheScreen();

    expect(presentation.props.variant).toEqual("text");
  });

  it("should render text with alignment", () => {
    const { getByTestId } = render(<Presentation />);

    const presentation = getByTestId("exp-text");

    expect(presentation).toBeTruthy();
    expect(presentation).toBeOnTheScreen();

    expect(presentation.props.textAlign).toEqual("left");
  });
});
