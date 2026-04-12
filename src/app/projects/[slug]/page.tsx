import { notFound } from "next/navigation";
import { projectItems } from "@/content/projects";
import { DetailLayout } from "@/components/detail-layout";

export async function generateStaticParams() {
  return projectItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = projectItems.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — Philipp`,
    description: item.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = projectItems.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <DetailLayout
      title={item.title}
      tags={item.tags}
      content={item.content}
      link={item.link}
      onBack="/#projects"
    />
  );
}
