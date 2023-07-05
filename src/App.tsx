import { Card, ThemeProvider, Wrapper } from "@components";

export default function App() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Card />
      </Wrapper>
    </ThemeProvider>
  );
}
