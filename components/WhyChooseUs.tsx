import { BadgeCheck, MessageCircle, Sparkles, Phone } from "lucide-react";
import type { Locale } from "@/lib/translations";
import { getCopy } from "@/lib/translations";
export default function WhyChooseUs({ locale }: { locale: Locale }) {
 const t=getCopy(locale); const icons=[<BadgeCheck size={21} key="a"/>,<MessageCircle size={21} key="b"/>,<Sparkles size={21} key="c"/>,<Phone size={21} key="d"/>];
 return <section id="about" className="section"><div className="container"><div className="section-head"><span className="kicker">{locale==="ms"?"MUDAH & PRAKTIKAL":"SIMPLE & PRACTICAL"}</span><h2 className="h2">{t.whyTitle}</h2><p className="muted">{t.whySub}</p></div><div className="why-grid">{t.why.map(([title,desc],i)=><article className="why-card" key={title}><div className="service-icon">{icons[i]}</div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>;
}