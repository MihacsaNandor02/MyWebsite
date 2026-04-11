import { getDictionary } from "@/lib/get-dictionary";
import PolicyClient from "../privacy-policy/PolicyClient";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ro" }];
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <PolicyClient dictionary={dictionary} type="terms" />;
}
