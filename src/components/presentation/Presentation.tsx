import { DUMMYIMG } from "@assets";
import { Box, Text } from "@theme";
import { PresentationProps } from "@types";
import { Icons } from "@ui";

import { ReImage } from "../image/Image";
import { Wrapper } from "../wrapper/Wrapper";

export const Presentation = ({
  icons = [
    {
      source: DUMMYIMG,
      link: "https://lorem.ipsum",
      name: "Lorem Ipsum Name",
      styles: {},
      testID: "icons",
    },
  ],
  img = DUMMYIMG,
  testID = "presentation",
  text = "Lorem Ipsum Text",
  title = "Lorem Ipsum Title",
}: PresentationProps) => {
  return (
    <Wrapper testID={testID}>
      <Box alignItems={"center"}>
        <ReImage {...img} testID="me-img" />
      </Box>
      <Text variant="title1" padding="m" testID="title">
        {title}
      </Text>
      <Text variant="text" padding="m" testID="text">
        {text}
      </Text>

      <Box flexDirection={"row"}>
        {icons?.map((icon, index) => (
          <Box key={index} padding={"m"}>
            <Icons {...icon} />
          </Box>
        ))}
      </Box>
    </Wrapper>
  );
};
