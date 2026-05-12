// =============================================
//  TOURNAMENT RULES - CONFIGURATION FILE
//  Update SHEET_URL to point to your published
//  Google Sheet (File > Share > Publish to web,
//  choose CSV format for the correct sheet tab).
// =============================================

const CONFIG = {
  // Publish your Google Sheet as CSV:
  //   File → Share → Publish to web → Sheet1 → CSV → Publish
  // Then paste that URL below.
  SHEET_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSHjqLhfHnbzQ5R3ZakS-viAWqTx5ACd1j9ivZ9XSswZG2Y2IU25Yy9viuDV3chJERQqA8c6up4YquS/pub?gid=0&single=true&output=csv",

  // ── LOGO ──────────────────────────────────────────────────────
  // Path to the logo image shown in the page header.
  // Can be a relative path (e.g. "MrXpress.PNG") or a full URL.
  // Leave LOGO_SRC empty ("") to hide the logo entirely.
  LOGO_SRC: "MrXpress.PNG",
  LOGO_ALT: "Ohio Valley Xpress Baseball",

  // ── THEME ─────────────────────────────────────────────────────
  // Built-in themes: "original-blue", "red-black"
  // Or use a custom object (see below).
  THEME: "original-blue",

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

  // ── COLUMNS ───────────────────────────────────────────────────
  // These are the exact header names the app looks for in your sheet's first row.
  // Column order doesn't matter — but spelling and capitalization must match exactly.
  COLUMNS: {
    ACTIVE:            "Active",
    TOURNAMENT:        "Tournament",
    LOCATION:          "Location",
    TIME_LIMIT:        "Time Limit",
    INNINGS:           "Innings",
    MERCY_RULE:        "Mercy Rule",
    PITCHING_LIMITS:   "Pitching Limits",
    BALKS:             "Balks",
    COURTESY_RUNNER:   "Courtesy Runner",
    EXTRA_INNING:      "Extra Innings",
    TIE_BREAKER:       "Tie Breakers",
    RULES_URL:         "Rules URL",
    NOTES:             "Notes",
    SORT_ORDER:        "Sort Order",
    START_DATE:        "Start Date",
    END_DATE:          "End Date",
    DROPPED_THIRD:     "Dropped Third Strike",
    STEALING:          "Stealing Rules",
    FIELD_TYPE:        "Field Type",
    SUBSTITUTION:      "Substitution Rules",
    HOTEL_NAME:        "Hotel Name",
    HOTEL_ADDRESS:     "Hotel Address",
    HOTEL_URL:         "Hotel URL",
    FIELD_ADDRESS:     "Field Address",
    GUARANTEED_GAMES:  "Guaranteed Games",
    GATE_FEE:          "Gate Fee",
    NUM_TEAMS:         "Number of Teams",
    TOURNAMENT_URL:    "Tournament URL",
  }
};
