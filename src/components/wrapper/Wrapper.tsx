import { ReactNode } from "react";

import { Box } from "@theme";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box
      flex={1}
      alignContent={"center"}
      alignItems={"center"}
      testID="wrapper"
    >
      {children}
    </Box>
  );
};
