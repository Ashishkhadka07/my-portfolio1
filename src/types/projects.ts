export interface Project {
  id: number;
  title: string;
  category: "Full Stack" | "Frontend" | "E-Commerce";
  image: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
}