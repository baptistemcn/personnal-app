import { render, waitFor } from "@testing-library/react-native";
import { About } from "./About";

import * as api from "../../api/about";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

const mockProps = {
  title: "about.title",
  text: "about.text",
  subtitle: "about.title2",
};

describe("About Screen", () => {
  const mockExperience = [
    {
      id: 1,
      name: "Lorem Ipsum name 1",
      duration: "NaN NaN 1",
      presentation: "Lorem Ipsum presentation 1",
      technology: [{ name: "Lorem Ipsum tech 1" }],
    },
    {
      id: 2,
      name: "Lorem Ipsum name 2",
      duration: "NaN NaN 2",
      presentation: "Lorem Ipsum presentation 2",
      technology: [{ name: "Lorem Ipsum tech 2" }],
    },
  ];
  it("should render", () => {
    render(<About />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<About />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement._fiber.stateNode.props.children).toEqual(
      mockProps.title,
    );
  });

  it("should render a text", () => {
    const { getByTestId } = render(<About />);

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement._fiber.stateNode.props.children).toEqual(mockProps.text);
  });

  it("should render a subtitle", () => {
    const { getByTestId } = render(<About />);

    const subtitleElement = getByTestId("title2");

    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement).toBeOnTheScreen();

    expect(subtitleElement.props.children).toEqual(mockProps.subtitle);
  });

  it("should render Experience component with data", async () => {
    jest.spyOn(api, "getAbout").mockResolvedValue(mockExperience);

    const { getByTestId, getByText } = render(<About />);

    const component = getByTestId("experience");
    const spinner = getByTestId("spinner");

    expect(component).toBeTruthy();
    expect(component).toBeOnTheScreen();

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    await waitFor(() => {
      expect(spinner).not.toBeOnTheScreen();
    });

    expect(getByText("Lorem Ipsum name 1")).toBeOnTheScreen();
    expect(getByText("Lorem Ipsum name 2")).toBeOnTheScreen();
  });

  it("should render experience with error if no api response", async () => {
    jest
      .spyOn(api, "getAbout")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { getByTestId } = render(<About />);

    const component = getByTestId("experience");
    const spinner = getByTestId("spinner");

    expect(component).toBeTruthy();
    expect(component).toBeOnTheScreen();

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    await waitFor(() => {
      expect(spinner).toBeOnTheScreen();
    });
  });
});
