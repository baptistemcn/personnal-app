import type { TechnologyItem } from "./technology.interface";

export interface ExperienceProps {
  experiences?: Array<ExperienceItem>;
}

export interface ExperienceItem {
  name: string;
  presentation: string;
  duration: string;
  technologies?: Array<TechnologyItem>;
}

export interface ExperienceDurationProps {
  duration?: string;
}

export interface ExperiencePresentationProps {
  text?: string;
}
