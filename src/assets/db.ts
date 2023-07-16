import dummyimg from "./img/dummy-img.jpg";
import img from "./img/baptiste-marcon.webp";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import { styles } from "./styles";

export const DUMMYIMG = dummyimg;
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

const EXPERIENCES_FR = [
  {
    name: "Full-Stack Developper - NEHS Digital",
    presentation:
      "Dans mon rôle actuel, je me concentre sur le développement de nouvelles fonctionnalités, la création d'intégrations de design attrayantes et la gestion du code hérité, contribuant ainsi à l'évolution et à l'amélioration continues de nos produits.",
    duration: "Janv. 2022",
    technologies: [
      {
        name: "Angular",
      },
      {
        name: "RxJS",
      },
      {
        name: "SASS",
      },
      {
        name: "Jest",
      },
      {
        name: ".NET",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "Jenkins",
      },
    ],
  },
];

const EXPERIENCES_EN = [
  {
    name: "Full-Stack Developer - NEHS Digital",
    presentation:
      "In my current role, I focus on developing new features, creating appealing design integrations, and managing legacy code, thereby contributing to the continuous evolution and improvement of our products.",
    duration: "Janv. 2022",
    technologies: [
      {
        name: "Angular",
      },
      {
        name: "RxJS",
      },
      {
        name: "SASS",
      },
      {
        name: "Jest",
      },
      {
        name: "Rest API",
      },
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "Jenkins",
      },
    ],
  },
];

export const experiences = (language: string) => {
  return language === "fr" ? EXPERIENCES_FR : EXPERIENCES_EN;
};
