import { ReactNode } from "react";

import { Box } from "@theme";

interface WrapperProps {
  children: ReactNode;
  testID?: string;
}

export const Wrapper = ({ children, testID = "wrapper" }: WrapperProps) => {
  return (
    <Box flex={1} alignContent={"center"} alignItems={"center"} testID={testID}>
      {children}
    </Box>
  );
};
