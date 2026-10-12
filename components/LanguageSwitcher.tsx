import Link from "next/link";
import type { Locale } from "@/lib/translations";
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
 return <div className="lang-switch" aria-label="Language selector">
  <Link href="/ms" aria-current={locale === "ms" ? "page" : undefined}>BM</Link>
  <Link href="/en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
 </div>;
}