import { render } from "@testing-library/react-native";
import { Project } from "./Project";

jest.mock("@shopify/restyle", () => {
  const RealModule = jest.requireActual("@shopify/restyle");
  const RN = jest.requireActual("react-native");
  RealModule.createText = () => RN.Text;
  RealModule.createBox = () => RN.View;
  RealModule.createRestyleComponent = (f: unknown, c: unknown) => c || RN.View;
  return RealModule;
});

const mockProject = [
  {
    title: "mock Title",
    description: "mock Description",
    host: {
      name: "mock hostname",
      link: "mock link",
    },
  },
];

describe("Project component", () => {
  it("should render", () => {
    render(<Project />);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Project />);

    const projectElement = getByTestId("project");

    expect(projectElement).toBeTruthy();
    expect(projectElement).toBeOnTheScreen();
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(<Project project={mockProject} />);

    const projectElement = getByTestId("project");

    expect(projectElement).toBeTruthy();
    expect(projectElement).toBeOnTheScreen();
  });

  it("should render a title with default props", () => {
    const { getByTestId } = render(<Project />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual("Lorem Ipsum Title");
  });

  it("should render a title with defined props", () => {
    const { getByTestId } = render(<Project project={mockProject} />);

    const titleElement = getByTestId("title");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual(mockProject[0].title);
  });

  it("should render a description with default props", () => {
    const { getByTestId } = render(<Project />);

    const descriptionElement = getByTestId("description");

    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement).toBeOnTheScreen();

    expect(descriptionElement.props.children).toEqual(
      "Lorem Ipsum Description",
    );
  });

  it("should render a description with defined props", () => {
    const { getByTestId } = render(<Project project={mockProject} />);

    const descriptionElement = getByTestId("description");

    expect(descriptionElement).toBeTruthy();
    expect(descriptionElement).toBeOnTheScreen();

    expect(descriptionElement.props.children).toEqual(
      mockProject[0].description,
    );
  });

  it("should render a link name with default props", () => {
    const { getByTestId } = render(<Project />);

    const linkElement = getByTestId("link-label");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children).toEqual("Github");
  });

  it("should render a link name with defined props", () => {
    const { getByTestId } = render(<Project project={mockProject} />);

    const linkElement = getByTestId("link-label");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children).toEqual(mockProject[0].host.name);
  });
});
