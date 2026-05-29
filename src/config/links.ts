// Numéro WhatsApp (format international sans +, ni espaces) — Burkina Faso
const WHATSAPP_PHONE = "22668746126"

/**
 * Génère un lien WhatsApp "click to chat" avec message pré-rempli.
 * @param service Nom du service choisi (optionnel). Sans argument → message générique.
 */
export function whatsappLink(service?: string): string {
  const message = service
    ? `Bonjour Charifa, je suis intéressé par votre service de ${service}.`
    : "Bonjour Charifa, je suis intéressé par vos services."
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export const SITE_CONFIG = {
  phone: WHATSAPP_PHONE,
  whatsapp: whatsappLink(),
  calendly: "https://calendly.com/ouedraogocharifa03/call-prise-de-contact",
  facebook: "https://www.facebook.com/share/1EjLJ7L57u/",
  linkedin:
    "https://www.linkedin.com/in/ouedraogo-charifa-5b26632a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagram: "https://www.instagram.com/funnelby_cheri?igsh=aWo4bmp2dml6eXpw",
  tiktok: "https://www.tiktok.com/@charifaoz?_r=1&_t=ZS-96lisIDQMlO",
  email: "contactcharifa99@gmail.com",
}
