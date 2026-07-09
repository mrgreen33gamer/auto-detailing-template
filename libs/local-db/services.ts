// Stub for ProjectCardGrid (projects gallery deleted for this trade template)
export type ProjectCategory = string;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description?: string;
  shortDesc?: string;
  fullDesc?: string;
  imageSrc?: string;
  imageAlt?: string;
  images?: string[];
  tags?: string[];
  href?: string;
  result?: string;
  year?: string | number;
  client?: string;
  location?: string;
  offline?: boolean;
  liveUrl?: string;
  [key: string]: unknown;
}

export const CATEGORIES: ProjectCategory[] = [];

const ALL_PROJECTS: Project[] = [];

export const PROJECTS_BY_CATEGORY: Record<string, Project[]> = {};

export default ALL_PROJECTS;
