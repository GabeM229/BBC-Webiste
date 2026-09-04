const tickerItems = [
  "BEAST crew officially confirms existence of journalism department.",
  "BREAKING: Nick J requests wider camera lens to accommodate growing public importance.",
  "LIVE: Kowie River remains wet despite Shane's repeated warnings.",
  "MARKETS: Dignity Holdings suspended after catastrophic tour sell-off.",
  "SPORT: Jared confirms rowing is one of several sports currently happening.",
  "DEVELOPING: Brynn launches search for Brynn; no suspects ruled out.",
  "TRAFFIC: Liam reports severe congestion near boat trailer. One flip-flop involved.",
  "GOSSIP: Gaby has heard something. Sources already regret speaking.",
  "SURF: Oli awards three stars to wave created by passing safety boat.",
  "EXCLUSIVE: Kak Chair secures highest-profile interview of the season.",
  "BREAKING: Collective brain cell expected to arrive on a later bus.",
  "FINANCE: Racing Sock Commodities outperform trousers for seventh session.",
  "WEATHER: Headwind denies allegations of deliberate anti-BEAST campaign.",
  "CULTURE: Hairspray reserves fall as mohawk enters final construction phase.",
  "ANCHOR DESK: Nick describes own introduction as a landmark in African broadcasting.",
  "SPORT: Jared's 47-phase plan leaked; phases two through 47 currently say 'TBC'.",
  "SURF: River officially classified as emotionally overhead by Oli.",
  "TRAVEL: Liam opens contraflow system between breakfast and second breakfast.",
  "MUSIC: Sus Records declares aux cable an independent sovereign territory.",
  "NEWSROOM: Producers confirm every fact was checked against the group chat."
];

const randomHeadlines = [
  "BREAKING: Nick J nominated for award invented by Nick J twelve minutes ago.",
  "BEAST replaces warm-up with extremely convincing discussion about warming up.",
  "Kowie River asks crew to keep the noise down during Jared's tactical briefing.",
  "Oli spots clean two-centimetre set; emergency surf protocol activated.",
  "Byron downgrades Sleep Futures from 'unlikely' to 'purely theoretical'.",
  "Brynn briefly found, disappears again during follow-up interview.",
  "Gaby confirms explosive scoop after overhearing half a sentence near the trailer.",
  "Shane points at cloud; newsroom immediately enters weather lockdown.",
  "Liam reports bumper-to-bumper foot traffic beside unattended kit bag.",
  "Kak Chair audience numbers overtake several respected current-affairs programmes.",
  "Racing socks cleared of performance-enhancing colour allegations.",
  "Collective brain cell seen warming up alone; contract talks continue.",
  "Fish and Piggy Bank demand televised mascot debate moderated by Nick.",
  "Trailer strap enters negotiations after refusing third proposed packing plan.",
  "Sus Records issues apology for nothing, announces louder follow-up single.",
  "Jared predicts decisive result for whichever crew crosses the finish line first.",
  "BBC correction desk accidentally corrects a fact; internal review launched.",
  "Nick's good side located; second camera crew sent to document discovery."
];

const articles = {
  nick: {
    tag: "BBC NEWS • SUPREME ANCHOR DESK",
    title: "Nick J appointed face of BBC after an exhaustive selection process chaired by Nick J",
    dek: "The network's new chief anchor arrives with a serious face, a jacket, a list of lighting requirements and the quiet belief that news itself is his supporting act.",
    body: `
      <p>Nick J will lead BEAST Broadcasting Corporation's coverage from Universities Boat Race, anchoring a newsroom whose legal department is currently just a group chat with notifications muted.</p>
      <p>His official title has expanded to Chief Anchor, Executive Face, Senior Voice, Head of Dramatic Pauses and Interim Director of Looking Slightly Off-Camera. Producers have been instructed to announce him before every bulletin and, where time permits, after it.</p>
      <p>Nick has requested a private dressing room, a personal teleprompter operator, a wind machine calibrated to “statesmanlike” and a thirty-second silence before he speaks so the audience can prepare emotionally. He denies being difficult, explaining that standards only look like ego to people without standards.</p>
      <p>Asked whether Boat Race was bigger than him, Nick paused for eleven seconds, looked into camera two and said, “Let's not force the event into an unfair comparison.”</p>`
  },
  shane: {
    tag: "BBC WEATHER",
    title: "Shane issues historic Kowie forecast: water likely, wind possible, vibes unstable",
    dek: "The BBC meteorology department has invested heavily in pointing at things and saying 'that looks rough'.",
    body: `
      <p>Shane has been deployed as chief weather correspondent, providing live updates on conditions that everybody standing outside can already see.</p>
      <p>Forecast models show a strong chance of headwind whenever BEAST is racing and a suspicious tailwind for literally everyone else. The model is a napkin with three arrows and the word “unfair” underlined twice.</p>
      <p>Viewers are advised to prepare for scattered spray, isolated sunburn, aggressive humidity and a 100% chance of somebody blaming conditions.</p>`
  },
  byron: {
    tag: "BBC BUSINESS",
    title: "Byron opens BEAST Exchange as confidence reaches record high and cash reaches record low",
    dek: "Analysts remain bullish on morale, bearish on sleep and deeply concerned about the snack economy.",
    body: `
      <p>Byron will report live from the financial district, currently believed to be somewhere between the accommodation and the nearest shop.</p>
      <p>Key indicators include the BEAST Confidence Index, Boat Packing Futures, Sus Records, Racing Sock Commodities and Dignity Holdings, which has now lost almost its entire market capitalisation.</p>
      <p>Trading in the Collective Brain Cell was halted after one investor attempted to own all of it. Investors are reminded that past performance is no guarantee of future rowing performance, especially after a late night.</p>`
  },
  jared: {
    tag: "BBC SPORT",
    title: "Jared unveils revolutionary sports coverage with occasional mention of rowing",
    dek: "BBC Sport has promised comprehensive analysis, dramatic replays and at least one opinion delivered far too confidently.",
    body: `
      <p>Jared takes charge of the sports desk with a mandate to explain racing, rival crews and why every result was somehow part of the plan.</p>
      <p>Pre-race analysis will focus on boat speed, lane conditions, crew psychology, sock height and whichever statistic sounds most impressive on camera. His proprietary model combines instinct, volume and a bar chart labelled “momentum.”</p>
      <p>Post-race analysis will be adjusted retroactively to prove the pre-race analysis was correct. Jared calls this “adaptive expertise.”</p>`
  },
  brynn: {
    tag: "BBC INVESTIGATES",
    title: "Urgent search launched for missing-person reporter Brynn, led by missing-person reporter Brynn",
    dek: "Authorities say the investigation is complicated by the lead investigator also being the subject of the investigation.",
    body: `
      <p>Brynn's live reports will follow the developing disappearance of Brynn, last seen moments before being asked to appear on camera.</p>
      <p>Witnesses describe the missing man as “probably nearby.” Search teams are focusing on bedrooms, bathrooms, the trailer and any location with plausible deniability.</p>
      <p>Brynn later joined the search, studied his own photograph and confirmed the suspect looked familiar. Anyone with information is asked to contact BBC, preferably before the next segment.</p>`
  },
  oli: {
    tag: "BBC SURF",
    title: "Oli sent to cover surf at rowing event in landmark victory for editorial confusion",
    dek: "There may not be surf. That has not stopped the surf desk, the buoy, the wax report or Oli's commitment to the next set.",
    body: `
      <p>Oli will deliver minute-by-minute surf coverage from the Kowie, assessing swell, wave quality, wind direction and whether any of this information has relevance to rowing.</p>
      <p>Current conditions are ankle-high, slightly brown and spiritually overhead. Oli has identified the day's premium break behind a passing safety boat, where a clean two-second shoulder briefly appeared before becoming boat wash again.</p>
      <p>The network is prepared to send him increasingly far from the actual race until surf is located. Oli remains stoked and has asked the rowing programme to consider fins.</p>`
  },
  liam: {
    tag: "BBC TRAFFIC",
    title: "Liam warns of severe congestion between boat racks and breakfast",
    dek: "Commuters are urged to allow an additional three to five minutes and avoid the guy carrying two riggers sideways.",
    body: `
      <p>Liam heads BBC Traffic, monitoring critical transport corridors including the trailer, launch area, bathrooms and the path to food.</p>
      <p>Early reports indicate delays caused by boat packing, missing kit and eight people simultaneously asking where the same item is. A stationary flip-flop is causing a two-person tailback near the door.</p>
      <p>An alternate route has been proposed. Nobody will use it.</p>`
  },
  gaby: {
    tag: "BBC ENTERTAINMENT",
    title: "Gossip Gals with Gaby launches with one host, zero gals and unlimited allegations",
    dek: "Gabriel “Gaby” takes viewers inside the stories other desks are too responsible to touch.",
    body: `
      <p>Gaby's gossip desk will cover suspicious behaviour, tour lore, wardrobe crimes, unexplained disappearances and statements beginning with “apparently...”</p>
      <p>Every scoop will be delivered with maximum conviction and a minimum acceptable relationship with evidence. An anonymous source described the source as “someone standing right there.”</p>
      <p>Legal has requested that the phrase “allegedly” be added to the autocue. Gaby has requested a longer autocue.</p>`
  },
  tour: {
    tag: "BBC SPECIAL REPORT",
    title: "BEAST newsroom prepares for full-scale deployment to Universities Boat Race",
    dek: "The Kowie River is bracing for rowing, reporting and a level of production value nobody requested.",
    body: `
      <p>The BEAST crew's tour coverage begins with an aggressively early Friday arrival, followed by boat packing on Saturday and a Sunday photo operation scheduled for approximately “midday-ish.”</p>
      <p>Correspondents will appear in formal outfits with suit jackets, racing socks, fancy shoes, trisuits and suspicious eyewear. An 80s hair contingency plan includes mohawks, headbands and enough hairspray to develop its own weather system.</p>
      <p>The production slate also includes The Beats Crew / Sus Records, mascot deliberations between a fish and piggy bank, and a coin-flip mechanism for matters deemed too important for rational decision-making.</p>`
  },
  breakfast: {
    tag: "DEVELOPING • BREAKFAST INQUIRY",
    title: "Emergency inquiry launched after crew breakfast lasts longer than race",
    dek: "A multi-agency task force is examining toast volume, egg strategy and an unexplained fourth bowl of cereal.",
    body: `
      <p>The inquiry began after breakfast entered its forty-seventh minute with no visible sign of a final spoonful. Officials say the meal displayed strong early pace but lost rhythm during a second round of toast.</p>
      <p>Jared has defended the timing as essential fuelling. Byron says cereal futures rose sharply during the sitting. Liam has closed one side of the kitchen to through traffic.</p>
      <p>Nick J arrived late, declared the room ready for his entrance and requested that his coffee be described as “the nation's coffee.”</p>`
  },
  trailer: {
    tag: "DEVELOPING • LOGISTICS",
    title: "Trailer packing enters sixth hour as ninth expert opinion emerges",
    dek: "One strap, eight consultants and a whiteboard have failed to produce a final answer.",
    body: `
      <p>Witnesses say the operation began efficiently before somebody asked whether the boat should face the other way. A working group was formed, dissolved and reformed with identical membership.</p>
      <p>Liam has introduced temporary traffic lights. Jared is reviewing footage. Shane warns the strap may experience crosswinds. The trailer itself has declined to comment.</p>`
  },
  headwind: {
    tag: "DEVELOPING • WEATHER",
    title: "Headwind accused of targeted campaign against BEAST",
    dek: "The atmospheric disturbance denies bias and says it opposes all crews equally.",
    body: `
      <p>Shane presented three arrows, two screenshots and a leaf moving in what he called “a deeply suspicious direction.” He says conditions changed the instant BEAST approached the start.</p>
      <p>The headwind rejected the allegations through a loud gust that removed one page of Shane's notes. An independent crosswind has offered to mediate.</p>`
  },
  mascot: {
    tag: "DEVELOPING • MASCOT ELECTION",
    title: "Fish and Piggy Bank both declare victory in mascot election",
    dek: "The newsroom faces a constitutional crisis after neither candidate agreed to count the same votes.",
    body: `
      <p>Fish campaigned on river experience and natural hydrodynamics. Piggy Bank promised fiscal discipline, stronger snack reserves and a stable currency.</p>
      <p>Gaby reports both campaigns have claimed Nick's endorsement. Nick clarified that he endorses whichever mascot photographs better beside him. A ceremonial coin flip is expected to resolve democracy shortly.</p>`
  },
  hair: {
    tag: "DEVELOPING • STYLE DESK",
    title: "80s hair plan upgraded from proposal to national emergency",
    dek: "Hairspray reserves are critically low and one mohawk has achieved independent weather status.",
    body: `
      <p>The style desk says preparations remain on schedule despite a shortage of headbands and a sharp increase in aerodynamic concern.</p>
      <p>Engineers are testing whether hair volume creates measurable drag. Nick has dismissed the study, saying his silhouette is a public service and therefore exempt from physics.</p>`
  },
  aux: {
    tag: "DEVELOPING • SUS RECORDS",
    title: "Sus Records seizes control of aux and issues first royal decree",
    dek: "The Beats Crew has banned skips, quiet songs and every request to play something normal.",
    body: `
      <p>The takeover occurred without resistance when the cable was briefly left unattended. Sus Records immediately declared a permanent queue and installed a three-track minimum before appeals may be heard.</p>
      <p>Volume has been set according to the principle that conversation indicates insufficient volume. Noise inspectors have been asked to return with bigger speakers.</p>`
  },
  glizzy: {
    tag: "DEVELOPING • RACE CONTROL",
    title: "Lane selection settled by ceremonial glizzy swing",
    dek: "Officials insist the process is internationally recognised in at least one group chat.",
    body: `
      <p>The procedure was adopted after the coin flip committee reached a deadlock over which side of the coin should represent which lane.</p>
      <p>Jared called the result tactically perfect. Shane called it meteorologically brave. Nick called it an excellent opportunity for a reaction shot.</p>`
  },
  hydration: {
    tag: "DEVELOPING • SCIENCE",
    title: "Researchers discover water bottle untouched since Pretoria",
    dek: "Hydration experts have described the finding as 'not ideal' and 'extremely on brand'.",
    body: `
      <p>The sealed bottle was located beside three empty coffee cups and a sports drink chosen entirely for colour. Carbon dating places its last sip shortly before departure.</p>
      <p>Scientists recommend drinking water. The newsroom will air both sides of this controversial proposal after Byron completes a market-impact assessment.</p>`
  },
  "race-plan": {
    tag: "BBC SPORT • TACTICS",
    title: "Jared unveils 47-phase race plan beginning with 'go fast'",
    dek: "The remaining 46 phases are classified, under development or written in handwriting nobody can read.",
    body: `
      <p>Phase one instructs the crew to go fast. Phase two says “continue.” Phase three contains an arrow. Phases four to forty-six are protected by competitive secrecy and a coffee stain.</p>
      <p>Phase forty-seven, marked “celebrate appropriately,” has received the most detailed planning. Jared says the system is flexible enough to explain any outcome.</p>`
  },
  socks: {
    tag: "BBC SPORT • POWER RANKINGS",
    title: "Racing socks climb to number one after dominant warm-up display",
    dek: "Analysts praised their length, colour and complete refusal to contribute measurable watts.",
    body: `
      <p>The socks moved ahead of headbands, fancy shoes and questionable glasses after a strong visual performance in training.</p>
      <p>Jared awarded a 9.4 style coefficient but warned that expectations are now high. Byron has opened a sock commodity desk. Nick has requested a pair in anchor black.</p>`
  },
  replay: {
    tag: "BBC SPORT • VIDEO REVIEW",
    title: "Footage confirms boat looked quick for exact second camera was rolling",
    dek: "The clip has been looped 63 times and submitted as the official record of the entire session.",
    body: `
      <p>Jared reviewed the frame from four angles, only one of which exists. He concluded that boat speed was “visually elite” and any unseen seconds should be assumed equally fast.</p>
      <p>Opposition analysts requested more footage. The BBC declined on grounds that further evidence might reduce certainty.</p>`
  },
  "brain-cell": {
    tag: "BBC SPORT • TRANSFER CENTRE",
    title: "Collective brain cell signs one-race extension with BEAST",
    dek: "The deal includes performance bonuses and a release clause triggered by the first late night.",
    body: `
      <p>Negotiations continued past midnight as all eight crew members claimed partial image rights. The brain cell will rotate between departments but retains the right to sit out trailer packing.</p>
      <p>Byron called the contract financially reckless. Jared called it the signing of the season. Brynn was unavailable for comment and may be using it.</p>`
  }
};

const tickerText = document.getElementById("tickerText");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let tickerIndex = 0;

setInterval(() => {
  tickerIndex = (tickerIndex + 1) % tickerItems.length;
  if (!reduceMotion) {
    tickerText.animate(
      [{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 280 }
    );
  }
  tickerText.textContent = tickerItems[tickerIndex];
}, 4200);

const clock = document.getElementById("liveClock");
const updateClock = () => {
  clock.textContent = new Intl.DateTimeFormat("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
};
updateClock();
setInterval(updateClock, 1000);

const modal = document.getElementById("articleModal");
const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalDek = document.getElementById("modalDek");
const modalBody = document.getElementById("modalBody");
let lastArticleButton = null;

document.querySelectorAll(".article-open").forEach((button) => {
  button.addEventListener("click", () => {
    const item = articles[button.dataset.article];
    if (!item) return;
    lastArticleButton = button;
    modalTag.textContent = item.tag;
    modalTitle.textContent = item.title;
    modalDek.textContent = item.dek;
    modalBody.innerHTML = item.body;
    modal.showModal();
  });
});

document.getElementById("closeModal").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});
modal.addEventListener("close", () => lastArticleButton?.focus());

const menuButton = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
  });
});

const toast = document.getElementById("toast");
let toastTimer;

document.getElementById("randomHeadline").addEventListener("click", () => {
  const headline = randomHeadlines[Math.floor(Math.random() * randomHeadlines.length)];
  toast.textContent = headline;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4600);
});
