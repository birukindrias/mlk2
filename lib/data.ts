import fs from "fs";
import path from "path";

// Types based on our JSON structure
export type Project = {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  thumbnail: string;
  featured?: boolean;
};

export type ProjectDetail = Project & {
  coverImage: string;
  longDescription: string;
  overview: string;
  challenges: string[];
  solutions?: Array<{ title: string; description: string }>;
  approach?: Array<{ title: string; description: string }>;
  features: Array<{ title: string; description: string; icon?: string }>;
  results: Array<{ metric: string; label: string }>;
  projectDetails?: {
    client: string;
    timeline: string;
    teamSize: string;
    platforms?: string[];
    location?: string;
    technologies?: string[];
  };
  campaignDetails?: {
    client: string;
    duration: string;
    teamSize: string;
    channels: string[];
  };
  testimonials?: Array<{ name: string; role: string; quote: string }>;
  screenshots?: Array<{ image: string; alt: string }>;
  campaignElements?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  campaignCreative?: Array<{ image: string; alt: string }>;
  relatedProjects: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
};

// Helper functions to read data
const dataDirectory = path.join(process.cwd(), "data");

// Get all projects
export async function getAllProjects(): Promise<Project[]> {
  const filePath = path.join(dataDirectory, "projects", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents) as Project[];

  return data;
}

// Get featured projects
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

// Get project by slug
export async function getProjectBySlug(
  slug: string
): Promise<ProjectDetail | null> {
  try {
    const filePath = path.join(dataDirectory, "projects", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents) as ProjectDetail;

    return data;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
}

// Get all services
export async function getAllServices(): Promise<Service[]> {
  const filePath = path.join(dataDirectory, "services.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents) as Service[];

  return data;
}

// Get all team members
export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const filePath = path.join(dataDirectory, "team.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents) as TeamMember[];

  return data;
}
