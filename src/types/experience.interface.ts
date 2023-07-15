import type { TechnologyItem } from "./technology.interface";

export interface ExperienceProps {
  experience?: Array<ExperienceItem>;
}

interface ExperienceItem {
  name: string;
  duraction: string;
  presentation: string;
  technology: Array<TechnologyItem>;
}
