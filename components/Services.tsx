import Image from "next/image";
import { WashingMachine, Sofa, House, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/translations";
import { getCopy } from "@/lib/translations";
import { whatsappUrl } from "@/lib/whatsapp";
import ServiceCard from "@/components/ServiceCard";
export default function Services({ locale }: { locale: Locale }) {
 const t = getCopy(locale);
 return <>
  <section id="services" className="section"><div className="container"><div className="section-head"><span className="kicker">{locale === "ms" ? "PILIHAN SERVIS" : "OUR SERVICES"}</span><h2 className="h2">{t.servicesTitle}</h2><p className="muted">{t.servicesSub}</p></div>
  <div className="service-grid">
   <ServiceCard image="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=82" alt={locale==="ms"?"Mesin basuh muatan hadapan yang bersih":"Clean front-loading washing machine"} title={t.washerTitle} description={t.washerDesc} price="RM150 – RM170" note={t.washerNote} locale={locale} message={t.whatsappWasher} icon={<WashingMachine size={22}/>}/>
   <article className="service-card"><div className="service-img-wrap"><Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=82" alt={locale==="ms"?"Sofa moden di ruang tamu cerah":"Modern sofa in a bright living room"} fill sizes="(max-width: 800px) 100vw, 33vw" className="service-img"/></div><div className="service-body"><div className="service-icon"><Sofa size={22}/></div><h3>{t.sofaTitle}</h3><p>{t.sofaDesc}</p><div className="sofa-pricing"><div className="sofa-box"><h4>{t.home}</h4>{[[t.sofa1,"RM50"],[t.sofa2,"RM90"],[t.sofa3,"RM120"]].map(([n,p])=><div className="price-row" key={n}><span>{n}</span><strong>{p}</strong></div>)}</div><div className="sofa-box"><h4>{t.office}</h4>{[[t.chair1,"RM20"],[t.chair2,"RM25"],[t.chair3,"RM30"]].map(([n,p])=><div className="price-row" key={n}><span>{n}</span><strong>{p}</strong></div>)}</div></div><a className="btn btn-primary" href={whatsappUrl(t.whatsappSofa)} target="_blank" rel="noopener noreferrer">{locale==="ms"?"Tempah Pembersihan Sofa":"Book Sofa Cleaning"} <ArrowUpRight size={16}/></a></div></article>
   <ServiceCard image="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=82" alt={locale==="ms"?"Peralatan pembersihan rumah profesional":"Professional home cleaning equipment"} title={t.homeCleanTitle} description={t.homeCleanDesc} price="RM100 – RM150" note={locale==="ms"?"Lihat pilihan pakej di bawah.":"See package options below."} locale={locale} message={t.whatsappHome} icon={<House size={22}/>}/>
  </div></div></section>
 </>;
}