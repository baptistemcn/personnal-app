import type { IconsProps } from "./icons.interface";
import type { ImageProps } from "./image.interface";

export interface PresentationProps {
  icons?: Array<IconsProps>;
  img?: ImageProps;
  title?: string;
  text?: string;
  testID?: string;
}
