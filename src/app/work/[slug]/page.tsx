import { notFound } from "next/navigation";
import { workItems } from "@/content/work";
import { DetailLayout } from "@/components/detail-layout";

export async function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} @ ${item.company} — Philipp`,
    description: item.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = workItems.find((w) => w.slug === slug);
  if (!item) notFound();

  return (
    <DetailLayout
      title={item.title}
      subtitle={item.company}
      period={item.period}
      tags={item.tags}
      content={item.content}
      onBack="/#work"
    />
  );
}
