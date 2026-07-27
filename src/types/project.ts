export type ProjectTheme = "cyan" | "violet";

export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "AI"
  | "Dashboard"
  | "Next.js"
  | "Startup"
  | "Legal Tech";

export type ProjectStatus =
  | "Featured"
  | "Startup"
  | "In Development"
  | "Real-Time"
  | "Live"
  | "GitHub Only"
  | "Completed";

export type ProjectIconName =
  | "bookmark"
  | "compass"
  | "edit"
  | "grid"
  | "lock"
  | "message"
  | "shield"
  | "target"
  | "trending"
  | "upload"
  | "userPlus"
  | "users"
  | "zap"
  | "layers"
  | "code"
  | "server"
  | "database";

export type ProjectLinkType = "github" | "live" | "landing";

export type ProjectLink = {
  label: string;
  href: string;
  type: ProjectLinkType;
};

export type ProjectMetric = {
  value: string;
  label: string;
  icon?: ProjectIconName;
};

export type ProjectFeature = {
  title: string;
  description: string;
  icon?: ProjectIconName;
};

export type ProjectFeatureSection = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProjectFeature[];
};

export type ProjectChallenge = {
  number: string;
  title: string;
  description: string;
};

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProjectTechGroup = {
  title: string;
  technologies: string[];
  icon?: ProjectIconName;
};

export type ProjectArchitectureItem = {
  title: string;
  subtitle: string;
  icon?: ProjectIconName;
};

export type ProjectRoadmapStatus =
  | "Completed"
  | "In Development"
  | "Planned";

export type ProjectRoadmapItem = {
  stage: string;
  title: string;
  status: ProjectRoadmapStatus;
  description: string;
};

export type ProjectCaseStudy = {
  id: number;
  slug: string;

  title: string;
  highlightedTitle?: string;
  subtitle: string;

  categories: ProjectCategory[];
  statuses: ProjectStatus[];

  theme: ProjectTheme;

  heroImage: string;
  heroImageAlt: string;

  links: ProjectLink[];
  metrics: ProjectMetric[];

  overview: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: string[];

    contributionEyebrow?: string;
    contributionTitle: string;
    contributions: string[];
  };

  story?: {
    eyebrow: string;
    title: string;
    description: string;
    heading: string;
    paragraphs: string[];
  };

  problemSolution?: {
    eyebrow: string;
    title: string;
    description: string;

    problem: {
      title: string;
      items: string[];
    };

    solution: {
      title: string;
      items: string[];
    };
  };

  principles?: ProjectFeatureSection;

  features?: ProjectFeatureSection;

  techStack?: {
    eyebrow: string;
    title: string;
    description: string;
    groups: ProjectTechGroup[];
  };

  architecture?: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectArchitectureItem[];
    note?: string;
  };

  roadmap?: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectRoadmapItem[];
  };

  challenges?: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectChallenge[];
  };

  learnings?: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };

  gallery?: {
    eyebrow: string;
    title: string;
    description: string;
    images: ProjectGalleryImage[];
  };

  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};