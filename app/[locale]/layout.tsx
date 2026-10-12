import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/translations";
const locales: Locale[] = ["ms", "en"];
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const en = locale === "en";
  const title = en ? "JomCuci | Sofa, Washing Machine & Home Cleaning" : "JomCuci | Servis Pembersihan Sofa, Mesin Basuh & Rumah";
  const description = en ? "JomCuci provides sofa cleaning, washing machine cleaning, office chair cleaning and home cleaning services. Contact us on WhatsApp for enquiries and bookings." : "JomCuci menyediakan servis pembersihan sofa, mesin basuh, kerusi pejabat dan rumah. Hubungi kami melalui WhatsApp untuk pertanyaan dan tempahan.";
  const path = `/${locale}`;
  return {
    title, description, alternates: { canonical: path, languages: { "ms-MY": "/ms", "en": "/en", "x-default": "/ms" } },
    openGraph: { title, description, url: path, siteName: "JomCuci", locale: en ? "en_MY" : "ms_MY", type: "website" },
  };
}
export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
 const { locale } = await params;
 if (!locales.includes(locale as Locale)) notFound();
 return <div lang={locale === "en" ? "en" : "ms"}>{children}</div>;
}