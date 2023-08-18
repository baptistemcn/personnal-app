import { render } from "@testing-library/react-native";
import { Spinner } from "./Spinner";

describe("Spinner component", () => {
  const mockSpinner = {
    color: "FF0000",
    size: 256,
  };

  it("should render", () => {
    render(<Spinner />);
  });

  it("should render a spinner with a default color", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.color).toEqual("grey");
  });

  it("should render a spinner with a defined color", () => {
    const { getByTestId } = render(<Spinner {...mockSpinner} />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.color).toEqual(mockSpinner.color);
  });

  it("should render a spinner with default size", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.size).toEqual("small");
  });

  it("should render a spinner with defined size", () => {
    const { getByTestId } = render(<Spinner {...mockSpinner} />);

    const spinner = getByTestId("spinner");

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    expect(spinner.props.size).toEqual(mockSpinner.size);
  });
});
