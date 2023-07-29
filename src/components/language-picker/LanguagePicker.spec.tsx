import { fireEvent, render } from "@testing-library/react-native";
import { LanguagePicker } from "./LanguagePicker";
import { DUMMYIMG, FRENCH_FLAG } from "@assets";

const mockLangPicker = {
  button: {
    ariaLabel: "switch",
    testID: "picker",
  },
  flag: {
    nation: FRENCH_FLAG,
    styles: { height: 64, width: 64 },
  },
};

const mockOnPress = jest.fn();

xdescribe("Language Picker component", () => {
  it("should render", () => {
    render(<LanguagePicker />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const pickerElement = getByTestId("lang-picker");

    expect(pickerElement).toBeTruthy();
    expect(pickerElement).toBeOnTheScreen();
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(<LanguagePicker {...mockLangPicker} />);

    const pickerElement = getByTestId(mockLangPicker.button.testID);

    expect(pickerElement).toBeTruthy();
    expect(pickerElement).toBeOnTheScreen();
  });

  it("should render an accessibility label with default props", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const pickerElement = getByTestId("lang-picker");

    expect(pickerElement).toBeTruthy();
    expect(pickerElement).toBeOnTheScreen();

    expect(pickerElement.props.children.props.accessible).toBe(true);
    expect(pickerElement.props.children.props.accessibilityLabel).toBe(
      "language",
    );
  });

  it("should render an accessibility label with defined props", () => {
    const { getByTestId } = render(<LanguagePicker {...mockLangPicker} />);

    const pickerElement = getByTestId(mockLangPicker.button.testID);

    expect(pickerElement).toBeTruthy();
    expect(pickerElement).toBeOnTheScreen();

    expect(pickerElement.props.children.props.accessible).toBe(true);
    expect(pickerElement.props.children.props.accessibilityLabel).toBe(
      mockLangPicker.button.ariaLabel,
    );
  });

  it("should render an onPress function", () => {
    const { getByTestId } = render(
      <LanguagePicker button={{ onPress: mockOnPress }} />,
    );

    const pickerElement = getByTestId("button");

    expect(pickerElement).toBeTruthy();
    expect(pickerElement).toBeOnTheScreen();

    fireEvent.press(pickerElement);

    expect(mockOnPress).toHaveBeenCalled();
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should render a flag with default props", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.source).toEqual(DUMMYIMG);
  });

  it("should render a flag with defined props", () => {
    const { getByTestId } = render(<LanguagePicker {...mockLangPicker} />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.source).toEqual(mockLangPicker.flag.nation);
  });

  it("should render style with default props", () => {
    const { getByTestId } = render(<LanguagePicker />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.style).toEqual({
      height: 32,
      width: 32,
    });
  });

  it("should render style with defined props", () => {
    const { getByTestId } = render(<LanguagePicker {...mockLangPicker} />);

    const flagElement = getByTestId("flag");

    expect(flagElement).toBeTruthy();
    expect(flagElement).toBeOnTheScreen();

    expect(flagElement.props.style).toEqual({
      height: 64,
      width: 64,
    });
  });
});
