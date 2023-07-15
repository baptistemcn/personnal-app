import { Box } from "@theme";
import { LineProps } from "@types";

export const Line = ({ color = "#000000", height = 1 }: LineProps) => {
  return (
    <Box justifyContent={"center"} alignItems={"center"}>
      <Box height={height} width={"100%"} style={{ backgroundColor: color }} />
    </Box>
  );
};
