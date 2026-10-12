import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
export default function WhatsAppLink({ message, children, className = "btn btn-primary", icon = false }: { message: string; children: ReactNode; className?: string; icon?: boolean }) {
 return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">{icon && <MessageCircle size={17}/ >}{children}</a>;
}