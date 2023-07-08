import { render } from "@testing-library/react-native";
import { Card } from "./Card";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

describe("Card Component", () => {
  it("should render", () => {
    render(<Card />);
  });

  it("should render a title", () => {
    const { getByText } = render(<Card />);

    const titleElement = getByText("Développeur Front-End");

    expect(titleElement).toBeTruthy();
  });

  it("should render a text presentation", () => {
    const { getByText } = render(<Card />);

    const textElement = getByText(
      "Hey, je suis Baptiste Marcon, développeur basé en France 📍",
    );

    expect(textElement).toBeTruthy();
  });
});
