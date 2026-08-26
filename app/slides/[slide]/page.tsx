import Deck from "@/components/deck";

export default async function SlidePage({ params }: { params: Promise<{ slide: string }> }) {
  const { slide } = await params;
  const parsed = Number.parseInt(slide, 10);
  return <Deck initialSlide={Number.isFinite(parsed) ? parsed : 1} />;
}
