// ============================================================
//  SITE MODE — cambia aquí para alternar entre modos
//  'waitlist' → botones abren el modal de lista de espera
//  'live'     → botones llevan a la sección #planes
// ============================================================
export const SITE_MODE: 'waitlist' | 'live' = 'live';

// ============================================================
//  OFFER MODE — controla si la oferta de los planes está activa
//  true  → botones de los planes funcionan con normalidad
//  false → botones se reemplazan por "Oferta no disponible"
// ============================================================
export const OFFER_AVAILABLE = false;

// Configuración de cada modo
export const CTA_CONFIG = {
  waitlist: {
    label: 'Únete a la lista de espera',
    href: null, // null = abre el modal
  },
  live: {
    label: 'Desbloquea a Pablo',
    href: '#planes',
  },
} as const;

// Acceso directo al modo activo
export const CTA = CTA_CONFIG[SITE_MODE];
export const IS_LIVE = SITE_MODE === 'live';

// ============================================================
//  APP LINKS
// ============================================================
export const APP_URL = 'https://usapablo.app/';

// ============================================================
//  STRIPE LINKS — URLs de pago de Stripe
// ============================================================
export const STRIPE_URLS = {
  monthly: 'https://buy.stripe.com/9B628s8Hr8Za7LU2251sQ0n', // S/.20/mes
  annual: 'https://buy.stripe.com/cNidRa9Lv2AM2rAayB1sQ0o', // S/.120/año
};
