import { render } from "@testing-library/react-native";
import { Flag } from "./Flag";
import { DUMMYIMG } from "@assets";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

describe("Flag component", () => {
  it("should render", () => {
    render(<Flag />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Flag />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.source).toEqual(DUMMYIMG);
  });

  it("should render with default styles", () => {
    const { getByTestId } = render(<Flag />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.style).toEqual({ height: 32, width: 32 });
  });
});
