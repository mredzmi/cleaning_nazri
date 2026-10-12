import Image from "next/image";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/translations";
import WhatsAppLink from "@/components/WhatsAppLink";
export default function ServiceCard({ image,alt,title,description,price,note,locale,message,icon }: { image:string; alt:string; title:string; description:string; price:string; note?:string; locale:Locale; message:string; icon:ReactNode }) {
 const from = locale === "ms" ? "Bermula" : "From";
 return <article className="service-card">
   <div className="service-img-wrap"><Image src={image} alt={alt} fill sizes="(max-width: 800px) 100vw, 33vw" className="service-img"/></div>
   <div className="service-body"><div className="service-icon">{icon}</div><h3>{title}</h3><p>{description}</p><div className="price-inline"><div><span className="price-label">{from}</span><div className="price-value">{price}</div></div></div>{note && <p className="price-note">{note}</p>}<WhatsAppLink message={message} className="btn btn-primary">{locale === "ms" ? "Tempah Servis" : "Book This Service"}</WhatsAppLink></div>
  </article>;
}