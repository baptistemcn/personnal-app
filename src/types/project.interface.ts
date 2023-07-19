export interface ProjectProps {
  project?: Array<ProjectItems>;
}

interface ProjectItems {
  title?: string;
  description?: string;
  link?: string;
}
