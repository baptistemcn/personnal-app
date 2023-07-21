import { render } from "@testing-library/react-native";

import { DUMMYIMG, FRENCH_FLAG } from "@assets";

import { Flag } from "./Flag";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

const mockFlag = {
  nation: FRENCH_FLAG,
  styles: {
    height: 64,
    width: 64,
  },
};

describe("Flag component", () => {
  it("should render", () => {
    render(<Flag />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Flag />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(<Flag {...mockFlag} />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();
  });

  it("should render an img with default props", () => {
    const { getByTestId } = render(<Flag />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.source).toEqual(DUMMYIMG);
  });

  it("should render an img with defined props", () => {
    const { getByTestId } = render(<Flag {...mockFlag} />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.source).toEqual(mockFlag.nation);
  });

  it("should render style with default props", () => {
    const { getByTestId } = render(<Flag />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.style).toEqual({ height: 32, width: 32 });
  });

  it("should render style with defined props", () => {
    const { getByTestId } = render(<Flag {...mockFlag} />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.style).toEqual({ height: 64, width: 64 });
  });
});
