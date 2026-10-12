import { Check, Clock3, Info } from "lucide-react";
import type { Locale } from "@/lib/translations";
import { getCopy } from "@/lib/translations";
import WhatsAppLink from "@/components/WhatsAppLink";
export default function Pricing({ locale }: { locale: Locale }) {
 const t = getCopy(locale);
 const plans = [
  { name:t.package1,price:"RM100 – RM150",duration:t.duration1,includes:t.inclusions1 },
  { name:t.package2,price:"RM170 – RM200",duration:t.duration2,includes:t.inclusions2 },
  { name:t.package3,price:locale==="ms"?"Bermula RM500":"From RM500",duration:"",includes:[],desc:t.deepDesc }
 ];
 return <section id="pricing" className="section section-soft"><div className="container"><div className="section-head"><span className="kicker">{locale==="ms"?"TELUS & MUDAH":"STRAIGHTFORWARD RATES"}</span><h2 className="h2">{t.pricingTitle}</h2><p className="muted">{t.pricingDesc}</p></div>
  <div className="price-layout">{plans.map((p,i)=><article className="price-card" key={p.name}><div className="price-card-head"><h3>{p.name}</h3><div className="big-price">{p.price}</div>{p.duration && <div style={{display:"flex",alignItems:"center",gap:6,marginTop:11,color:"#718398",fontSize:12}}><Clock3 size={15}/>{p.duration}</div>}</div><div className="price-content">{p.includes.length>0?<><span className="price-label">{locale==="ms"?"Termasuk":"Includes"}</span><ul>{p.includes.map(it=><li key={it}><span>{it}</span><Check size={17}/></li>)}</ul></>:<p className="muted" style={{fontSize:13,margin:"10px 0 22px"}}>{p.desc}</p>}<WhatsAppLink message={t.whatsappHome} className={i===1?"btn btn-whatsapp":"btn btn-primary"}>{locale==="ms"?"Tanya Pakej":"Enquire About Package"}</WhatsAppLink></div></article>)}</div>
  <div className="notice"><Info size={18}/><span>{locale==="ms"?"Harga yang dipaparkan ialah harga permulaan. Harga akhir mungkin bergantung kepada saiz, keadaan dan keperluan servis. Sila hubungi kami untuk pengesahan.":"Displayed prices are starting prices. Final pricing may depend on size, condition and service requirements. Please contact us for confirmation."}</span></div>
 </div></section>;
}