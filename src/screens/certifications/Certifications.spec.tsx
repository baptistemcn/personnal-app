import { render, waitFor } from "@testing-library/react-native";
import { Certifications } from "./Certifications";

import * as api from "../../api/certifications";

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

describe("Certifications screen", () => {
  const mockCertifications = [
    {
      inProgress: true,
      link: "https://google.com/",
      name: "Google",
      testID: "google",
    },
    {
      inProgress: false,
      link: "https://github.com/",
      name: "github",
      testID: "github",
    },
  ];

  it("should render", () => {
    render(<Certifications />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<Certifications />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual("certificate.title");
  });

  it("should render certificate component with data", async () => {
    jest.spyOn(api, "getCertifications").mockResolvedValue(mockCertifications);

    const { getByTestId, getByText } = render(<Certifications />);

    const component = getByTestId("certificate");
    const spinner = getByTestId("spinner");

    expect(component).toBeTruthy();
    expect(component).toBeOnTheScreen();

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    await waitFor(() => {
      expect(spinner).not.toBeOnTheScreen();
    });

    expect(getByText(mockCertifications[0].name)).toBeOnTheScreen();
    expect(getByText(mockCertifications[1].name)).toBeOnTheScreen();
  });

  it("should render certificate component with error if no api response", async () => {
    jest
      .spyOn(api, "getCertifications")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { getByTestId } = render(<Certifications />);

    const component = getByTestId("certificate");
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
