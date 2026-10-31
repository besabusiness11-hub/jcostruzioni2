import contatti from "@/content/contatti.json"

export const CONTACT_EMAIL = contatti.email
export const CONTACT_PHONE = contatti.telefono
export const CONTACT_PHONE_HREF = `tel:${contatti.telefonoInternazionale.replace(/\s/g, "")}`
export const CONTACT_LOCATION = contatti.localita
export const PRIVACY_OWNER = contatti.titolarePrivacy
export const PRIVACY_EMAIL = contatti.emailPrivacy
