import { render } from "@testing-library/react-native";
import { Card } from "./Card";

describe("Card component", () => {
  const children = "S-CREW";
  it("should render", () => {
    render(<Card>{children}</Card>);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<Card>{children}</Card>);

    const cardElement = getByTestId("card");

    expect(cardElement).toBeTruthy();
    expect(cardElement).toBeOnTheScreen();
  });

  it("should render a children with default props", () => {
    const { getByTestId } = render(<Card>{children}</Card>);

    const cardElement = getByTestId("card");

    expect(cardElement).toBeTruthy();
    expect(cardElement).toBeOnTheScreen();

    expect(cardElement._fiber.stateNode.props.children).toEqual(children);
  });

  it("should render with a padding", () => {
    const { getByTestId } = render(<Card padding={3}>{children}</Card>);

    const cardElement = getByTestId("card");

    expect(cardElement).toBeTruthy();
    expect(cardElement).toBeOnTheScreen();

    expect(cardElement._fiber.stateNode.props.style[1].padding).toEqual(3);
  });

  it("should render a children with a padding", () => {
    const { getByTestId } = render(<Card padding={3}>{children}</Card>);

    const cardElement = getByTestId("card");

    expect(cardElement).toBeTruthy();
    expect(cardElement).toBeOnTheScreen();

    expect(cardElement._fiber.stateNode.props.children).toEqual(children);
  });

  it("should render with a custom shadow", () => {
    const { getByTestId } = render(
      <Card shadowColor="#FF00000" shadowOffet={{ height: 2, width: -6 }}>
        {children}
      </Card>,
    );

    const cardElement = getByTestId("card");

    expect(cardElement).toBeTruthy();
    expect(cardElement).toBeOnTheScreen();

    expect(cardElement._fiber.stateNode.props.style[1].shadowColor).toEqual(
      "#FF00000",
    );
    expect(cardElement._fiber.stateNode.props.style[1].shadowOffset).toEqual({
      height: 2,
      width: -6,
    });
  });

  it("should rendera children with a custom shadow", () => {
    const { getByTestId } = render(
      <Card shadowColor="#FF00000" shadowOffet={{ height: 2, width: -6 }}>
        {children}
      </Card>,
    );

    const cardElement = getByTestId("card");

    expect(cardElement).toBeTruthy();
    expect(cardElement).toBeOnTheScreen();

    expect(cardElement._fiber.stateNode.props.children).toEqual(children);
  });
});
