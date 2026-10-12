import { MessageCircle } from "lucide-react";
import { getCopy, type Locale } from "@/lib/translations";
import { whatsappUrl } from "@/lib/whatsapp";
export default function FloatingWhatsApp({ locale }: { locale: Locale }) {
 const t = getCopy(locale);
 return <a className="floating-wa" href={whatsappUrl(t.whatsappDefault)} target="_blank" rel="noopener noreferrer" aria-label={locale === "ms" ? "Hubungi JomCuci melalui WhatsApp" : "Contact JomCuci on WhatsApp"}><MessageCircle size={23}/><span>{locale === "ms" ? "WhatsApp Kami" : "WhatsApp Us"}</span></a>;
}