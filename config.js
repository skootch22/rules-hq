// =============================================
//  Tournament Rules Viewer
//  © 2026 Scott Timberlake. All rights reserved.
//  Unauthorized copying, reproduction, or distribution
//  of this file, via any medium, is strictly prohibited
//  without prior written permission.
// =============================================

// =============================================
//  TOURNAMENT RULES - CONFIGURATION FILE
//  Update SUPABASE_URL, SUPABASE_ANON_KEY, and
//  TEAM_ID to connect to your Supabase project.
//  Find these under Settings → API in Supabase.
// =============================================

const CONFIG = {
  // ── SUPABASE ──────────────────────────────────────────────────
  // Project URL and anon key from Settings → API in your Supabase dashboard.
  SUPABASE_URL:      "https://gyguhunknhrhhrviwgig.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_KtRPIPgmJ_OkOKSny8gEcw_wFxaaiMS",

  // The UUID of this team's row in the teams table.
  TEAM_ID: "54896758-d4aa-488b-8bd3-423d8df59db2",

  // ── ADMIN ─────────────────────────────────────────────────────
  // Password to access the admin panel (admin.html).
  // Note: this file is public — do not reuse sensitive passwords.
  ADMIN_PASSWORD: "RulesHQDem0",


  // ── PAGE ──────────────────────────────────────────────────────
  // Text shown in the browser tab and when bookmarked.
  PAGE_TITLE: "OV Xpress – Tournament Rules",

  // ── FAVICON ───────────────────────────────────────────────────
  // Browser tab icon. Can be a relative path or full URL.
  // Supports .png, .ico, .svg. Leave empty ("") to use the browser default.
  FAVICON: "RulesHQ_favicon.PNG",
  // Icon used when a visitor adds the page to their iPhone/iPad home screen.
  // Leave empty ("") to fall back to the favicon.
  APPLE_TOUCH_ICON: "RulesHQ_favicon.PNG",

  // ── LOGO ──────────────────────────────────────────────────────
  // Path to the logo image shown in the page header.
  // Can be a relative path (e.g. "logo.png") or a full URL.
  // Leave LOGO_SRC empty ("") to hide the logo entirely.
  LOGO_SRC: "RulesHQ_logo_transparent.png",
  LOGO_ALT: "Ohio Valley Xpress Baseball",

  // ── THEME ─────────────────────────────────────────────────────
  // Built-in themes: "original-blue", "red-black", "light-blue", "orange", "black-yellow", "black-white"
  // Or use a custom object (see below).
  THEME: "black-white",

  // Custom theme example (uncomment and fill in to use):
  // THEME: {
  //   name:             "custom",
  //   primary:          "#cc0000",  // main accent color
  //   primary2:         "#990000",  // darker accent (hover states, gradients)
  //   navy:             "#0a0a0a",  // darkest background
  //   navy2:            "#1a1a1a",  // secondary background
  //   cardBg:           "#111111",  // card background
  //   border:           "#2a2a2a",  // border color
  //   gold:             "#f5a623",  // stats highlight color
  //   headerGradient:   "linear-gradient(135deg, #0a0a0a 0%, #1a0000 60%, #2a0000 100%)",
  // },
};
