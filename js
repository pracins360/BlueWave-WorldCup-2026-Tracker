/* ============================================
   CONFIG
============================================ */
const API_URL = "https://script.google.com/macros/s/AKfycbvWVP3ZJZ_Hxhx5U2dWrzfvWRlcfemc7oOj6-mCniVkW5Sci2cusBJFy6ydnkNO4-pg/exec";


/* ============================================
   FLAG MAPPER (Emoji)
============================================ */
function flagFor(country) {
  if (!country) return "🏳️";
  const map = {
    "curacao": "🇨🇼",
    "brazil": "🇧🇷",
    "germany": "🇩🇪",
    "argentina": "🇦🇷",
    "france": "🇫🇷",
    "spain": "🇪🇸",
    "usa": "🇺🇸",
    "netherlands": "🇳🇱",
    "italy": "🇮🇹",
    "england": "🏴",
    "portugal": "🇵🇹",
    "colombia": "🇨🇴",
    "mexico": "🇲🇽",
    "japan": "🇯🇵",
    "south korea": "🇰🇷"
  };
  const key = country.toLowerCase().trim();
  return map[key] || "🏳️";
}


/* ============================================
   NAVIGATION
============================================ */
function goHome() {
  document.getElementById("countryCard").classList.add("hidden");
  document.getElementById("loyaltyCard").classList.add("hidden");
  hideAllSections();
}

function hideLoyalty() {
  document.getElementById("loyaltyCard").classList.add("hidden");
}


/* ============================================
   SECTION TABS
============================================ */
function hideAllSections() {
  document.getElementById("section-results").classList.add("hidden");
  document.getElementById("section-calendar").classList.add("hidden");
  document.getElementById("section-bracket").classList.add("hidden");
  document.getElementById("section-facts").classList.add("hidden");

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
}

function showSection(section) {
  hideAllSections();
  document.getElementById(`section-${section}`).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach(t => {
    if (t.textContent.toLowerCase().includes(section)) {
      t.classList.add("active");
    }
  });
}

// ===============================
// SPONSOR DATA (EXAMPLE STRUCTURE)
// ===============================
// You will fill these arrays from your backend.
// Each item: { name, logo, link, message }

const premiumSponsors = [
  // 16 total, shown 8 at a time (banners)
  // { name: "Aqualectra", logo: "img/aqualectra-banner.png", link: "https://...", ... },
];

const goldSponsors = [
  // 20 total, shown 10 at a time (logos)
  // { name: "BDO", logo: "img/bdo-logo.png", link: "https://...", ... },
];

const silverSponsors = [
  // 30 total, shown 10 at a time (messages)
  // { name: "Aqualectra", message: "We celebrate the Curaçao Wave" },
];

const PREMIUM_GROUP_SIZE = 8;   // 2 groups → 16 total
const GOLD_GROUP_SIZE    = 10;  // 2 groups → 20 total
const SILVER_GROUP_SIZE  = 10;  // 3 groups → 30 total

// ===============================
// ROTATION COUNTER (PER APP OPEN)
// ===============================
function getRotationIndex() {
  let rotation = parseInt(localStorage.getItem("bwRotation") || "0", 10);
  rotation = (rotation + 1); // increment on each open
  localStorage.setItem("bwRotation", rotation);
  return rotation;
}

// ===============================
// GROUP SELECTION HELPERS
// ===============================
function getGroup(items, groupSize, groupCount, rotationIndex) {
  // rotationIndex starts at 1, so we normalize:
  const groupIndex = (rotationIndex - 1) % groupCount; // 0,1,2,...
  const start = groupIndex * groupSize;
  return items.slice(start, start + groupSize);
}

// ===============================
// RENDER FUNCTIONS
// ===============================
function renderPremium(group) {
  const container = document.getElementById("premiumContainer");
  if (!container) return;
  container.innerHTML = "";

  group.forEach(s => {
    container.innerHTML += `
      <div class="premium-banner" onclick="openLink('${s.link}')">
        <img src="${s.logo}" alt="${s.name}">
      </div>
    `;
  });
}

function renderGold(group) {
  const container = document.getElementById("goldContainer");
  if (!container) return;
  container.innerHTML = "";

  group.forEach(s => {
    container.innerHTML += `
      <div class="gold-item" onclick="openLink('${s.link}')">
        <img src="${s.logo}" alt="${s.name}">
      </div>
    `;
  });
}

function renderSilver(group) {
  const container = document.getElementById("silverScroller");
  if (!container) return;
  container.innerHTML = "";

  group.forEach(s => {
    container.innerHTML += `
      <div class="silver-item">
        <span class="silver-name">${s.name}</span>
        <span class="silver-message"> – ${s.message}</span>
      </div>
    `;
  });
}

// ===============================
// LINK HELPER
// ===============================
function openLink(url) {
  if (!url) return;
  window.open(url, "_blank");
}

// ===============================
// INITIALIZE LANDING PAGE ROTATION
// ===============================
function initLandingPageSponsors() {
  const rotationIndex = getRotationIndex();

  // Premium: 2 groups (16 total, 8 per group)
  const premiumGroupCount = Math.ceil(premiumSponsors.length / PREMIUM_GROUP_SIZE) || 1;
  const premiumGroup = getGroup(premiumSponsors, PREMIUM_GROUP_SIZE, premiumGroupCount, rotationIndex);
  renderPremium(premiumGroup);

  // Gold: 2 groups (20 total, 10 per group)
  const goldGroupCount = Math.ceil(goldSponsors.length / GOLD_GROUP_SIZE) || 1;
  const goldGroup = getGroup(goldSponsors, GOLD_GROUP_SIZE, goldGroupCount, rotationIndex);
  renderGold(goldGroup);

  // Silver: 3 groups (30 total, 10 per group)
  const silverGroupCount = Math.ceil(silverSponsors.length / SILVER_GROUP_SIZE) || 1;
  const silverGroup = getGroup(silverSponsors, SILVER_GROUP_SIZE, silverGroupCount, rotationIndex);
  renderSilver(silverGroup);
}

// Call this once when the page loads
document.addEventListener("DOMContentLoaded", initLandingPageSponsors);

// ===============================
// ENTER APP (HIDE LANDING, SHOW UI)
// ===============================
function enterApp() {
  const landing = document.getElementById("landingPage");
  if (landing) landing.style.display = "none";

  // If you want, you can explicitly show your app wrapper here:
  // const app = document.getElementById("appWrapper");
  // if (app) app.style.display = "block";
}

/* ============================================
   LOAD COUNTRY
============================================ */
async function loadCountry(name) {
  const res = await fetch(`${API_URL}?action=country&country=${encodeURIComponent(name)}`);
  const data = await res.json();
  if (!data) return;

  document.getElementById("countryCard").classList.remove("hidden");

  document.getElementById("countryName").textContent = data.Country;
  document.getElementById("countryFlag").textContent = flagFor(data.Country);
  document.getElementById("countryGroup").textContent = data.Group;
  document.getElementById("countryPos").textContent = data.Pos;
  document.getElementById("countryPts").textContent = data.Pts;
  document.getElementById("countryGF").textContent = data.GF;
  document.getElementById("countryGA").textContent = data.GA;
  document.getElementById("countryLast").textContent = data.LastMatch;

  const wave = parseInt(data["WAVE%"] || data["WAVE %"] || 0);
  document.getElementById("waveValue").textContent = wave + "%";
  document.getElementById("waveFill").style.width = wave + "%";

  document.getElementById("countryAnalysis").textContent = data.Analysis;
}


/* ============================================
   LOAD LOYALTY MATCH
============================================ */
function loadLoyalty(loyalty) {
  if (!loyalty || loyalty.length === 0) return;

  const match = loyalty.find(m =>
    m.Active === true ||
    String(m.Active).toUpperCase() === "TRUE"
  );

  if (!match) return;

  document.getElementById("loyaltyCard").classList.remove("hidden");

  document.getElementById("loyaltyTeamA").textContent = match.TeamA;
  document.getElementById("loyaltyTeamB").textContent = match.TeamB;
  document.getElementById("loyaltyResult").textContent = match.Result;
  document.getElementById("loyaltyVoucher").textContent = match.VoucherCode;
}


/* ============================================
   LOAD SPONSORS
============================================ */
function loadSponsors(sponsors) {
  const list = document.getElementById("sponsorList");
  list.innerHTML = "";

  sponsors.forEach(s => {
    const div = document.createElement("div");
    div.className = "sponsor-item";

    div.innerHTML = `
      <div class="sponsor-main">
        <div class="sponsor-name">${s.SponsorName}</div>
        <div class="sponsor-tier">Tier: ${s.Tier}</div>
      </div>
      <div class="sponsor-actions">
        <div class="link-pill" onclick="openLink('${s.AdURL}')">Ad</div>
        <div class="link-pill" onclick="openLink('${s.WhatsAppLink}')">WhatsApp</div>
      </div>
    `;

    list.appendChild(div);
  });

  loadChallenge(sponsors);
}


/* ============================================
   LOAD ACTIVE CHALLENGE
============================================ */
function loadChallenge(sponsors) {
  const active = sponsors.find(s =>
    s.ActiveChallenge === true ||
    String(s.ActiveChallenge).toUpperCase() === "TRUE"
  );

  if (!active) return;

  document.getElementById("challengeCard").classList.remove("hidden");
  document.getElementById("challengeTitle").textContent = active.ChallengeTitle;
  document.getElementById("challengeTeaser").textContent = active.ChallengeTeaser;
  document.getElementById("challengeLink").setAttribute("data-url", active.ChallengeLink);
}

function openChallenge() {
  const url = document.getElementById("challengeLink").getAttribute("data-url");
  if (url) window.open(url, "_blank");
}


/* ============================================
   LOAD RESULTS / CALENDAR / BRACKET / FACTS
============================================ */
function loadResults(matches) {
  document.getElementById("resultsContent").textContent =
    JSON.stringify(matches, null, 2);
}

function loadCalendar(matches) {
  document.getElementById("calendarContent").textContent =
    JSON.stringify(matches, null, 2);
}

function loadBracket(bracket) {
  document.getElementById("bracketContent").textContent =
    JSON.stringify(bracket, null, 2);
}

function loadFacts(facts) {
  document.getElementById("factsContent").textContent =
    JSON.stringify(facts, null, 2);
}


/* ============================================
   UTIL
============================================ */
function openLink(url) {
  if (url && url !== "") window.open(url, "_blank");
}


/* ============================================
   INIT
============================================ */
async function loadAll() {
  const res = await fetch(`${API_URL}?action=all`);
  const data = await res.json();
  if (!data) return;

  loadSponsors(data.sponsors);
  loadLoyalty(data.loyalty);
  loadResults(data.matches);
  loadCalendar(data.matches);
  loadBracket(data.bracket);
  loadFacts(data.facts);

  showSection('results');
}

loadAll();
