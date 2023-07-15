import { render } from "@testing-library/react-native";
import { Experience } from "./Experience";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

describe("Experience component", () => {
  it("should render", () => {
    render(<Experience />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<Experience />);

    const titleElement = getByTestId("exp-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();
  });

  it("should render a date", () => {
    const { getByTestId } = render(<Experience />);

    const dateElement = getByTestId("exp-date");

    expect(dateElement).toBeTruthy();
    expect(dateElement).toBeOnTheScreen();
  });

  it("should render a presentation text", () => {
    const { getByTestId } = render(<Experience />);

    const textElement = getByTestId("exp-text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();
  });
});
