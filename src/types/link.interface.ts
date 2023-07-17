import { ReactNode } from "react";

export interface LinkProps {
  ariaLabel?: string;
  children?: ReactNode;
  link?: string;
  testID?: string;
}
