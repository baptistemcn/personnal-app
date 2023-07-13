import { Box, Text } from "@theme";

import { ReImage } from "../image/Image";
import { Wrapper } from "../wrapper/Wrapper";

import { Icons } from "../icons/Icons";
import { CardProps } from "@types";

export const Card = ({ icons, img, text, title }: CardProps) => {
  return (
    <Wrapper>
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
          <Icons {...icon} key={index} />
        ))}
      </Box>
    </Wrapper>
  );
};
