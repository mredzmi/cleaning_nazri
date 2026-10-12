import type { Locale } from "@/lib/translations";
import { getCopy } from "@/lib/translations";
export default function HowItWorks({ locale }: { locale: Locale }) {
 const t=getCopy(locale);
 return <section className="section section-soft"><div className="container"><div className="section-head"><span className="kicker">{locale==="ms"?"TIGA LANGKAH RINGKAS":"THREE SIMPLE STEPS"}</span><h2 className="h2">{t.howTitle}</h2></div><div className="steps-grid">{t.howSteps.map(([title,desc],i)=><article className="step" key={title}><div className="step-num">{String(i+1).padStart(2,"0")}</div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>;
}