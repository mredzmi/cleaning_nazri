import Image from "next/image";
import { ArrowRight, Check, Clock3, Info, MessageCircle, Sparkles, Star, MapPin, Sofa, WashingMachine, House } from "lucide-react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import type { Locale } from "@/lib/translations";
import { getCopy } from "@/lib/translations";
import { whatsappUrl } from "@/lib/whatsapp";

export function generateStaticParams() { return [{locale:"ms"},{locale:"en"}]; }

export default async function LocalePage({ params }: { params: Promise<{locale:string}> }) {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "ms";
  const t = getCopy(locale);
  const heroImage = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=85";
  const washerImage = "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=82";
  const gallery = [
    ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=82", locale==="ms"?"Pembersihan sofa":"Sofa cleaning"],
    ["https://sneakershoot-static.sgp1.cdn.digitaloceanspaces.com/hs-services/6903a3f7a851ff8ebd37e41c2b7bfe9e.webp", locale==="ms"?"Pembersihan mesin basuh top load":"Top-load washing machine cleaning"],
    ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=82", locale==="ms"?"Pembersihan rumah":"Home cleaning"],
    ["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=82", locale==="ms"?"Ruang tamu bersih":"Clean living room"],
    ["https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1000&q=82", locale==="ms"?"Kerusi pejabat":"Office chair cleaning"],
    ["https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=82", locale==="ms"?"Profesional pembersihan":"Professional cleaner"]
  ];
  return <>
    <Navbar locale={locale}/>
    <main>
      <section id="home" className="hero">
        <Image src={heroImage} alt={locale==="ms"?"Perkhidmatan pembersihan rumah profesional":"Professional home cleaning service"} fill priority sizes="100vw" className="hero-photo"/>
        <div className="hero-shade"/>
        <div className="container"><div className="hero-content">
          <span className="kicker"><Sparkles size={14}/>{t.eyebrow}</span>
          <h1>{t.heroTitle}</h1><div className="hero-sub">{t.heroSub}</div><p className="hero-body">{t.heroBody}</p>
          <div className="hero-actions"><a className="btn btn-whatsapp" href={whatsappUrl(t.whatsappDefault)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>{t.heroCta}</a><a className="btn btn-light" href="#services">{t.heroSecondary}<ArrowRight size={16}/></a></div>
          <div className="trust-row">{t.trust.map((x,i)=><span className="trust-item" key={x}><Check size={15}/>{x}</span>)}</div>
        </div></div>
      </section>
      <Services locale={locale}/>
      <Pricing locale={locale}/>
      <section id="about" className="section"><div className="container"><div className="area-box">
        <div><span className="kicker">{locale==="ms"?"MUDAH DIHUBUNGI":"EASY TO CONTACT"}</span><h3>{t.whyTitle}</h3><p>{t.whySub}</p></div>
        <a className="btn btn-primary" href={whatsappUrl(t.whatsappDefault)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/>{locale==="ms"?"WhatsApp Kami":"WhatsApp Us"}</a>
      </div></div></section>
      <WhyChooseUs locale={locale}/>
      <HowItWorks locale={locale}/>
      <section className="section section-soft"><div className="container">
        <div className="section-head"><span className="kicker">{locale==="ms"?"GALERI":"GALLERY"}</span><h2 className="h2">{t.galleryTitle}</h2><p className="muted">{t.gallerySub}</p></div>
        <div className="gallery-grid">{gallery.map(([src,label],i)=><div className="gallery-item" key={src}><Image src={src} alt={label} fill sizes="(max-width:800px) 50vw, 33vw" loading={i<2?"eager":"lazy"}/><div className="gallery-caption">{label}</div></div>)}</div>
        <div className="gallery-disclaimer">{locale==="ms"?"Foto ilustrasi servis":"Service photography / illustration"}</div>
      </div></section>
      <section className="section"><div className="container"><div className="area-box">
        <div><span className="kicker"><MapPin size={13}/>{locale==="ms"?"KAWASAN SERVIS":"SERVICE AREA"}</span><h3>{t.areaTitle}</h3><p>{t.areaDesc}</p></div>
        <a className="btn btn-primary" href={whatsappUrl(t.whatsappDefault)} target="_blank" rel="noopener noreferrer">{t.areaCta}<ArrowRight size={16}/></a>
      </div></div></section>
      <section id="contact" className="section"><div className="container"><div className="contact-band">
        <div><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p></div>
        <a className="btn btn-whatsapp" href={whatsappUrl(t.whatsappDefault)} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>{t.contactCta}</a>
      </div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main">
      <div className="footer-brand"><div className="brand"><span className="brand-mark"><Sparkles size={20}/></span><span>JomCuci<span style={{color:"var(--blue)"}}>.</span></span></div><p>{t.footerDesc}</p></div>
      <div className="footer-links"><a href="#home">{t.nav.home}</a><a href="#services">{t.nav.services}</a><a href="#pricing">{t.nav.pricing}</a><a href="#contact">{t.nav.contact}</a></div>
      <div className="footer-contact"><strong>WhatsApp: 011-16543022</strong></div>
    </div><div className="footer-bottom"><span>{t.copyright}</span><span>{locale==="ms"?"Bersih, Mudah, JomCuci.":"Clean. Easy. JomCuci."}</span></div></div></footer>
    <FloatingWhatsApp locale={locale}/>
  </>;
}