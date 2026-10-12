import { BUSINESS } from "@/lib/constants";
export function whatsappUrl(message: string) {
  return `${BUSINESS.whatsappBase}?text=${encodeURIComponent(message)}`;
}