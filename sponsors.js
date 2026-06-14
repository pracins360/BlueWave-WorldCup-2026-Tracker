// ========== SPONSOR ROTATION (Shared across all apps) ==========
function getRotationIndex(total) {
    let idx = parseInt(localStorage.getItem("bwRot") || "0", 10);
    idx = (idx + 1) % total;
    localStorage.setItem("bwRot", idx);
    return idx;
}

function openLink(url) {
    if (url && url !== "#") window.open(url, "_blank");
}

// ========== PREMIUM SPONSORS (3 groups of 4) ==========
const PREMIUM_GROUPS = [
    [
        { name: "AQUALECTRA", logo: "https://placehold.co/300x100/0057b8/white?text=AQUALECTRA", link: "https://wa.me/59995120536" },
        { name: "CAVALIER", logo: "https://placehold.co/300x100/ffcd3c/002b54?text=CAVALIER", link: "https://wa.me/59995120536" },
        { name: "hbn Law", logo: "https://placehold.co/300x100/003f6e/white?text=hbn+Law", link: "https://wa.me/59995120536" },
        { name: "MANGROVE BEACH", logo: "https://placehold.co/300x100/1f5e3a/white?text=MANGROVE", link: "https://wa.me/59995120536" }
    ],
    [
        { name: "BDO", logo: "https://placehold.co/300x100/1e4a76/white?text=BDO", link: "https://wa.me/59995120536" },
        { name: "KLM", logo: "https://placehold.co/300x100/0a3366/white?text=KLM", link: "https://wa.me/59995120536" },
        { name: "Sunset Resort", logo: "https://placehold.co/300x100/e68a2e/white?text=Sunset", link: "https://wa.me/59995120536" },
        { name: "Island Auto", logo: "https://placehold.co/300x100/2c5f8a/white?text=Island+Auto", link: "https://wa.me/59995120536" }
    ],
    [
        { name: "Royal Insure", logo: "https://placehold.co/300x100/8b5a2b/white?text=Royal+Insure", link: "https://wa.me/59995120536" },
        { name: "Ocean Fresh", logo: "https://placehold.co/300x100/2c7a4a/white?text=Ocean+Fresh", link: "https://wa.me/59995120536" },
        { name: "Tropical Café", logo: "https://placehold.co/300x100/c97e2a/white?text=Tropical+Cafe", link: "https://wa.me/59995120536" },
        { name: "BlueWave Bank", logo: "https://placehold.co/300x100/164b7a/white?text=BlueWave", link: "https://wa.me/59995120536" }
    ]
];

// ========== GOLD SPONSORS (4 groups of 8) ==========
const GOLD_GROUPS = Array(4).fill().map((_, idx) => 
    Array(8).fill().map((__, i) => ({ 
        name: `Gold Sponsor ${idx * 8 + i + 1}`, 
        logo: `https://placehold.co/200x80/2c5e8c/white?text=Gold+${idx * 8 + i + 1}`, 
        link: "https://wa.me/59995120536" 
    }))
);

// ========== SILVER SHOUTOUTS (15 base messages + 4 groups of 10) ==========
const BASE_SHOUTS = [
    "💙 One love, Curaçao! 🇨🇼",
    "⚽ First World Cup in Curaçao!",
    "🌊 Blue Wave forever!",
    "🇨🇼 Proud to be Curaçaoan!",
    "🎉 Make history!",
    "💪 Support the Wave!",
    "🏆 2026 – Our year!",
    "⭐ Rise of the Blue Wave!",
    "🔥 Curaçao on fire!",
    "🤝 Together we win!",
    "🌈 Unity is strength!",
    "⚡ Feel the energy!",
    "🎯 Go for glory!",
    "💙 Blue Wave nation!",
    "🌊 Ride the Wave!"
];

const SILVER_GROUPS = [
    Array(10).fill().map(() => ({ name: "Café Tropical", message: "Best coffee on the island!" })),
    Array(10).fill().map(() => ({ name: "Aqua Rentals", message: "Explore Curaçao!" })),
    Array(10).fill().map(() => ({ name: "Sunrise Tours", message: "Discover paradise!" })),
    Array(10).fill().map(() => ({ name: "Fresh Market", message: "Local freshness daily!" }))
];

// ========== RENDER FUNCTIONS (shared) ==========
function renderPremium(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const groupIdx = getRotationIndex(3);
    const group = PREMIUM_GROUPS[groupIdx];
    container.innerHTML = group.map(ad => `
        <div class="premium-ad" onclick="openLink('${ad.link}')">
            <img src="${ad.logo}" alt="${ad.name}">
            <div class="ad-name">${ad.name}</div>
        </div>
    `).join('');
}

function renderGold(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const groupIdx = getRotationIndex(4);
    const group = GOLD_GROUPS[groupIdx];
    container.innerHTML = group.map(g => `
        <div class="gold-item" onclick="openLink('${g.link}')">
            <img src="${g.logo}" alt="${g.name}">
            <div>${g.name}</div>
        </div>
    `).join('');
}

function renderSilver(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const groupIdx = getRotationIndex(4);
    const extra = SILVER_GROUPS[groupIdx].map(s => `${s.name}: ${s.message}`);
    const allMessages = [...BASE_SHOUTS, ...extra];
    const doubled = [...allMessages, ...allMessages];
    container.innerHTML = doubled.map(msg => `<div class="silver-item">⚽ ${msg}</div>`).join('');
}