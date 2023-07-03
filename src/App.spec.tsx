import { render } from "@testing-library/react-native";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });

  it("should render a text", () => {
    const { getByText } = render(<App />);

    const textElement = getByText(
      "Open up App.tsx to start working on your app!",
    );

    expect(textElement).toBeTruthy();
  });
});
