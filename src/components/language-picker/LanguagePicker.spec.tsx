import { render } from "@testing-library/react-native";
import { LanguagePicker } from "./LanguagePicker";
import { DUMMYIMG } from "@assets";

describe("Language Picker component", () => {
  it("should render", () => {
    render(<LanguagePicker />);
  });

  it("should render correctly", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const pickerElement = getByTestId("language-picker-box");

    expect(pickerElement).toBeTruthy();
    expect(pickerElement).toBeOnTheScreen();
  });

  it("should render an accessibility label", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const pickerElement = getByTestId("language-picker");

    expect(pickerElement).toBeTruthy();
    expect(pickerElement).toBeOnTheScreen();

    expect(pickerElement.props.children.props.accessible).toBe(true);
    expect(pickerElement.props.children.props.accessibilityLabel).toBe(
      "language",
    );
  });

  it("should render a flag", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.source).toEqual(DUMMYIMG);
  });

  it("should render style", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.style).toEqual({
      height: 32,
      width: 32,
    });
  });
});
