import { Card, Wrapper } from "@components";
import { ThemeProvider } from "@theme";

export default function App() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Card />
      </Wrapper>
    </ThemeProvider>
  );
}
