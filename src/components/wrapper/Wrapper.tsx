import { ReactNode } from "react";

import { Box } from "@theme";

import { styles } from "./wrapper.styles";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box style={styles.container} testID="wrapper">
      {children}
    </Box>
  );
};
