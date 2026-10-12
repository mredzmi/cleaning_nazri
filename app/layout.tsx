import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://cleaningnazri.vercel.app"),
  title: "JomCuci | Servis Pembersihan Sofa, Mesin Basuh & Rumah",
  description: "JomCuci menyediakan servis pembersihan sofa, mesin basuh, kerusi pejabat dan rumah. Hubungi kami melalui WhatsApp untuk pertanyaan dan tempahan.",
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ms"><body>{children}</body></html>;
}