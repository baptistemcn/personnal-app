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

const mockExperience = [
  {
    name: "Lorem Ipsum name",
    duraction: "NaN NaN",
    presentation: "Lorem Ipsum presentation",
    technology: [{ name: "Lorem Ipsum tech" }],
  },
];

describe("Experience component", () => {
  it("should render", () => {
    render(<Experience />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<Experience />);

    const titleElement = getByTestId("exp-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement._fiber.stateNode.props.children).toEqual("Lorem Ipsum");
  });

  it("should render a props title", () => {
    const { getByTestId } = render(<Experience experience={mockExperience} />);

    const titleElement = getByTestId("exp-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement._fiber.stateNode.props.children).toEqual(
      "Lorem Ipsum name",
    );
  });

  it("should render a date", () => {
    const { getByTestId } = render(<Experience />);

    const dateElement = getByTestId("exp-date");

    expect(dateElement).toBeTruthy();
    expect(dateElement).toBeOnTheScreen();

    expect(dateElement._fiber.stateNode.props.children).toEqual("NaN");
  });

  it("should render a props date", () => {
    const { getByTestId } = render(<Experience experience={mockExperience} />);

    const dateElement = getByTestId("exp-date");

    expect(dateElement).toBeTruthy();
    expect(dateElement).toBeOnTheScreen();

    expect(dateElement._fiber.stateNode.props.children).toEqual("NaN NaN");
  });

  it("should render a presentation text", () => {
    const { getByTestId } = render(<Experience />);

    const textElement = getByTestId("exp-text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();
    expect(textElement._fiber.stateNode.props.children).toEqual("Lorem Ipsum");
  });

  it("should render a props presentation text", () => {
    const { getByTestId } = render(<Experience experience={mockExperience} />);

    const textElement = getByTestId("exp-text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement._fiber.stateNode.props.children).toEqual(
      "Lorem Ipsum presentation",
    );
  });
});
