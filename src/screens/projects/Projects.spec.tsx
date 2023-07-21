import { render } from "@testing-library/react-native";
import { Projects } from "./Projects";

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

const mockProject = [
  {
    title: "Spotify Profile",
    description: "Play with Spotify API",
    host: {
      name: "Spotify Profile",
      url: "https://github.com/baptistemcn/spotify-profile/",
    },
  },
];

describe("Projects screen", () => {
  it("should render", () => {
    render(<Projects />);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<Projects />);

    const titleElement = getByTestId("project-title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();
  });

  it("shoud render a list of projects", () => {
    const { getByTestId } = render(<Projects />);

    const projectsElement = getByTestId("projects");

    expect(projectsElement).toBeTruthy();
    expect(projectsElement).toBeOnTheScreen();

    expect(projectsElement.props.children.props.project).toEqual(mockProject);
  });
});
