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
  "SPORT: Replay confirms every BEAST stroke looked faster in Jared’s commentary.",
  "RACE WEEK: Men’s B Heads Race scheduled for Thursday 09:00; BBC begins panicking early.",
  "RACE WEEK: Friday finals spreadsheet described by Byron as 'a hostile financial instrument'.",
  "RACE WEEK: Saturday 11:20 marked BEAST WATCH pending qualification and several dramatic graphics.",
  "SCHEDULE: Formal Dinner confirmed. Nick immediately requests keynote slot."
]

const articles = {
  nick: {
    tag: "BBC NEWS • SUPREME ANCHOR DESK",
    title: "Nick Glen Judelsohn assumes command of all known journalism",
    dek: "The BBC anchor describes himself as a broadcaster, statesman, thought leader, cultural institution and 'the man Kowie River has been waiting for'.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BCom in General Broadcasting, Executive Presence & Commercial Self-Promotion</em>.</p><p>Nick Glen Judelsohn enters Universities Boat Race not merely as a news anchor, but as what his own press release calls “the defining media presence of his generation.” The press release was written by Nick.</p>
      <p>His contract allegedly requires two cameras minimum, dramatic entrance music, a chair positioned three centimetres higher than every correspondent’s, and a lower-third reading <strong>NICK GLEN JUDELSOHN — GLOBAL CHIEF ANCHOR & NATIONAL TREASURE</strong>.</p>
      <p>Nick has repeatedly reminded staff that he does not “read the news”; the news occurs in his presence. When correspondents finish a report, he plans to stare silently into camera for three seconds before saying, “Extraordinary journalism. Back to me.”</p>
      <p>Management attempted to impose a 40% limit on Nick’s screen time. Nick responded by interviewing management live.</p>`
  },
  shane: {
    tag: "BBC WEATHER",
    title: "Shane issues historic Kowie forecast: water likely, wind possible, vibes unstable",
    dek: "The BBC meteorology department has invested heavily in pointing at things and saying 'that looks rough'.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BSc in Applied Weather Pointing, River Ecology & Saying “that looks good”</em>.</p><p>Shane Luke Mearns has been deployed as chief weather correspondent, providing live updates on conditions that everybody standing outside can already see.</p>
      <p>Forecast models currently show a strong chance of headwind whenever BEAST is racing and a suspicious tailwind for literally everyone else.</p>
      <p>Viewers are advised to prepare for scattered spray, isolated sunburn and a 100% chance of someone blaming conditions.</p>`
  },
  byron: {
    tag: "BBC BUSINESS",
    title: "Byron opens BEAST Exchange as confidence reaches record high and cash reaches record low",
    dek: "Analysts remain bullish on morale, bearish on sleep and deeply concerned about the snack economy.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BCom in Creative Accounting, Hostile Vibes Takeovers & Explaining Where the Crew’s Money Went</em>.</p><p>Byron Alexander Sikiotis will report live from the financial district, currently believed to be somewhere between the accommodation and the nearest shop.</p>
      <p>Key indicators include the BEAST Confidence Index, Boat Packing Futures, Sus Records and Dignity Holdings, which has now lost almost its entire market capitalisation.</p>
      <p>Investors are reminded that past performance is no guarantee of future rowing performance, especially after a late night.</p>`
  },
  jared: {
    tag: "BBC SPORT",
    title: "Jared unveils revolutionary sports coverage with occasional mention of rowing",
    dek: "BBC Sport has promised comprehensive analysis, dramatic replays and at least one opinion delivered far too confidently.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BAdmin in Matchday Administration, Tactical Hot Takes & Confident Sideline Analysis</em>.</p><p>Jared Kyle Kabo Armstrong takes charge of the sports desk with a mandate to explain racing, rival crews and why every result was somehow part of the plan.</p>
      <p>Pre-race analysis will focus on boat speed, lane conditions, crew psychology and whichever statistic sounds most impressive on camera.</p>
      <p>Post-race analysis will be adjusted retroactively to prove the pre-race analysis was correct.</p><p>Additional programming includes unsolicited power rankings, stroke-by-stroke tactical telestration and a recurring feature titled <em>Why That Was Actually Massive</em>, in which routine sporting events are treated as continental emergencies.</p>`
  },
  brynn: {
    tag: "BBC INVESTIGATES",
    title: "Urgent search launched for missing-person reporter Brynn, led by missing-person reporter Brynn",
    dek: "Authorities say the investigation is complicated by the lead investigator also being the subject of the investigation.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BEng in Mechanical Search Systems, Self-Recovery & Advanced Disappearance Dynamics</em>.</p><p>Brynn Thomas Rawlins' live reports will follow the developing disappearance of Brynn, last seen moments before being asked to appear on camera.</p>
      <p>Witnesses describe the missing man as “probably nearby.” Search teams are focusing on bedrooms, bathrooms, the trailer and any location with plausible deniability.</p>
      <p>Anyone with information is asked to contact BBC, preferably before the next segment.</p>`
  },
  oli: {
    tag: "BBC SURF",
    title: "Oli sent to cover surf at rowing event in landmark victory for editorial confusion",
    dek: "There may not be surf. That has not stopped the surf desk.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BSc in Human Physiology, Wave-Induced Adrenal Response & Tactical Chilling</em>.</p><p>Oliver Frank Eckley will deliver minute-by-minute surf coverage from the Kowie, assessing swell, wave quality and whether any of this information has relevance to rowing.</p>
      <p>The network is reportedly prepared to send him increasingly far from the actual race until surf is located.</p>
      <p>Producers insist this is journalism and have declined further questions.</p><p>Oli’s official scale runs from “basically flat” to “absolute cooking.” Any ripple generated by a passing launch may be upgraded to swell if the camera angle is sufficiently deceptive.</p><p>Expect reports on chop period, wake shape, imaginary barrel potential, river-bank beach breaks and whether the Kowie can technically be called glassy for at least six consecutive seconds.</p>`
  },
  liam: {
    tag: "BBC TRAFFIC",
    title: "Liam warns of severe congestion between boat racks and breakfast",
    dek: "Commuters are urged to allow an additional three to five minutes and avoid the guy carrying two riggers sideways.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BEd in Traffic Control, Queue Discipline & Teaching Eight Men Where to Stand</em>.</p><p>Liam Donald Gaunt heads BBC Traffic, monitoring critical transport corridors including the trailer, launch area, bathrooms and the path to food.</p>
      <p>Early reports indicate delays caused by boat packing, missing kit and eight people simultaneously asking where the same item is.</p>
      <p>An alternate route has been proposed. Nobody will use it.</p>`
  },
  gabriel: {
    tag: "BBC ENTERTAINMENT",
    title: "The Rumour Mill launches with one correspondent, unlimited allegations and a dangerous relationship with the phrase “apparently”",
    dek: "Gabriel Luke Soares Moustakis, operating under the deeply unnecessary on-air title “The Rumour Mill,” takes viewers inside the stories other desks are too responsible to touch.",
    body: `
      <p class="credential-line"><strong>BBC qualification:</strong> <em>BEng in Rumour Transmission, Signal Amplification & High-Voltage Allegations</em>.</p><p>The Rumour Mill will cover suspicious behaviour, tour lore, wardrobe crimes, unexplained disappearances and statements beginning with “apparently...”</p>
      <p>Every scoop will be delivered with maximum conviction and a minimum acceptable relationship with evidence.</p>
      <p>Legal has requested that the phrase “allegedly” be added to the autocue.</p>`
  },
  tour: {
    tag: "BBC SPECIAL REPORT",
    title: "BEAST newsroom prepares for full-scale deployment to Universities Boat Race",
    dek: "The Kowie River is bracing for rowing, reporting and a level of production value nobody requested.",
    body: `
      <p>The official 2026 RMB Universities’ Boat Race programme now runs from Wednesday 09 September through Saturday 12 September.</p>
      <p>BEAST attention is fixed on the Men’s B Heads Race at 09:00 on Thursday, followed by the relevant Men’s B finals on Friday and the 1 + 2 final at 11:20 on Saturday if the racing gods and the draw permit it.</p>
      <p>The Race Week HQ on the homepage contains the full programme. BBC management has asked viewers to remain calm and Nick has asked viewers to remain focused on Nick.</p>`
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
    if (videoStatus) videoStatus.textContent = "LATEST FIELD DISPATCH";
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


// BBC Feature Window — auto-rotating, but always manually scrollable/swipeable.
const featureTrack = document.getElementById("featureTrack");
const featurePrev = document.getElementById("featurePrev");
const featureNext = document.getElementById("featureNext");
const featureDots = document.getElementById("featureDots");
const featureWindow = document.getElementById("featureWindow");

if (featureTrack && featureDots) {
  const featureSlides = Array.from(featureTrack.querySelectorAll(".feature-slide"));
  let featureIndex = 0;
  let featureTimer = null;
  let userPauseUntil = 0;

  const makeDots = () => {
    featureDots.innerHTML = "";
    featureSlides.forEach((slide, i) => {
      const dot = document.createElement("button");
      dot.className = "feature-dot" + (i === 0 ? " active" : "");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show feature ${i + 1}`);
      dot.addEventListener("click", () => {
        userPauseUntil = Date.now() + 12000;
        goToFeature(i);
      });
      featureDots.appendChild(dot);
    });
  };

  const updateDots = () => {
    Array.from(featureDots.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === featureIndex);
    });
  };

  const goToFeature = (i) => {
    featureIndex = (i + featureSlides.length) % featureSlides.length;
    const slide = featureSlides[featureIndex];
    featureTrack.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    updateDots();
  };

  const detectVisibleFeature = () => {
    if (!featureSlides.length) return;
    const left = featureTrack.scrollLeft;
    let closest = 0;
    let best = Infinity;
    featureSlides.forEach((slide, i) => {
      const diff = Math.abs(slide.offsetLeft - left);
      if (diff < best) {
        best = diff;
        closest = i;
      }
    });
    featureIndex = closest;
    updateDots();
  };

  const restartTimer = () => {
    clearInterval(featureTimer);
    featureTimer = setInterval(() => {
      if (Date.now() < userPauseUntil) return;
      if (document.hidden) return;
      goToFeature(featureIndex + 1);
    }, 7000);
  };

  makeDots();
  restartTimer();

  if (featurePrev) {
    featurePrev.addEventListener("click", () => {
      userPauseUntil = Date.now() + 12000;
      goToFeature(featureIndex - 1);
    });
  }

  if (featureNext) {
    featureNext.addEventListener("click", () => {
      userPauseUntil = Date.now() + 12000;
      goToFeature(featureIndex + 1);
    });
  }

  let scrollDebounce;
  featureTrack.addEventListener("scroll", () => {
    userPauseUntil = Date.now() + 8000;
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(detectVisibleFeature, 90);
  }, { passive: true });

  featureTrack.addEventListener("pointerdown", () => {
    userPauseUntil = Date.now() + 12000;
  });

  featureTrack.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      userPauseUntil = Date.now() + 12000;
      goToFeature(featureIndex + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      userPauseUntil = Date.now() + 12000;
      goToFeature(featureIndex - 1);
    }
  });

  if (featureWindow) {
    featureWindow.addEventListener("mouseenter", () => {
      userPauseUntil = Date.now() + 10000;
    });
    featureWindow.addEventListener("focusin", () => {
      userPauseUntil = Date.now() + 10000;
    });
  }

  window.addEventListener("resize", () => {
    featureTrack.scrollTo({ left: featureSlides[featureIndex].offsetLeft, behavior: "auto" });
  });
}


// =====================================================
// BBC LIVE WIRE
// =====================================================
const wireFeed = document.getElementById("wireFeed");
const wireRefresh = document.getElementById("wireRefresh");

const wireUpdates = [
  ["08:03", "WEATHER", "Shane has looked at the sky. Preliminary finding: that looks good."],
  ["08:17", "SPORT", "Jared has drawn three arrows on a screenshot and declared the race tactically solved."],
  ["08:41", "MARKETS", "Byron downgrades Sleep Futures to 'deeply concerning'."],
  ["09:02", "DEVELOPING", "Brynn reported missing from Missing Person Desk. Search led by Brynn."],
  ["09:26", "SURF", "Oli detects wake from launch and requests slow-motion replay."],
  ["09:54", "TRAFFIC", "Liam confirms congestion outside breakfast. Alternate route ignored."],
  ["10:11", "RUMOURS", "Gabriel has heard something from someone who heard something."],
  ["10:37", "ANCHOR", "Nick asks newsroom to refer to his entrance as 'the opening ceremony'."],
  ["11:04", "BREAKING", "Unidentified strap located. Crew refuses to say whether it was ever missing."],
  ["11:42", "CULTURE", "Hairspray reserves upgraded from adequate to strategic."]
];

let wireCounter = 0;
function renderWire() {
  if (!wireFeed) return;
  wireFeed.innerHTML = "";
  const start = wireCounter % wireUpdates.length;
  for (let i = 0; i < 7; i++) {
    const item = wireUpdates[(start + i) % wireUpdates.length];
    const row = document.createElement("div");
    row.className = "wire-item";
    row.innerHTML = `<time>${item[0]}</time><span class="wire-tag">${item[1]}</span><p>${item[2]}</p>`;
    wireFeed.appendChild(row);
  }
}
if (wireFeed) renderWire();
if (wireRefresh) {
  wireRefresh.addEventListener("click", () => {
    wireCounter = (wireCounter + 1) % wireUpdates.length;
    renderWire();
    wireFeed.scrollTo({top: 0, behavior: "smooth"});
  });
}

// =====================================================
// RACE WEEK TABS + NEXT BEAST EVENT
// =====================================================
const scheduleTabs = Array.from(document.querySelectorAll(".schedule-tab"));
const scheduleDays = Array.from(document.querySelectorAll(".schedule-day"));

function showScheduleDay(day) {
  scheduleTabs.forEach(t => t.classList.toggle("active", t.dataset.day === day));
  scheduleDays.forEach(p => p.classList.toggle("active", p.dataset.dayPanel === day));
}
scheduleTabs.forEach(tab => tab.addEventListener("click", () => showScheduleDay(tab.dataset.day)));

const beastEvents = [
  { at: new Date("2026-09-10T09:00:00+02:00"), label: "Thu 10 Sep • 09:00 — Men’s B Heads Race" },
  { at: new Date("2026-09-11T11:55:00+02:00"), label: "Fri 11 Sep • 11:55 — Men’s B Final 7 + 8" },
  { at: new Date("2026-09-11T12:30:00+02:00"), label: "Fri 11 Sep • 12:30 — Men’s B Final 5 + 6" },
  { at: new Date("2026-09-11T13:40:00+02:00"), label: "Fri 11 Sep • 13:40 — Men’s B Final 3 + 4" },
  { at: new Date("2026-09-12T11:20:00+02:00"), label: "Sat 12 Sep • 11:20 — Men’s B Final 1 + 2" }
];
const nextRaceText = document.getElementById("nextRaceText");
if (nextRaceText) {
  const now = new Date();
  const upcoming = beastEvents.find(e => e.at > now);
  nextRaceText.textContent = upcoming
    ? `Next possible Men’s B event: ${upcoming.label}`
    : "Race week complete. BBC is now rewriting every prediction as if it was correct.";

  // Open the most relevant programme tab on race week.
  const dateKey = now.toISOString().slice(0,10);
  if (dateKey === "2026-09-10") showScheduleDay("thu");
  else if (dateKey === "2026-09-11") showScheduleDay("fri");
  else if (dateKey >= "2026-09-12") showScheduleDay("sat");
}

// =====================================================
// QUOTE OF THE DAY
// =====================================================
const quotes = [
  ["“No comment, but put that in the article.”", "— BBC source familiar with the matter"],
  ["“That looks good.”", "— Shane, completing the forecast"],
  ["“Technically, a boat wake is still a wave.”", "— Oli, defending the entire Surf Desk"],
  ["“The numbers are excellent if you ignore the numbers.”", "— Byron, BBC Business"],
  ["“I wasn’t missing. You were looking in the wrong place.”", "— Brynn"],
  ["“Back to me.”", "— Nick, after every correspondent report"],
  ["“Apparently…”", "— Gabriel, moments before a legal problem"],
  ["“This is massive.”", "— Jared, describing something moderately important"],
  ["“Use the other route.”", "— Liam, to nobody in particular"]
];
let quoteIndex = Math.abs(new Date().getDate()) % quotes.length;
const quoteText = document.getElementById("quoteText");
const quoteSource = document.getElementById("quoteSource");
const nextQuote = document.getElementById("nextQuote");
function showQuote() {
  if (!quoteText || !quoteSource) return;
  quoteText.textContent = quotes[quoteIndex][0];
  quoteSource.textContent = quotes[quoteIndex][1];
}
if (nextQuote) nextQuote.addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote();
});
showQuote();

// =====================================================
// LOWER-THIRD GENERATOR
// =====================================================
const lowerThirdPerson = document.getElementById("lowerThirdPerson");
const lowerThirdName = document.getElementById("lowerThirdName");
const lowerThirdTitle = document.getElementById("lowerThirdTitle");
const generateLowerThird = document.getElementById("generateLowerThird");

const lowerThirdData = {
  nick: {
    name: "NICK GLEN JUDELSOHN",
    titles: ["GLOBAL CHIEF ANCHOR & NATIONAL TREASURE","EXECUTIVE FACE OF BREAKING NEWS","MANAGING DIRECTOR OF HIMSELF","SENIOR VICE PRESIDENT OF CAMERA ONE"]
  },
  shane: {
    name: "SHANE LUKE MEARNS",
    titles: ["CHIEF OFFICER OF THAT LOOKS GOOD","SENIOR ATMOSPHERIC POINTING ANALYST","DIRECTOR OF WATER-ADJACENT WEATHER","ECOLOGICAL VIBES CORRESPONDENT"]
  },
  byron: {
    name: "BYRON ALEXANDER SIKIOTIS",
    titles: ["CHIEF VIBES ACCOUNTANT","DIRECTOR OF CREATIVE LEDGER INTERPRETATION","SENIOR ANALYST, MISSING FUNDS","HEAD OF DIGNITY DEPRECIATION"]
  },
  jared: {
    name: "JARED KYLE KABO ARMSTRONG",
    titles: ["CHIEF TACTICAL ARROW OFFICER","SENIOR HOT TAKE ADMINISTRATOR","DIRECTOR OF MASSIVE MOMENTS","GLOBAL POWER RANKINGS AUTHORITY"]
  },
  brynn: {
    name: "BRYNN THOMAS RAWLINS",
    titles: ["MISSING PERSON & PERSON MISSING","LEAD INVESTIGATOR, OWN WHEREABOUTS","DIRECTOR OF ADVANCED DISAPPEARANCE","SENIOR SELF-RECOVERY ENGINEER"]
  },
  oli: {
    name: "OLIVER FRANK ECKLEY",
    titles: ["CHIEF SWELL EXAGGERATION OFFICER","DIRECTOR OF IMAGINARY BARRELS","SENIOR BOAT-WAKE ANALYST","HEAD OF KOWIE PIPELINE OPERATIONS"]
  },
  liam: {
    name: "LIAM DONALD GAUNT",
    titles: ["CHIEF CORRIDOR TRAFFIC EDUCATOR","DIRECTOR OF ALTERNATE ROUTES NOBODY USES","SENIOR RIGGER CONGESTION ANALYST","HEAD OF QUEUE DISCIPLINE"]
  },
  gabriel: {
    name: "GABRIEL LUKE SOARES MOUSTAKIS",
    titles: ["DIRECTOR OF APPARENTLY","CHIEF HIGH-VOLTAGE ALLEGATIONS OFFICER","SENIOR RUMOUR TRANSMISSION ENGINEER","HEAD OF SOURCES CLOSE TO THE MATTER"]
  }
};
function makeLowerThird() {
  if (!lowerThirdPerson || !lowerThirdName || !lowerThirdTitle) return;
  const data = lowerThirdData[lowerThirdPerson.value];
  lowerThirdName.textContent = data.name;
  lowerThirdTitle.textContent = data.titles[Math.floor(Math.random() * data.titles.length)];
}
if (generateLowerThird) generateLowerThird.addEventListener("click", makeLowerThird);
if (lowerThirdPerson) lowerThirdPerson.addEventListener("change", makeLowerThird);

// =====================================================
// EMERGENCY BROADCAST
// =====================================================
const emergencyOverlay = document.getElementById("emergencyOverlay");
const emergencyHeadline = document.getElementById("emergencyHeadline");
const emergencyFab = document.getElementById("emergencyFab");
const emergencyInline = document.getElementById("emergencyInline");
const emergencyClose = document.getElementById("emergencyClose");

const emergencyHeadlines = [
  "Crew member has moved a chair without notifying the newsroom.",
  "BREAKING: Someone has asked where the 10mm spanner is.",
  "NATIONAL ALERT: Nick is not currently on camera.",
  "SURF EMERGENCY: Oli has detected a ripple with suspicious shape.",
  "MARKET HALT: Byron cannot explain one transaction.",
  "WEATHER WARNING: Shane has upgraded conditions to “that looks very good.”",
  "SPORTING CRISIS: Jared has run out of arrows for the analysis screen.",
  "DEVELOPING: Brynn has disappeared during report on his previous disappearance.",
  "TRAFFIC EMERGENCY: Two riggers have entered the same corridor.",
  "RUMOUR ALERT: Gabriel has used the word “confirmed” without documentation."
];
// A locally generated civil-defence-style siren; no audio download required.
let emergencyAudioContext;
let emergencySoundNodes = [];
let emergencySoundGeneration = 0;
function stopEmergencySound() {
  emergencySoundGeneration += 1;
  emergencySoundNodes.forEach(({ oscillator, gain }) => {
    try { oscillator.stop(); } catch (_) { /* Already ended. */ }
    oscillator.disconnect();
    gain.disconnect();
  });
  emergencySoundNodes = [];
}
async function playEmergencySound() {
  stopEmergencySound();
  const generation = emergencySoundGeneration;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    emergencyAudioContext = emergencyAudioContext || new AudioContextClass();
    if (emergencyAudioContext.state === "suspended") await emergencyAudioContext.resume();
    if (generation !== emergencySoundGeneration) return;
    const start = emergencyAudioContext.currentTime;
    // Two abrasive, slightly detuned voices rise and fall for eight seconds.
    // Their combined gain stays below full scale, avoiding digital clipping.
    [{ type: "sawtooth", offset: 0, level: 0.30 },
     { type: "square", offset: 11, level: 0.18 }].forEach(voice => {
      const oscillator = emergencyAudioContext.createOscillator();
      const gain = emergencyAudioContext.createGain();
      const duration = 8;
      oscillator.type = voice.type;
      oscillator.frequency.setValueAtTime(380 + voice.offset, start);
      for (let cycle = 0; cycle < 4; cycle += 1) {
        oscillator.frequency.linearRampToValueAtTime(1080 + voice.offset, start + cycle * 2 + 1.1);
        oscillator.frequency.linearRampToValueAtTime(380 + voice.offset, start + cycle * 2 + 2);
      }
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(voice.level, start + 0.06);
      gain.gain.setValueAtTime(voice.level, start + duration - 0.15);
      gain.gain.linearRampToValueAtTime(0, start + duration);
      oscillator.connect(gain);
      gain.connect(emergencyAudioContext.destination);
      const node = { oscillator, gain };
      emergencySoundNodes.push(node);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
        emergencySoundNodes = emergencySoundNodes.filter(item => item !== node);
      };
      oscillator.start(start);
      oscillator.stop(start + duration);
    });
  } catch (_) { /* The visual broadcast still works if audio is unavailable. */ }
}
function triggerEmergency() {
  if (!emergencyOverlay || !emergencyHeadline) return;
  playEmergencySound();
  emergencyHeadline.textContent = emergencyHeadlines[Math.floor(Math.random() * emergencyHeadlines.length)];
  emergencyOverlay.classList.add("show");
  emergencyOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("emergency-open");
}
function closeEmergency() {
  stopEmergencySound();
  if (!emergencyOverlay) return;
  emergencyOverlay.classList.remove("show");
  emergencyOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("emergency-open");
}
[emergencyFab, emergencyInline].forEach(btn => btn && btn.addEventListener("click", triggerEmergency));
if (emergencyClose) emergencyClose.addEventListener("click", closeEmergency);
if (emergencyOverlay) emergencyOverlay.addEventListener("click", e => {
  if (e.target === emergencyOverlay) closeEmergency();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeEmergency();
});
