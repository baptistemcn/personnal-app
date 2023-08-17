import { render } from "@testing-library/react-native";
import { Title } from "./Title";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

const mockTitle = "mock name";

describe("Experience Title", () => {
  it("should render", () => {
    render(<Title />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Title />);

    const titleElement = getByTestId("exp-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual("Lorem Ipsum");
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(<Title name={mockTitle} />);

    const titleElement = getByTestId("exp-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual(mockTitle);
  });

  it("should render with title variant", () => {
    const { getByTestId } = render(<Title />);

    const titleElement = getByTestId("exp-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.variant).toEqual("title3");
  });
});
