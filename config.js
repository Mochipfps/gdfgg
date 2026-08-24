// Ink Punk — site configuration.

// Whitelist backend (existing Google Apps Script Web App — do not change).
export const WHITELIST_ENDPOINT = "https://script.google.com/macros/s/AKfycbwguFAu6auStMyW0PrRJh50yISnv6ZqvAs8aVoqZerIqP73imgNcke6o1r48b_4-Zq90w/exec";

// Claim backend (NEW, separate Google Sheet + Apps Script — see claim-apps-script.gs).
// Paste the deployed Claim Web App URL here.
export const CLAIM_ENDPOINT = "https://script.google.com/macros/s/AKfycbyNw6EN3PodfaxbezKMFXpVH10QZhj4TI06E-_96lbwocHUozbhhWo60eB0BCXaDQwo/exec";

// Official X account and pinned post.
export const X_ACCOUNT_URL = "https://x.com/ink_punk_";
export const X_HANDLE = "@ink_punk_";
export const X_PINNED_POST_URL = "https://x.com/ink_punk_/status/2091633599799808458";

// Mint.
export const OPENSEA_URL = "https://opensea.io/collection/inkpunk-/overview";
export const MINT_LABEL = "24 AUGUST 2026 — 13:30 UTC";

// Whitelist closes 24 August 2026, 10:00 UTC.
export const WHITELIST_CLOSE_UTC = Date.UTC(2026, 7, 24, 10, 0, 0);

// GTD claim.
export const GTD_TOTAL_SPOTS = 1000;
export const GTD_ISSUE_DATE = "24 AUGUST 2026";
export const GTD_QR_TARGET = "https://inkpunk.xyz/whitelist";
