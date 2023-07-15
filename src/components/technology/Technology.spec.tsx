import { render } from "@testing-library/react-native";
import { Technology } from "./Technology";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

const mockTechnology = [{ name: "React Native" }];

const mockTechnologies = [
  {
    name: "React Native",
  },
  {
    name: "React",
  },
  {
    name: "TypeScript",
  },
];

describe("Technology component", () => {
  it("should render", () => {
    render(<Technology />);
  });

  it("should render with a default props", () => {
    const { getByText } = render(<Technology />);

    const technologyItem = getByText("technology");

    expect(technologyItem).toBeDefined();
    expect(technologyItem).toBeOnTheScreen();
  });

  it("should render with a single technology", () => {
    const { getByText } = render(<Technology technology={mockTechnology} />);

    const technologyItem = getByText("React Native");

    expect(technologyItem).toBeDefined();
    expect(technologyItem).toBeOnTheScreen();
  });

  it("should render with multiple technologies", () => {
    const { getByText } = render(<Technology technology={mockTechnologies} />);

    const rnElement = getByText("React Native");
    const reactElement = getByText("React");
    const typescriptElement = getByText("TypeScript");

    expect(rnElement).toBeDefined();
    expect(rnElement).toBeOnTheScreen();

    expect(reactElement).toBeDefined();
    expect(reactElement).toBeOnTheScreen();

    expect(typescriptElement).toBeDefined();
    expect(typescriptElement).toBeOnTheScreen();
  });

  it("should render the separator correctly", () => {
    const { getAllByText } = render(
      <Technology technology={mockTechnologies} />,
    );

    const separators = getAllByText("-", { exact: false });

    expect(separators.length).toBe(2);
  });
});
