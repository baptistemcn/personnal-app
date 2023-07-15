import type { IconsProps } from "./icons.interface";
import type { ImageProps } from "./image.interface";

export interface FrameProps {
  icons: Array<IconsProps>;
  img: ImageProps;
  title: string;
  text: string;
  testID?: string;
}
