import { render } from "@testing-library/react-native";
import { Durantion } from "./Duration";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

const mockDuration = "Mar. 2016";

describe("Experience Duration", () => {
  it("should render", () => {
    render(<Durantion />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Durantion />);

    const durationElement = getByTestId("exp-date");

    expect(durationElement).toBeTruthy();
    expect(durationElement).toBeOnTheScreen();

    expect(durationElement.props.children).toEqual("NaN");
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(<Durantion duration={mockDuration} />);

    const durationElement = getByTestId("exp-date");

    expect(durationElement).toBeTruthy();
    expect(durationElement).toBeOnTheScreen();

    expect(durationElement.props.children).toEqual(mockDuration);
  });

  it("should render with title variant", () => {
    const { getByTestId } = render(<Durantion />);

    const durationElement = getByTestId("exp-date");

    expect(durationElement).toBeTruthy();
    expect(durationElement).toBeOnTheScreen();

    expect(durationElement.props.variant).toEqual("date");
  });
});
