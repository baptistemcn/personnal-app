import { render } from "@testing-library/react-native";
import { Wrapper } from "./Wrapper";

describe("Wrapper component", () => {
  const wrapperMock = "S-CREW";
  it("should render", () => {
    render(<Wrapper>{undefined}</Wrapper>);
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
