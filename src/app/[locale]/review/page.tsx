import { Metadata } from "next";
import { getDictionary } from "@/lib/get-dictionary";
import ReviewPage from "@/components/ReviewPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale) as any;
  
  return {
    title: `${dictionary.review?.title || 'Review'} | Future Builds`,
    description: dictionary.review?.subtitle || 'Leave a review',
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale) as any;

  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      <BackgroundEffect />
      <Header />
      <main className="relative z-10 pt-20">
        <ReviewPage dictionary={dictionary} locale={locale} />
      </main>
      <Footer />
    </div>
  );
}
