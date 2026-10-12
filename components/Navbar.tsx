"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, MessageCircle } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getCopy, type Locale } from "@/lib/translations";
import { whatsappUrl } from "@/lib/whatsapp";
export default function Navbar({ locale }: { locale: Locale }) {
 const [open,setOpen] = useState(false); const t = getCopy(locale);
 const items = [{label:t.nav.home,href:"#home"},{label:t.nav.services,href:"#services"},{label:t.nav.pricing,href:"#pricing"},{label:t.nav.about,href:"#about"},{label:t.nav.contact,href:"#contact"}];
 return <>
  <div className="topbar"><div className="container topbar-inner"><span>✦ {locale === "ms" ? "Servis pembersihan, cara yang lebih mudah" : "Cleaning services, made simple"}</span><span className="topbar-secondary">{locale === "ms" ? "Pertanyaan & tempahan melalui WhatsApp" : "Enquiries & bookings via WhatsApp"}</span></div></div>
  <header className="navbar"><div className="container nav-inner">
   <Link className="brand" href={`/${locale}`} aria-label="JomCuci home"><span className="brand-mark"><Sparkles size={21}/></span><span>JomCuci<span style={{color:"var(--blue)"}}>.</span></span></Link>
   <nav className="nav-links" aria-label="Main navigation">{items.map(i=><a key={i.href} href={i.href}>{i.label}</a>)}</nav>
   <div className="nav-right"><LanguageSwitcher locale={locale}/><a className="btn btn-whatsapp" href={whatsappUrl(t.whatsappDefault)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{t.navCta}</a><button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</button></div>
  </div>
  {open && <nav className="container mobile-menu" aria-label="Mobile navigation">{items.map(i=><a key={i.href} href={i.href} onClick={()=>setOpen(false)}>{i.label}</a>)}<LanguageSwitcher locale={locale}/><a className="btn btn-whatsapp" href={whatsappUrl(t.whatsappDefault)} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}><MessageCircle size={17}/>{t.navCta}</a></nav>}
  </header>
 </>;
}