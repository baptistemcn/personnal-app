import { render, waitFor } from "@testing-library/react-native";
import { Projects } from "./Projects";

import * as api from "../../services/api/projects";

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

describe("Projects screen", () => {
  const mockProject = [
    {
      title: "Project 1",
      description: "Project Description 1",
      host: {
        name: "Project name 1",
        url: "https://github.com/project/1",
      },
    },
    {
      title: "Project 2",
      description: "Project Description 2",
      host: {
        name: "Project name 2",
        url: "https://github.com/project/2",
      },
    },
  ];

  it("should render", () => {
    render(<Projects />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<Projects />);

    const titleElement = getByTestId("project-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();
  });

  it("shoud render a list of projects", async () => {
    jest.spyOn(api, "getProjects").mockResolvedValue(mockProject);

    const { getByTestId, getByText } = render(<Projects />);

    const component = getByTestId("projects");
    const spinner = getByTestId("spinner");

    expect(component).toBeTruthy();
    expect(component).toBeOnTheScreen();

    expect(spinner).toBeTruthy();
    expect(spinner).toBeOnTheScreen();

    await waitFor(() => {
      expect(spinner).not.toBeOnTheScreen();
    });

    expect(getByText(mockProject[0].title)).toBeOnTheScreen();
    expect(getByText(mockProject[1].title)).toBeOnTheScreen();
  });

  it("should render error if no api response", async () => {
    jest
      .spyOn(api, "getProjects")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { getByTestId } = render(<Projects />);

    const component = getByTestId("projects");

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
