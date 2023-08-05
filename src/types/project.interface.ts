export interface ProjectProps {
  project?: Array<ProjectItems>;
}

export interface ProjectItems {
  title?: string;
  description?: string;
  host?: HostItem;
}

interface HostItem {
  name?: string;
  link?: string;
}
