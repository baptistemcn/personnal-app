import { fireEvent, render } from "@testing-library/react-native";
import { Link } from "./Link";
import { Linking } from "react-native";

const mockLink = {
  children: "S-CREW",
  link: "https://twitter.com/",
  ariaLabel: "aria-label",
};

describe("Link component", () => {
  it("should render", () => {
    render(<Link>{mockLink.children}</Link>);
  });

  it("should render with a children", () => {
    const { getByTestId } = render(<Link>{mockLink.children}</Link>);

    const linkElement = getByTestId("link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children.props.children).toBe(mockLink.children);
  });

  it("should create a link with default props", () => {
    const dummyLink = "https://github.com";
    const { getByTestId } = render(<Link>{mockLink.children}</Link>);

    const linkElement = getByTestId("link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    fireEvent.press(linkElement);

    expect(Linking.openURL).toHaveBeenCalled();
    expect(Linking.openURL).toHaveBeenCalledWith(dummyLink);
  });

  it("should create a link with defined props", () => {
    const { getByTestId } = render(
      <Link link={mockLink.link}>{mockLink.children}</Link>,
    );

    const linkElement = getByTestId("link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    fireEvent.press(linkElement);

    expect(Linking.openURL).toHaveBeenCalled();
    expect(Linking.openURL).toHaveBeenCalledWith(mockLink.link);
  });

  it("should render an aria label with default props", () => {
    const { getByTestId } = render(<Link>{mockLink.children}</Link>);

    const linkElement = getByTestId("link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children.props.accessibilityLabel).toEqual("link");
  });

  it("should render an aria label with defined props", () => {
    const { getByTestId } = render(
      <Link ariaLabel={mockLink.ariaLabel}>{mockLink.children}</Link>,
    );

    const linkElement = getByTestId("link");

    expect(linkElement).toBeTruthy();
    expect(linkElement).toBeOnTheScreen();

    expect(linkElement.props.children.props.accessibilityLabel).toEqual(
      mockLink.ariaLabel,
    );
  });
});
