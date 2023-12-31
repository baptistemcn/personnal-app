import { render } from "@testing-library/react-native";
import { Wrapper } from "./Wrapper";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

describe("Wrapper component", () => {
  const wrapperMock = "S-CREW";
  it("should render", () => {
    render(<Wrapper>{wrapperMock}</Wrapper>);
  });

  it("should render children inside wrapper", () => {
    const { getByTestId } = render(<Wrapper>{wrapperMock}</Wrapper>);

    const wrapperElement = getByTestId("wrapper");
    expect(wrapperElement).toBeTruthy();
  });

  it("should render a text as children inside wrapper", () => {
    const { getByTestId } = render(<Wrapper>{wrapperMock}</Wrapper>);

    const wrapperElement = getByTestId("wrapper");

    expect(wrapperElement).toBeTruthy();
    expect(wrapperElement).toHaveTextContent(wrapperMock);
  });
});
