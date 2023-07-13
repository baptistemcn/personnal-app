import img from "./img/baptiste-marcon.webp";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import { styles } from "./styles";

export const ME = img;
export const GITHUB = github;
export const LINKEDIN = linkedin;

export const IMG = {
  source: ME,
  styles: styles?.img,
  testID: "me-img",
};

export const ICONS = [
  {
    source: GITHUB,
    link: "https://github.com/baptistemcn",
    name: "Github",
    styles: styles?.icons,
  },
  {
    source: LINKEDIN,
    link: "https://www.linkedin.com/in/baptiste-marcon/",
    name: "Linkedin",
    styles: styles?.icons,
  },
];
