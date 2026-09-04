const tickerItems = [
  "BEAST crew officially confirms existence of journalism department.",
  "BREAKING: Kowie River remains wet despite Shane's repeated warnings.",
  "MARKETS: Dignity Holdings suspended after catastrophic tour sell-off.",
  "SPORT: Jared confirms rowing is one of several sports currently happening.",
  "DEVELOPING: Brynn launches search for Brynn; no suspects ruled out.",
  "TRAFFIC: Liam reports severe congestion near boat trailer. One flip-flop involved.",
  "GOSSIP: Gaby has heard something. Sources already regret speaking.",
  "EXCLUSIVE: Kak Chair secures highest-profile interview of the season."
];

const articles = {
  nick: {
    tag: "BBC NEWS • ANCHOR DESK",
    title: "Nick J appointed face of BBC despite newsroom having several objections",
    dek: "Management says Nick possesses the three essential qualities of a news anchor: a serious face, a jacket and the ability to keep talking.",
    body: `
      <p>Nick J will lead BEAST Broadcasting Corporation's coverage from Universities Boat Race, anchoring a newsroom whose legal department is currently just a group chat.</p>
      <p>His responsibilities include introducing correspondents, pretending breaking news is genuinely breaking, and maintaining eye contact with the camera while chaos unfolds two metres away.</p>
      <p>BBC insiders describe him as “calm under pressure,” although those same insiders have not yet seen the 05:00 call time.</p>`
  },
  shane: {
    tag: "BBC WEATHER",
    title: "Shane issues historic Kowie forecast: water likely, wind possible, vibes unstable",
    dek: "The BBC meteorology department has invested heavily in pointing at things and saying 'that looks rough'.",
    body: `
      <p>Shane has been deployed as chief weather correspondent, providing live updates on conditions that everybody standing outside can already see.</p>
      <p>Forecast models currently show a strong chance of headwind whenever BEAST is racing and a suspicious tailwind for literally everyone else.</p>
      <p>Viewers are advised to prepare for scattered spray, isolated sunburn and a 100% chance of someone blaming conditions.</p>`
  },
  byron: {
    tag: "BBC BUSINESS",
    title: "Byron opens BEAST Exchange as confidence reaches record high and cash reaches record low",
    dek: "Analysts remain bullish on morale, bearish on sleep and deeply concerned about the snack economy.",
    body: `
      <p>Byron will report live from the financial district, currently believed to be somewhere between the accommodation and the nearest shop.</p>
      <p>Key indicators include the BEAST Confidence Index, Boat Packing Futures, Sus Records and Dignity Holdings, which has now lost almost its entire market capitalisation.</p>
      <p>Investors are reminded that past performance is no guarantee of future rowing performance, especially after a late night.</p>`
  },
  jared: {
    tag: "BBC SPORT",
    title: "Jared unveils revolutionary sports coverage with occasional mention of rowing",
    dek: "BBC Sport has promised comprehensive analysis, dramatic replays and at least one opinion delivered far too confidently.",
    body: `
      <p>Jared takes charge of the sports desk with a mandate to explain racing, rival crews and why every result was somehow part of the plan.</p>
      <p>Pre-race analysis will focus on boat speed, lane conditions, crew psychology and whichever statistic sounds most impressive on camera.</p>
      <p>Post-race analysis will be adjusted retroactively to prove the pre-race analysis was correct.</p>`
  },
  brynn: {
    tag: "BBC INVESTIGATES",
    title: "Urgent search launched for missing-person reporter Brynn, led by missing-person reporter Brynn",
    dek: "Authorities say the investigation is complicated by the lead investigator also being the subject of the investigation.",
    body: `
      <p>Brynn's live reports will follow the developing disappearance of Brynn, last seen moments before being asked to appear on camera.</p>
      <p>Witnesses describe the missing man as “probably nearby.” Search teams are focusing on bedrooms, bathrooms, the trailer and any location with plausible deniability.</p>
      <p>Anyone with information is asked to contact BBC, preferably before the next segment.</p>`
  },
  oli: {
    tag: "BBC SURF",
    title: "Oli sent to cover surf at rowing event in landmark victory for editorial confusion",
    dek: "There may not be surf. That has not stopped the surf desk.",
    body: `
      <p>Oli will deliver minute-by-minute surf coverage from the Kowie, assessing swell, wave quality and whether any of this information has relevance to rowing.</p>
      <p>The network is reportedly prepared to send him increasingly far from the actual race until surf is located.</p>
      <p>Producers insist this is journalism and have declined further questions.</p>`
  },
  liam: {
    tag: "BBC TRAFFIC",
    title: "Liam warns of severe congestion between boat racks and breakfast",
    dek: "Commuters are urged to allow an additional three to five minutes and avoid the guy carrying two riggers sideways.",
    body: `
      <p>Liam heads BBC Traffic, monitoring critical transport corridors including the trailer, launch area, bathrooms and the path to food.</p>
      <p>Early reports indicate delays caused by boat packing, missing kit and eight people simultaneously asking where the same item is.</p>
      <p>An alternate route has been proposed. Nobody will use it.</p>`
  },
  gaby: {
    tag: "BBC ENTERTAINMENT",
    title: "Gossip Gals with Gaby launches with one host, zero gals and unlimited allegations",
    dek: "Gabriel “Gaby” takes viewers inside the stories other desks are too responsible to touch.",
    body: `
      <p>Gaby's gossip desk will cover suspicious behaviour, tour lore, wardrobe crimes, unexplained disappearances and statements beginning with “apparently...”</p>
      <p>Every scoop will be delivered with maximum conviction and a minimum acceptable relationship with evidence.</p>
      <p>Legal has requested that the phrase “allegedly” be added to the autocue.</p>`
  },
  tour: {
    tag: "BBC SPECIAL REPORT",
    title: "BEAST newsroom prepares for full-scale deployment to Universities Boat Race",
    dek: "The Kowie River is bracing for rowing, reporting and a level of production value nobody requested.",
    body: `
      <p>The BEAST crew's tour coverage begins with an aggressively early Friday arrival, followed by boat packing on Saturday and a Sunday photo operation scheduled for approximately “midday-ish.”</p>
      <p>Correspondents will appear in formal outfits with suit jackets, racing socks, fancy shoes, trisuits and suspicious eyewear. An 80s hair contingency plan includes mohawks, headbands and hairspray.</p>
      <p>The production slate also includes The Beats Crew / Sus Records, mascot deliberations between a fish and piggy bank, and a coin-flip mechanism for matters deemed too important for rational decision-making.</p>`
  }
};

const tickerText = document.getElementById("tickerText");
let tickerIndex = 0;
setInterval(() => {
  tickerIndex = (tickerIndex + 1) % tickerItems.length;
  tickerText.animate(
    [{opacity: 0, transform: "translateY(5px)"}, {opacity: 1, transform: "translateY(0)"}],
    {duration: 280}
  );
  tickerText.textContent = tickerItems[tickerIndex];
}, 4200);

const modal = document.getElementById("articleModal");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalDek = document.getElementById("modalDek");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".article-open").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = articles[btn.dataset.article];
    modalTag.textContent = item.tag;
    modalTitle.textContent = item.title;
    modalDek.textContent = item.dek;
    modalBody.innerHTML = item.body;
    modal.showModal();
  });
});

document.getElementById("closeModal").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const randomHeadlines = [
  "BREAKING: Eight-man crew discovers ninth opinion during boat packing.",
  "URGENT: Local man says “one more rep” — witnesses confirm this was false.",
  "MARKETS: Racing sock futures surge after formalwear announcement.",
  "WEATHER: Shane confirms outside remains outdoors.",
  "SPORT: Jared describes race plan using enough confidence to make it legally binding.",
  "INVESTIGATION: Brynn spotted interviewing himself about own disappearance.",
  "TRAFFIC: Rigger causes multi-person pile-up in narrow corridor.",
  "GOSSIP: Gaby confirms sources are close to the crew because they are literally the crew.",
  "CULTURE: Mohawk proposal advances to final committee stage after zero committee meetings.",
  "BREAKING: Fish and piggy bank enter dead heat in BBC mascot polling."
];

const toast = document.getElementById("toast");
let toastTimer;
document.getElementById("randomHeadline").addEventListener("click", () => {
  clearTimeout(toastTimer);
  toast.textContent = randomHeadlines[Math.floor(Math.random() * randomHeadlines.length)];
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4200);
});
