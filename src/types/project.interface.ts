export interface ProjectProps {
  project?: Array<ProjectItems>;
}

interface ProjectItems {
  title?: string;
  description?: string;
  host?: HostItem;
}

interface HostItem {
  name?: string;
  link?: string;
}
