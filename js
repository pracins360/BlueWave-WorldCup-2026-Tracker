/* ============================================
   CONFIG
============================================ */
const API_URL = "https://script.google.com/macros/s/AKfycbyWVP3ZJZ_Hxhx5U2dWrzfvWRlcfemc7oOj6-mCniVkW5Sci2cusBJFy6ydnkNO4-pg/exec";


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
const premiumSponsors = [
  {
    name: "Company Name",
    logo: "img/company-banner.png",   // rectangular banner
    link: "https://wa.me/5999XXXXXXX" // or website
  },
  // repeat until you have 16
];
const goldSponsors = [
  {
    name: "Company Name",
    logo: "img/company-logo.png",    // square or horizontal logo
    link: "https://wa.me/5999XXXXXXX"
  },
  // repeat until you have 20
];
const silverSponsors = [
  {
    name: "Company Name",
    message: "Short message of support"
  },
  // repeat until you have 30
];
const premiumSponsors = [
  { name: "BlueWave Bank", logo: "img/premium-bluewave.png", link: "https://wa.me/59995550001" },
  { name: "Curaçao Energy", logo: "img/premium-energy.png", link: "https://wa.me/59995550002" },
  { name: "Island Telecom", logo: "img/premium-telecom.png", link: "https://wa.me/59995550003" },
  { name: "Caribbean Motors", logo: "img/premium-motors.png", link: "https://wa.me/59995550004" },
  { name: "Sunset Resorts", logo: "img/premium-resorts.png", link: "https://wa.me/59995550005" },
  { name: "Ocean Fresh Foods", logo: "img/premium-oceanfresh.png", link: "https://wa.me/59995550006" },
  { name: "Harbor Logistics", logo: "img/premium-harbor.png", link: "https://wa.me/59995550007" },
  { name: "Royal Insurance", logo: "img/premium-insurance.png", link: "https://wa.me/59995550008" },

  { name: "BlueWave Bank 2", logo: "img/premium-bluewave2.png", link: "https://wa.me/59995550009" },
  { name: "Curaçao Energy 2", logo: "img/premium-energy2.png", link: "https://wa.me/59995550010" },
  { name: "Island Telecom 2", logo: "img/premium-telecom2.png", link: "https://wa.me/59995550011" },
  { name: "Caribbean Motors 2", logo: "img/premium-motors2.png", link: "https://wa.me/59995550012" },
  { name: "Sunset Resorts 2", logo: "img/premium-resorts2.png", link: "https://wa.me/59995550013" },
  { name: "Ocean Fresh Foods 2", logo: "img/premium-oceanfresh2.png", link: "https://wa.me/59995550014" },
  { name: "Harbor Logistics 2", logo: "img/premium-harbor2.png", link: "https://wa.me/59995550015" },
  { name: "Royal Insurance 2", logo: "img/premium-insurance2.png", link: "https://wa.me/59995550016" }
];
const goldSponsors = [
  { name: "Island Fitness", logo: "img/gold-fitness.png", link: "https://wa.me/59995551001" },
  { name: "Tropical Café", logo: "img/gold-cafe.png", link: "https://wa.me/59995551002" },
  { name: "Aqua Rentals", logo: "img/gold-aqua.png", link: "https://wa.me/59995551003" },
  { name: "Caribbean Print", logo: "img/gold-print.png", link: "https://wa.me/59995551004" },
  { name: "Island Tech", logo: "img/gold-tech.png", link: "https://wa.me/59995551005" },
  { name: "Blue Taxi", logo: "img/gold-taxi.png", link: "https://wa.me/59995551006" },
  { name: "Fresh Market", logo: "img/gold-market.png", link: "https://wa.me/59995551007" },
  { name: "Harbor Café", logo: "img/gold-harborcafe.png", link: "https://wa.me/59995551008" },
  { name: "Sunrise Tours", logo: "img/gold-tours.png", link: "https://wa.me/59995551009" },
  { name: "Island Auto", logo: "img/gold-auto.png", link: "https://wa.me/59995551010" },

  { name: "Island Fitness 2", logo: "img/gold-fitness2.png", link: "https://wa.me/59995551011" },
  { name: "Tropical Café 2", logo: "img/gold-cafe2.png", link: "https://wa.me/59995551012" },
  { name: "Aqua Rentals 2", logo: "img/gold-aqua2.png", link: "https://wa.me/59995551013" },
  { name: "Caribbean Print 2", logo: "img/gold-print2.png", link: "https://wa.me/59995551014" },
  { name: "Island Tech 2", logo: "img/gold-tech2.png", link: "https://wa.me/59995551015" },
  { name: "Blue Taxi 2", logo: "img/gold-taxi2.png", link: "https://wa.me/59995551016" },
  { name: "Fresh Market 2", logo: "img/gold-market2.png", link: "https://wa.me/59995551017" },
  { name: "Harbor Café 2", logo: "img/gold-harborcafe2.png", link: "https://wa.me/59995551018" },
  { name: "Sunrise Tours 2", logo: "img/gold-tours2.png", link: "https://wa.me/59995551019" },
  { name: "Island Auto 2", logo: "img/gold-auto2.png", link: "https://wa.me/59995551020" }
];
const silverSponsors = [
  { name: "BlueWave Bank", message: "Supporting Curaçao’s youth" },
  { name: "Island Fitness", message: "Stay strong, stay active" },
  { name: "Tropical Café", message: "Fuel your day" },
  { name: "Aqua Rentals", message: "Explore the island" },
  { name: "Caribbean Print", message: "Print with pride" },
  { name: "Island Tech", message: "Innovation for all" },
  { name: "Blue Taxi", message: "Ride with comfort" },
  { name: "Fresh Market", message: "Local freshness daily" },
  { name: "Harbor Café", message: "Taste the island" },
  { name: "Sunrise Tours", message: "Discover Curaçao" },

  { name: "BlueWave Bank 2", message: "Proud to support the community" },
  { name: "Island Fitness 2", message: "Your health matters" },
  { name: "Tropical Café 2", message: "Good vibes only" },
  { name: "Aqua Rentals 2", message: "Adventure awaits" },
  { name: "Caribbean Print 2", message: "Quality you trust" },
  { name: "Island Tech 2", message: "Tech made simple" },
  { name: "Blue Taxi 2", message: "We take you there" },
  { name: "Fresh Market 2", message: "Eat well, live well" },
  { name: "Harbor Café 2", message: "Island flavor" },
  { name: "Sunrise Tours 2", message: "See the beauty" },

  { name: "Ocean Fresh Foods", message: "Taste the ocean" },
  { name: "Harbor Logistics", message: "Moving Curaçao forward" },
  { name: "Royal Insurance", message: "Protecting what matters" },
  { name: "Sunset Resorts", message: "Relax in paradise" },
  { name: "Island Auto", message: "Drive with confidence" },
  { name: "Curaçao Energy", message: "Powering the island" },
  { name: "Island Telecom", message: "Stay connected" },
  { name: "Caribbean Motors", message: "Your journey starts here" },
  { name: "Ocean Fresh Foods 2", message: "Fresh every day" },
  { name: "Royal Insurance 2", message: "We’ve got you covered" }
];

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

  const app = document.getElementById("appWrapper");
  if (app) app.style.display = "block";
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
