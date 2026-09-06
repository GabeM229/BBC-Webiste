const tickerItems = [
  "BREAKING: Nick Glen Judelsohn confirms tonight’s top story is Nick Glen Judelsohn.",
  "BEAST crew officially confirms existence of journalism department.",
  "BREAKING: Kowie River remains wet despite Shane’s repeated warnings.",
  "MARKETS: Dignity Holdings suspended after catastrophic tour sell-off.",
  "SPORT: Jared confirms rowing is one of several sports currently happening.",
  "DEVELOPING: Brynn launches search for Brynn; no suspects ruled out.",
  "TRAFFIC: Liam reports severe congestion near boat trailer. One flip-flop involved.",
  "GOSSIP: The Rumour Mill has heard something. Sources already regret speaking.",
  "SURF: Oli upgrades tiny boat wake to 'clean overhead potential' pending further exaggeration.",
  "EXCLUSIVE: Kak Chair secures highest-profile interview of the season.",
  "BREAKING: Nick requests 'ANCHOR OF THE CENTURY' lower-third; graphics department complies under protest.",
  "SPORT: Jared unveils power rankings. BEAST ranked first through eighth.",
  "MARKETS: Nick J Media Group surges after anchor buys own shares with imaginary money.",
  "WEATHER: Shane reports atmospheric pressure. Crew reports emotional pressure.",
  "DEVELOPING: Boat packing enters sixth hour after discovery of one unidentified strap.",
  "SURF ALERT: Oli spots foam. Entire surf desk placed on high alert.",
  "TRAFFIC: Liam announces alternate route around rigger congestion; nobody listens.",
  "GOSSIP: Gabriel says the paddock is talking. The paddock denies this.",
  "BREAKING: BBC budget redirected to Nick’s entrance music and unnecessary desk lighting.",
  "SPORT: Replay confirms every BEAST stroke looked faster in Jared’s commentary."
]

const articles = {
  nick: {
    tag: "BBC NEWS • SUPREME ANCHOR DESK",
    title: "Nick Glen Judelsohn assumes command of all known journalism",
    dek: "The BBC anchor describes himself as a broadcaster, statesman, thought leader, cultural institution and 'the man Kowie River has been waiting for'.",
    body: `
      <p>Nick Glen Judelsohn enters Universities Boat Race not merely as a news anchor, but as what his own press release calls “the defining media presence of his generation.” The press release was written by Nick.</p>
      <p>His contract allegedly requires two cameras minimum, dramatic entrance music, a chair positioned three centimetres higher than every correspondent’s, and a lower-third reading <strong>NICK GLEN JUDELSOHN — GLOBAL CHIEF ANCHOR & NATIONAL TREASURE</strong>.</p>
      <p>Nick has repeatedly reminded staff that he does not “read the news”; the news occurs in his presence. When correspondents finish a report, he plans to stare silently into camera for three seconds before saying, “Extraordinary journalism. Back to me.”</p>
      <p>Management attempted to impose a 40% limit on Nick’s screen time. Nick responded by interviewing management live.</p>`
  },
  shane: {
    tag: "BBC WEATHER",
    title: "Shane issues historic Kowie forecast: water likely, wind possible, vibes unstable",
    dek: "The BBC meteorology department has invested heavily in pointing at things and saying 'that looks rough'.",
    body: `
      <p>Shane Luke Mearns has been deployed as chief weather correspondent, providing live updates on conditions that everybody standing outside can already see.</p>
      <p>Forecast models currently show a strong chance of headwind whenever BEAST is racing and a suspicious tailwind for literally everyone else.</p>
      <p>Viewers are advised to prepare for scattered spray, isolated sunburn and a 100% chance of someone blaming conditions.</p>`
  },
  byron: {
    tag: "BBC BUSINESS",
    title: "Byron opens BEAST Exchange as confidence reaches record high and cash reaches record low",
    dek: "Analysts remain bullish on morale, bearish on sleep and deeply concerned about the snack economy.",
    body: `
      <p>Byron Alexander Sikiotis will report live from the financial district, currently believed to be somewhere between the accommodation and the nearest shop.</p>
      <p>Key indicators include the BEAST Confidence Index, Boat Packing Futures, Sus Records and Dignity Holdings, which has now lost almost its entire market capitalisation.</p>
      <p>Investors are reminded that past performance is no guarantee of future rowing performance, especially after a late night.</p>`
  },
  jared: {
    tag: "BBC SPORT",
    title: "Jared unveils revolutionary sports coverage with occasional mention of rowing",
    dek: "BBC Sport has promised comprehensive analysis, dramatic replays and at least one opinion delivered far too confidently.",
    body: `
      <p>Jared Kyle Kabo Armstrong takes charge of the sports desk with a mandate to explain racing, rival crews and why every result was somehow part of the plan.</p>
      <p>Pre-race analysis will focus on boat speed, lane conditions, crew psychology and whichever statistic sounds most impressive on camera.</p>
      <p>Post-race analysis will be adjusted retroactively to prove the pre-race analysis was correct.</p><p>Additional programming includes unsolicited power rankings, stroke-by-stroke tactical telestration and a recurring feature titled <em>Why That Was Actually Massive</em>, in which routine sporting events are treated as continental emergencies.</p>`
  },
  brynn: {
    tag: "BBC INVESTIGATES",
    title: "Urgent search launched for missing-person reporter Brynn, led by missing-person reporter Brynn",
    dek: "Authorities say the investigation is complicated by the lead investigator also being the subject of the investigation.",
    body: `
      <p>Brynn Thomas Rawlins' live reports will follow the developing disappearance of Brynn, last seen moments before being asked to appear on camera.</p>
      <p>Witnesses describe the missing man as “probably nearby.” Search teams are focusing on bedrooms, bathrooms, the trailer and any location with plausible deniability.</p>
      <p>Anyone with information is asked to contact BBC, preferably before the next segment.</p>`
  },
  oli: {
    tag: "BBC SURF",
    title: "Oli sent to cover surf at rowing event in landmark victory for editorial confusion",
    dek: "There may not be surf. That has not stopped the surf desk.",
    body: `
      <p>Oliver Frank Eckly will deliver minute-by-minute surf coverage from the Kowie, assessing swell, wave quality and whether any of this information has relevance to rowing.</p>
      <p>The network is reportedly prepared to send him increasingly far from the actual race until surf is located.</p>
      <p>Producers insist this is journalism and have declined further questions.</p><p>Oli’s official scale runs from “basically flat” to “absolute cooking.” Any ripple generated by a passing launch may be upgraded to swell if the camera angle is sufficiently deceptive.</p><p>Expect reports on chop period, wake shape, imaginary barrel potential, river-bank beach breaks and whether the Kowie can technically be called glassy for at least six consecutive seconds.</p>`
  },
  liam: {
    tag: "BBC TRAFFIC",
    title: "Liam warns of severe congestion between boat racks and breakfast",
    dek: "Commuters are urged to allow an additional three to five minutes and avoid the guy carrying two riggers sideways.",
    body: `
      <p>Liam Donald Gaunt heads BBC Traffic, monitoring critical transport corridors including the trailer, launch area, bathrooms and the path to food.</p>
      <p>Early reports indicate delays caused by boat packing, missing kit and eight people simultaneously asking where the same item is.</p>
      <p>An alternate route has been proposed. Nobody will use it.</p>`
  },
  gabriel: {
    tag: "BBC ENTERTAINMENT",
    title: "The Rumour Mill launches with one correspondent, unlimited allegations and a dangerous relationship with the phrase “apparently”",
    dek: "Gabriel Luke Soares Moustakis, operating under the deeply unnecessary on-air title “The Rumour Mill,” takes viewers inside the stories other desks are too responsible to touch.",
    body: `
      <p>The Rumour Mill will cover suspicious behaviour, tour lore, wardrobe crimes, unexplained disappearances and statements beginning with “apparently...”</p>
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
  "URGENT: Local man says ‘one more rep’ — witnesses confirm this was false.",
  "ANCHOR ALERT: Nick Glen Judelsohn interrupts own introduction to introduce himself again.",
  "MARKETS: Racing sock futures surge after formalwear announcement.",
  "WEATHER: Shane confirms outside remains outdoors.",
  "SPORT: Jared describes race plan using enough confidence to make it legally binding.",
  "SPORT: BEAST rises to No.1 in newly-created Global Boats That Jared Rates Index.",
  "INVESTIGATION: Brynn spotted interviewing himself about own disappearance.",
  "TRAFFIC: Rigger causes multi-person pile-up in narrow corridor.",
  "GOSSIP: The Rumour Mill confirms its sources are close to the crew because they are literally the crew.",
  "SURF: Oli calls 9-second boat wake ‘a sneaky little runner’ and begins full analysis.",
  "SURF: Kowie declared 2% more glassy after someone stops walking near the bank.",
  "CULTURE: Mohawk proposal advances to final committee stage after zero committee meetings.",
  "BREAKING: Fish and piggy bank enter dead heat in BBC mascot polling.",
  "MARKETS: Common Sense ETF delisted due to sustained lack of underlying assets.",
  "DEVELOPING: Nick’s opening monologue now longer than scheduled race coverage.",
  "EXCLUSIVE: BBC acquires new desk after Nick says existing desk lacks ‘presidential energy’.",
  "SPORT: Jared pauses analysis to draw three arrows on screen and call it ‘the key moment’.",
  "WEATHER: Meat-based forecasting model produces surprisingly confident outlook.",
  "BREAKING: Crew confirms ‘midday-ish’ remains official timekeeping standard."
]

const toast = document.getElementById("toast");
let toastTimer;
document.getElementById("randomHeadline").addEventListener("click", () => {
  clearTimeout(toastTimer);
  toast.textContent = randomHeadlines[Math.floor(Math.random() * randomHeadlines.length)];
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 4200);
});


// Pseudo-live tour video: upload/replace latest-live.mp4 in the repo root.
const tourVideo = document.getElementById("tourVideo");
const videoOffAir = document.getElementById("videoOffAir");
const videoStatus = document.getElementById("videoStatus");

if (tourVideo && videoOffAir) {
  const showVideo = () => {
    videoOffAir.classList.add("hidden");
    if (videoStatus) videoStatus.textContent = "LATEST DISPATCH";
  };
  const showOffAir = () => {
    videoOffAir.classList.remove("hidden");
    if (videoStatus) videoStatus.textContent = "OFF AIR";
  };

  tourVideo.addEventListener("loadedmetadata", showVideo);
  tourVideo.addEventListener("canplay", showVideo);
  tourVideo.addEventListener("error", showOffAir);

  // If the MP4 is missing, the browser may report the source error asynchronously.
  setTimeout(() => {
    if (tourVideo.readyState === 0) showOffAir();
  }, 1500);
}
