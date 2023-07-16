import { Box } from "@theme";
import { WrapperProps } from "@types";

export const Wrapper = ({ children, testID = "wrapper" }: WrapperProps) => {
  return (
    <Box
      flex={1}
      marginVertical={"m"}
      alignContent={"center"}
      alignItems={"center"}
      testID={testID}
    >
      {children}
    </Box>
  );
};
