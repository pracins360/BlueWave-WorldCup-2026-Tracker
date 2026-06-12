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

  const wave = parseInt(data["WAVE %"]) || 0;
  document.getElementById("waveValue").textContent = wave + "%";
  document.getElementById("waveFill").style.width = wave + "%";

  document.getElementById("countryAnalysis").textContent = data.Analysis;

  loadLoyalty();
  loadResults();
  loadCalendar();
  loadBracket();
  loadFacts();
}


/* ============================================
   LOAD LOYALTY MATCH
============================================ */
async function loadLoyalty() {
  const res = await fetch(`${API_URL}?action=all`);
  const data = await res.json();
  if (!data || !data.loyalty) return;

  const match = data.loyalty.find(m => m.Active === true || m.Active === "TRUE");
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
async function loadSponsors() {
  const res = await fetch(`${API_URL}?action=sponsors`);
  const sponsors = await res.json();

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
  const active = sponsors.find(s => s.ActiveChallenge === true || s.ActiveChallenge === "TRUE");
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
async function loadResults() {
  const res = await fetch(`${API_URL}?action=matches`);
  const data = await res.json();
  document.getElementById("resultsContent").textContent = JSON.stringify(data, null, 2);
}

async function loadCalendar() {
  const res = await fetch(`${API_URL}?action=matches`);
  const data = await res.json();
  document.getElementById("calendarContent").textContent = JSON.stringify(data, null, 2);
}

async function loadBracket() {
  const res = await fetch(`${API_URL}?action=bracket`);
  const data = await res.json();
  document.getElementById("bracketContent").textContent = JSON.stringify(data, null, 2);
}

async function loadFacts() {
  const res = await fetch(`${API_URL}?action=facts`);
  const data = await res.json();
  document.getElementById("factsContent").textContent = JSON.stringify(data, null, 2);
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
loadSponsors();

</body>
</html>
