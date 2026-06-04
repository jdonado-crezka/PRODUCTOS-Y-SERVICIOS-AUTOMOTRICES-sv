// config.js — Edit this file to customize the dashboard for a new client.
// No changes to index.html should be needed for routine client customization.

const CONFIG = {

  // ── Identity ──────────────────────────────────────────────────────────────
  pageTitle:      'Dashboard Facturas — Carga Vehículos Eléctricos 2025–2026',
  brandIcon:      '⚡',
  brandName:      'Facturas',
  brandHighlight: 'EV Charging',
  subtitle:       'Comercialización & Servicios de Instalación — 2025 / 2026',
  footerBy:       'Crezka Firm',

  // ── Colors ────────────────────────────────────────────────────────────────
  colors: {
    bg:          '#f4f7fb',
    surface:     '#ffffff',
    border:      '#dde4ef',
    accent:      '#0072f5',
    accent2:     '#00b26b',
    accent3:     '#f59e0b',
    text:        '#1a2236',
    muted:       '#7a8fad',
    danger:      '#e53e3e',
    'card-glow': '0 2px 16px rgba(0,114,245,.07)',
  },

  // ── Data source ───────────────────────────────────────────────────────────
  sheetUrl: 'https://script.google.com/macros/s/AKfycbzHETPZDbBjnv3Lsjzx_i3T-7Qjboq7Kp81g_KSRdZtrNOPfQlVbysPTd_WX3qr_vvU/exec',

  // Google Sheets column header names — must match the sheet headers exactly
  columns: {
    fecha:       'FECHA',
    tipoDoc:     'TIPO DOC',
    numControl:  'Número de Control',
    receptor:    'Receptor',
    descripcion: 'Descripción',
    total:       'TOTAL',
    saldo:       'Saldo de Cliente',
    pago:        'PAGO',
  },

  // Value in the PAGO column that means "paid" (case-sensitive)
  paidValue: 'SI',

  // Substring in TIPO DOC that identifies a Crédito Fiscal / CCF
  ccfKeyword: 'FISCAL',

  // ── Invoice categories ────────────────────────────────────────────────────
  // Evaluated top-to-bottom; first matching pattern wins.
  // The last entry must have pattern: null — it is the catch-all.
  categories: [
    {
      key:        'inst',
      label:      'Instalación/Equipo',
      chartLabel: 'Instalación / Equipo',
      color:      '#f59e0b',
      pattern:    /INSTALAC|DC CHAR|ESTACION|CARGADOR|KW|MOD |RFID|ADAPTADOR|TA-DC|EAUS|ELA00/,
    },
    {
      key:        'com',
      label:      'Comercialización',
      chartLabel: 'Comercialización / Svc',
      color:      '#0072f5',
      pattern:    /PLATAFORMA|CONFIGURAC|COMERCIALIZ|STRIPE|CONECTIV|RECARGA PARA|CUOTA|ANUAL DE PLAT/,
    },
    {
      key:        'otros',
      label:      'Otros',
      chartLabel: 'Otros',
      color:      '#e53e3e',
      pattern:    null,
    },
  ],

  // ── Fiscal note ───────────────────────────────────────────────────────────
  // HTML allowed. Set to '' to hide the note entirely.
  fiscalNote: 'Todas las facturas son <strong>NO SUJETAS</strong>. Las únicas gravadas son los Créditos Fiscales (CCF) emitidos a MOTORES DEL ASIA, S.A. DE C.V.',

  // ── Date range ────────────────────────────────────────────────────────────
  startYear: 2025,
  endYear:   2026,

  // ── Locale & currency ─────────────────────────────────────────────────────
  locale:   'es-SV',
  currency: '$',

  // Bar chart: bars above this USD amount use accent2 color instead of accent
  highValueThreshold: 20000,
};
