import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CaseStudyPage from "@/components/case-study/CaseStudyPage";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const fullTitle = project.highlightedTitle
    ? `${project.title} ${project.highlightedTitle}`
    : project.title;

  return {
    title: `${fullTitle} | Vahid Aliyev`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}