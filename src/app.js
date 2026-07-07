const STORAGE_KEYS = {
  projects: "bunkasai-concierge-projects-v1",
  preferences: "bunkasai-concierge-preferences-v1",
  stamps: "bunkasai-concierge-stamps-v1",
  view: "bunkasai-concierge-view-v1",
};

const CATEGORY_LABELS = {
  food: "飲食",
  game: "ゲーム",
  exhibition: "展示",
  stage: "ステージ",
  rest: "休憩",
  shop: "物販",
};

const CROWD_LABELS = {
  empty: "空いている",
  normal: "ふつう",
  busy: "混雑",
  very_busy: "かなり混雑",
};

const STATUS_LABELS = {
  open: "開催中",
  paused: "一時停止",
  sold_out: "売り切れ",
  closed: "終了",
};

const OPERATION_NOTICES = [
  "名前、連絡先、健康情報などの個人情報は入力しないでください。相談文も端末に保存しません。",
  "食品のアレルギー情報は、このアプリだけで判断せず、必ず各出店で確認してください。",
  "おすすめやランキングは参考情報です。実際の案内、掲示、スタッフの指示を優先してください。",
  "混雑している場所へ人を集中させないよう、運営側は混雑状況を見て案内を調整してください。",
  "スマホを持っていない人向けに、紙の案内、掲示、受付での相談窓口も用意してください。",
];

const INTEREST_OPTIONS = [
  { value: "food", label: "食べ物" },
  { value: "game", label: "ゲーム" },
  { value: "exhibition", label: "展示" },
  { value: "stage", label: "ステージ" },
  { value: "photo", label: "写真映え" },
  { value: "rest", label: "休憩" },
  { value: "hands_on", label: "体験" },
  { value: "shopping", label: "物販" },
];

const DURATION_OPTIONS = [
  { value: "30m", label: "30分", minutes: 30 },
  { value: "60m", label: "1時間", minutes: 60 },
  { value: "120m", label: "2時間", minutes: 120 },
  { value: "half_day", label: "半日", minutes: 240 },
];

const BUDGET_OPTIONS = [
  { value: 0, label: "0円" },
  { value: 500, label: "500円" },
  { value: 1000, label: "1000円" },
  { value: 1500, label: "1500円" },
  { value: "unlimited", label: "指定なし" },
];

const START_AREAS = {
  gate: { label: "正門", x: 10, y: 82 },
  building_a_1f: { label: "A棟1階", x: 28, y: 45 },
  building_b_2f: { label: "B棟2階", x: 64, y: 34 },
  gym: { label: "体育館", x: 82, y: 70 },
  courtyard: { label: "中庭", x: 47, y: 58 },
};

const INITIAL_PROJECTS = [
  {
    id: "food-crepe",
    title: "星空クレープ",
    groupName: "2年A組",
    category: "food",
    area: "A棟",
    floor: "1階",
    room: "A-101",
    mapX: 25,
    mapY: 46,
    description: "焼きたて生地にチョコ、いちご、バナナを合わせた定番クレープ。",
    tags: ["sweet", "photo", "friends"],
    priceMin: 350,
    priceMax: 500,
    averageDurationMin: 10,
    averageWaitMin: 8,
    startTime: "10:00",
    endTime: "15:30",
    crowdLevel: "normal",
    status: "open",
    popularity: 9,
    notes: "数量限定メニューは昼過ぎに終了する場合があります。",
  },
  {
    id: "food-yakisoba",
    title: "熱気やきそば横丁",
    groupName: "3年B組",
    category: "food",
    area: "中庭",
    floor: "屋外",
    room: "テント3",
    mapX: 48,
    mapY: 63,
    description: "香ばしいソースやきそば。回転が速く、昼食にも向いています。",
    tags: ["meal", "popular", "friends"],
    priceMin: 400,
    priceMax: 500,
    averageDurationMin: 12,
    averageWaitMin: 12,
    startTime: "10:00",
    endTime: "15:00",
    crowdLevel: "busy",
    status: "open",
    popularity: 10,
    notes: "雨天時は販売場所がA棟入口付近に変わります。",
  },
  {
    id: "food-lemon",
    title: "レモンソーダ研究所",
    groupName: "化学部",
    category: "food",
    area: "B棟",
    floor: "1階",
    room: "B-105",
    mapX: 62,
    mapY: 51,
    description: "色が変わるレモンソーダ。理科実験のように楽しめるドリンクです。",
    tags: ["drink", "hands_on", "photo"],
    priceMin: 250,
    priceMax: 350,
    averageDurationMin: 8,
    averageWaitMin: 5,
    startTime: "10:00",
    endTime: "15:30",
    crowdLevel: "empty",
    status: "open",
    popularity: 7,
    notes: "炭酸が苦手な方向けに微炭酸もあります。",
  },
  {
    id: "food-wagashi",
    title: "和菓子茶房こもれび",
    groupName: "茶道部",
    category: "food",
    area: "A棟",
    floor: "2階",
    room: "和室",
    mapX: 31,
    mapY: 30,
    description: "抹茶と季節の和菓子を静かな教室で味わえます。",
    tags: ["sweet", "quiet", "rest"],
    priceMin: 300,
    priceMax: 400,
    averageDurationMin: 18,
    averageWaitMin: 6,
    startTime: "10:30",
    endTime: "14:30",
    crowdLevel: "normal",
    status: "open",
    popularity: 6,
    notes: "席数が限られるため、混雑時は整理券制です。",
  },
  {
    id: "game-shooting",
    title: "レトロ射的アリーナ",
    groupName: "1年C組",
    category: "game",
    area: "B棟",
    floor: "2階",
    room: "B-203",
    mapX: 70,
    mapY: 30,
    description: "昔ながらの縁日風射的。短時間で友達と盛り上がれます。",
    tags: ["friends", "short", "popular"],
    priceMin: 200,
    priceMax: 300,
    averageDurationMin: 10,
    averageWaitMin: 10,
    startTime: "10:00",
    endTime: "15:30",
    crowdLevel: "busy",
    status: "open",
    popularity: 9,
    notes: "景品はなくなり次第入れ替えます。",
  },
  {
    id: "game-mystery",
    title: "校内謎解きラリー",
    groupName: "生徒会",
    category: "game",
    area: "全校",
    floor: "各所",
    room: "受付: 正門横",
    mapX: 14,
    mapY: 75,
    description: "校内を歩きながら暗号を解く周遊型イベント。",
    tags: ["hands_on", "walking", "friends"],
    priceMin: 0,
    priceMax: 0,
    averageDurationMin: 35,
    averageWaitMin: 3,
    startTime: "10:00",
    endTime: "15:00",
    crowdLevel: "normal",
    status: "open",
    popularity: 8,
    notes: "受付で解答用紙を受け取ってください。",
  },
  {
    id: "game-board",
    title: "ボードゲーム喫茶",
    groupName: "有志ボードゲーム班",
    category: "game",
    area: "A棟",
    floor: "3階",
    room: "A-305",
    mapX: 36,
    mapY: 21,
    description: "初めてでも遊びやすい短時間ゲームをスタッフが案内します。",
    tags: ["quiet", "friends", "rest"],
    priceMin: 100,
    priceMax: 200,
    averageDurationMin: 20,
    averageWaitMin: 4,
    startTime: "10:00",
    endTime: "15:30",
    crowdLevel: "empty",
    status: "open",
    popularity: 5,
    notes: "2人から参加できます。",
  },
  {
    id: "exhibit-art",
    title: "光の美術室",
    groupName: "美術部",
    category: "exhibition",
    area: "B棟",
    floor: "3階",
    room: "美術室",
    mapX: 67,
    mapY: 18,
    description: "光と影をテーマにした作品展示。写真映えする展示もあります。",
    tags: ["photo", "quiet", "free"],
    priceMin: 0,
    priceMax: 0,
    averageDurationMin: 15,
    averageWaitMin: 2,
    startTime: "10:00",
    endTime: "15:30",
    crowdLevel: "normal",
    status: "open",
    popularity: 7,
    notes: "作品には手を触れないでください。",
  },
  {
    id: "exhibit-science",
    title: "実験ショーラボ",
    groupName: "科学部",
    category: "exhibition",
    area: "B棟",
    floor: "1階",
    room: "理科室",
    mapX: 58,
    mapY: 45,
    description: "炎色反応やスライム作りなど、見て体験できる実験展示。",
    tags: ["hands_on", "family", "free"],
    priceMin: 0,
    priceMax: 100,
    averageDurationMin: 18,
    averageWaitMin: 7,
    startTime: "10:00",
    endTime: "15:00",
    crowdLevel: "normal",
    status: "open",
    popularity: 8,
    notes: "一部体験は整理券が必要です。",
  },
  {
    id: "exhibit-photo",
    title: "青春フォトギャラリー",
    groupName: "写真部",
    category: "exhibition",
    area: "A棟",
    floor: "2階",
    room: "A-204",
    mapX: 24,
    mapY: 29,
    description: "学校生活と街の風景を切り取った写真展示。",
    tags: ["photo", "quiet", "free", "short"],
    priceMin: 0,
    priceMax: 0,
    averageDurationMin: 12,
    averageWaitMin: 1,
    startTime: "10:00",
    endTime: "15:30",
    crowdLevel: "empty",
    status: "open",
    popularity: 5,
    notes: "展示室内は静かにご覧ください。",
  },
  {
    id: "stage-dance",
    title: "ダンス部ステージ",
    groupName: "ダンス部",
    category: "stage",
    area: "体育館",
    floor: "1階",
    room: "メインステージ",
    mapX: 83,
    mapY: 69,
    description: "文化祭の人気ステージ。迫力のあるチームパフォーマンスです。",
    tags: ["popular", "photo", "friends"],
    priceMin: 0,
    priceMax: 0,
    averageDurationMin: 25,
    averageWaitMin: 10,
    startTime: "12:10",
    endTime: "12:40",
    crowdLevel: "very_busy",
    status: "open",
    popularity: 10,
    notes: "入場制限がかかる場合があります。",
  },
  {
    id: "stage-brass",
    title: "吹奏楽ミニコンサート",
    groupName: "吹奏楽部",
    category: "stage",
    area: "体育館",
    floor: "1階",
    room: "メインステージ",
    mapX: 79,
    mapY: 72,
    description: "定番曲と文化祭メドレーの短いコンサート。",
    tags: ["family", "rest", "popular"],
    priceMin: 0,
    priceMax: 0,
    averageDurationMin: 20,
    averageWaitMin: 6,
    startTime: "13:20",
    endTime: "13:45",
    crowdLevel: "busy",
    status: "open",
    popularity: 8,
    notes: "開演後の入退場は案内に従ってください。",
  },
  {
    id: "rest-lounge",
    title: "こかげ休憩ラウンジ",
    groupName: "PTA",
    category: "rest",
    area: "中庭",
    floor: "屋外",
    room: "テント1",
    mapX: 43,
    mapY: 72,
    description: "飲み物を持ち込んで休める日陰の休憩スペース。",
    tags: ["rest", "family", "quiet", "free"],
    priceMin: 0,
    priceMax: 0,
    averageDurationMin: 10,
    averageWaitMin: 0,
    startTime: "10:00",
    endTime: "15:30",
    crowdLevel: "empty",
    status: "open",
    popularity: 4,
    notes: "席の長時間利用は譲り合いをお願いします。",
  },
  {
    id: "shop-handmade",
    title: "手作り雑貨マーケット",
    groupName: "家庭科部",
    category: "shop",
    area: "A棟",
    floor: "1階",
    room: "A-103",
    mapX: 34,
    mapY: 49,
    description: "布小物やアクセサリーなど、手作り雑貨を販売します。",
    tags: ["shopping", "photo", "short"],
    priceMin: 100,
    priceMax: 700,
    averageDurationMin: 12,
    averageWaitMin: 3,
    startTime: "10:00",
    endTime: "15:00",
    crowdLevel: "normal",
    status: "open",
    popularity: 6,
    notes: "人気商品は早めに売り切れる場合があります。",
  },
];

const DEFAULT_PREFERENCES = {
  visitDuration: "60m",
  budget: 1000,
  interests: ["food", "game"],
  preferredTags: [],
  walkingPreference: "normal",
  crowdPreference: "balanced",
  startArea: "gate",
  now: "10:30",
  consultationText: "",
};

let state = {
  projects: loadProjects(),
  preferences: loadPreferences(),
  stamps: loadStamps(),
  route: null,
  selectedProjectId: null,
  view: localStorage.getItem(STORAGE_KEYS.view) || "concierge",
  notice: "",
};

const app = document.querySelector("#app");

function loadProjects() {
  const saved = localStorage.getItem(STORAGE_KEYS.projects);
  if (!saved) return cloneInitialProjects();
  try {
    return JSON.parse(saved);
  } catch {
    return cloneInitialProjects();
  }
}

function cloneInitialProjects() {
  return JSON.parse(JSON.stringify(INITIAL_PROJECTS));
}

function loadPreferences() {
  const saved = localStorage.getItem(STORAGE_KEYS.preferences);
  if (!saved) return { ...DEFAULT_PREFERENCES };
  try {
    const parsed = JSON.parse(saved);
    delete parsed.consultationText;
    return { ...DEFAULT_PREFERENCES, ...parsed, consultationText: "" };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

function loadStamps() {
  const saved = localStorage.getItem(STORAGE_KEYS.stamps);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : [];
  } catch {
    return [];
  }
}

function persistProjects() {
  localStorage.setItem(STORAGE_KEYS.projects, JSON.stringify(state.projects));
}

function persistPreferences() {
  const { consultationText, ...storedPreferences } = state.preferences;
  localStorage.setItem(STORAGE_KEYS.preferences, JSON.stringify(storedPreferences));
}

function persistStamps() {
  localStorage.setItem(STORAGE_KEYS.stamps, JSON.stringify(state.stamps));
}

function persistView() {
  localStorage.setItem(STORAGE_KEYS.view, state.view);
}

function getDurationMinutes(value) {
  return DURATION_OPTIONS.find((option) => option.value === value)?.minutes ?? 60;
}

function getBudgetMax(value) {
  return value === "unlimited" ? Number.POSITIVE_INFINITY : Number(value);
}

function timeToMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function minutesToTime(minutes) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function money(value) {
  if (!Number.isFinite(value)) return "指定なし";
  return `${Math.round(value).toLocaleString("ja-JP")}円`;
}

function distanceBetween(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function getProjectPoint(project) {
  return { x: project.mapX, y: project.mapY };
}

function getTravelMinutes(fromPoint, project) {
  const distance = distanceBetween(fromPoint, getProjectPoint(project));
  return Math.max(2, Math.round(distance / 10));
}

function isProjectAvailable(project, preferences) {
  if (project.status !== "open") return false;
  if (preferences.crowdPreference === "avoid_crowds" && project.crowdLevel === "very_busy") {
    return false;
  }

  const nowMin = timeToMinutes(preferences.now);
  const startMin = timeToMinutes(project.startTime);
  const endMin = timeToMinutes(project.endTime);
  const visitDuration = getDurationMinutes(preferences.visitDuration);

  if (project.category === "stage") {
    return startMin >= nowMin && startMin <= nowMin + visitDuration && endMin > nowMin;
  }

  return nowMin >= startMin && nowMin <= endMin - Math.min(5, project.averageDurationMin);
}

function matchesInterests(project, preferences) {
  const interests = new Set(preferences.interests);
  const preferredTags = new Set(preferences.preferredTags || []);
  const projectTags = new Set(project.tags);
  let score = 0;

  if (interests.has(project.category)) score += 40;
  if (project.category === "shop" && interests.has("shopping")) score += 32;
  if (projectTags.has("photo") && interests.has("photo")) score += 28;
  if (projectTags.has("rest") && interests.has("rest")) score += 28;
  if (projectTags.has("hands_on") && interests.has("hands_on")) score += 28;
  preferredTags.forEach((tag) => {
    if (projectTags.has(tag)) score += 18;
  });

  return score;
}

function crowdScore(project, preference) {
  const base = {
    empty: 18,
    normal: 13,
    busy: 6,
    very_busy: 1,
  }[project.crowdLevel];

  if (preference === "popular_first") {
    return {
      empty: 8,
      normal: 12,
      busy: 15,
      very_busy: 14,
    }[project.crowdLevel];
  }

  if (preference === "avoid_crowds") {
    return {
      empty: 24,
      normal: 15,
      busy: 2,
      very_busy: -100,
    }[project.crowdLevel];
  }

  return base;
}

function walkingDistanceLimit(preference) {
  return {
    low: 95,
    normal: 150,
    high: 240,
  }[preference];
}

function roundScore(value) {
  return Math.round(value * 10) / 10;
}

function formatScore(value) {
  const rounded = roundScore(value);
  return `${rounded > 0 ? "+" : ""}${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)}`;
}

function buildInterestNote(project, preferences) {
  const matches = [];
  const interests = new Set(preferences.interests);
  const preferredTags = new Set(preferences.preferredTags || []);
  const tags = new Set(project.tags);

  if (interests.has(project.category)) matches.push(CATEGORY_LABELS[project.category]);
  if (project.category === "shop" && interests.has("shopping")) matches.push("物販");
  if (tags.has("photo") && interests.has("photo")) matches.push("写真映え");
  if (tags.has("rest") && interests.has("rest")) matches.push("休憩");
  if (tags.has("hands_on") && interests.has("hands_on")) matches.push("体験");
  preferredTags.forEach((tag) => {
    if (tags.has(tag)) matches.push(tagLabel(tag));
  });

  return matches.length > 0 ? `${matches.join("、")}が一致` : "好みとの一致は少なめ";
}

function scoreProjectBreakdown(project, preferences, fromPoint) {
  const budgetMax = getBudgetMax(preferences.budget);
  const estimatedCost = Math.ceil((project.priceMin + project.priceMax) / 2);
  const distance = distanceBetween(fromPoint, getProjectPoint(project));
  const interestScore = matchesInterests(project, preferences);
  const distanceScore = Math.max(0, 18 - Math.round(distance / 6));
  const crowd = crowdScore(project, preferences.crowdPreference);
  const budgetFit = estimatedCost <= budgetMax ? 12 : -80;
  const popularityBonus = preferences.crowdPreference === "popular_first" ? project.popularity * 1.5 : project.popularity * 0.6;
  const waitPenalty = project.averageWaitMin * (preferences.crowdPreference === "avoid_crowds" ? 1.2 : 0.65);
  const total = interestScore + distanceScore + crowd + budgetFit + popularityBonus - waitPenalty;

  return {
    total: roundScore(total),
    items: [
      {
        key: "interest",
        label: "好み",
        value: roundScore(interestScore),
        note: buildInterestNote(project, preferences),
      },
      {
        key: "distance",
        label: "距離",
        value: roundScore(distanceScore),
        note: `直前地点から近いほど加点 (${Math.round(distance)}m目安)`,
      },
      {
        key: "crowd",
        label: "混雑",
        value: roundScore(crowd),
        note: `${CROWD_LABELS[project.crowdLevel]}を設定に応じて評価`,
      },
      {
        key: "budget",
        label: "予算",
        value: roundScore(budgetFit),
        note: Number.isFinite(budgetMax) ? `${money(estimatedCost)} / 上限${money(budgetMax)}` : `${money(estimatedCost)} / 上限なし`,
      },
      {
        key: "popularity",
        label: "人気",
        value: roundScore(popularityBonus),
        note: `人気度${project.popularity}/10`,
      },
      {
        key: "wait",
        label: "待ち",
        value: roundScore(-waitPenalty),
        note: `平均待ち${project.averageWaitMin}分を減点`,
      },
    ],
  };
}

function scoreProject(project, preferences, fromPoint) {
  return scoreProjectBreakdown(project, preferences, fromPoint).total;
}

function recommendRoute(projects, preferences) {
  const budgetMax = getBudgetMax(preferences.budget);
  const durationMax = getDurationMinutes(preferences.visitDuration);
  const nowMin = timeToMinutes(preferences.now);
  const startPoint = START_AREAS[preferences.startArea] || START_AREAS.gate;
  const available = projects.filter((project) => isProjectAvailable(project, preferences));
  const scored = available
    .map((project) => ({
      project,
      score: scoreProject(project, preferences, startPoint),
    }))
    .filter((item) => item.score > -20)
    .sort((a, b) => b.score - a.score);

  const stops = [];
  const usedCategories = new Set();
  let totalBudget = 0;
  let totalDuration = 0;
  let walkDistance = 0;
  let currentPoint = startPoint;

  const balanced = [...scored].sort((a, b) => {
    const aBoost = usedCategories.has(a.project.category) ? 0 : 8;
    const bBoost = usedCategories.has(b.project.category) ? 0 : 8;
    return b.score + bBoost - (a.score + aBoost);
  });

  for (const item of balanced) {
    if (stops.length >= 5) break;

    const project = item.project;
    const estimatedCost = Math.ceil((project.priceMin + project.priceMax) / 2);
    const travelMin = getTravelMinutes(currentPoint, project);
    const distance = distanceBetween(currentPoint, getProjectPoint(project));
    let waitMin = project.averageWaitMin;

    if (project.category === "stage") {
      const startMin = timeToMinutes(project.startTime);
      waitMin = Math.max(project.averageWaitMin, startMin - (nowMin + totalDuration + travelMin));
    }

    const stopDuration = travelMin + waitMin + project.averageDurationMin;
    const wouldSpend = totalBudget + estimatedCost;
    const wouldTake = totalDuration + stopDuration;
    const wouldWalk = walkDistance + distance;

    if (wouldTake > durationMax) continue;
    if (wouldSpend > budgetMax) continue;
    if (wouldWalk > walkingDistanceLimit(preferences.walkingPreference)) continue;

    const scoreBreakdown = scoreProjectBreakdown(project, preferences, currentPoint);

    totalDuration = wouldTake;
    totalBudget = wouldSpend;
    walkDistance = wouldWalk;
    currentPoint = getProjectPoint(project);
    usedCategories.add(project.category);

    stops.push({
      projectId: project.id,
      order: stops.length + 1,
      plannedArrival: minutesToTime(nowMin + totalDuration - waitMin - project.averageDurationMin),
      plannedStayMin: project.averageDurationMin,
      expectedWaitMin: waitMin,
      travelMin,
      budget: estimatedCost,
      reason: buildStopReason(project, preferences),
      score: scoreBreakdown.total,
      scoreBreakdown,
    });
  }

  const alternatives = scored
    .map((item) => item.project)
    .filter((project) => !stops.some((stop) => stop.projectId === project.id))
    .slice(0, 4);

  const title = buildRouteTitle(preferences, stops);

  return {
    routeId: `route-${Date.now()}`,
    title,
    summary: buildRouteSummary(preferences, stops, totalDuration, totalBudget),
    totalDurationMin: totalDuration,
    totalBudget,
    totalWalkLevel: walkLevelLabel(walkDistance),
    stops,
    alternatives,
    reason: buildRouteReason(preferences, stops),
    emptyReason: stops.length === 0 ? buildEmptyReason(projects, preferences) : "",
  };
}

function buildStopReason(project, preferences) {
  const reasons = [];
  if (preferences.interests.includes(project.category)) reasons.push(`${CATEGORY_LABELS[project.category]}の希望に合います`);
  if (project.tags.includes("photo") && preferences.interests.includes("photo")) reasons.push("写真映えします");
  if (project.tags.includes("rest") && preferences.interests.includes("rest")) reasons.push("休憩しやすいです");
  if (project.crowdLevel === "empty") reasons.push("待ち時間が短めです");
  if (project.priceMax === 0) reasons.push("無料で楽しめます");
  if (reasons.length === 0) reasons.push("時間と予算の条件に収まりやすい企画です");
  return reasons.slice(0, 2).join("。") + "。";
}

function buildRouteTitle(preferences, stops) {
  if (stops.length === 0) return "条件に合うルートが見つかりません";
  const duration = DURATION_OPTIONS.find((option) => option.value === preferences.visitDuration)?.label || "短時間";
  const mainInterest = INTEREST_OPTIONS.find((option) => preferences.interests.includes(option.value))?.label || "文化祭";
  return `${mainInterest}中心の${duration}ルート`;
}

function buildRouteSummary(preferences, stops, duration, budget) {
  if (stops.length === 0) {
    return "条件を少し緩めると候補が出やすくなります。";
  }
  return `${stops.length}件を${duration}分、${money(budget)}目安で回れます。混雑と移動量を見ながら順番を組みました。`;
}

function buildRouteReason(preferences, stops) {
  if (stops.length === 0) return "開催時間、予算、混雑条件を満たす企画が不足しています。";
  const crowd = {
    avoid_crowds: "混雑が少ない企画を優先しました",
    balanced: "待ち時間と人気のバランスを取りました",
    popular_first: "人気企画を優先しました",
  }[preferences.crowdPreference];
  return `${crowd}。持ち時間と予算に収まる順番で提案しています。`;
}

function buildEmptyReason(projects, preferences) {
  const availableOpen = projects.filter((project) => project.status === "open").length;
  const budgetMax = getBudgetMax(preferences.budget);
  const freeOnly = budgetMax === 0;
  if (availableOpen === 0) return "現在開催中の企画がありません。管理画面でステータスを確認してください。";
  if (freeOnly) return "無料企画だけに絞ると候補が少ないため、展示や休憩を追加してみてください。";
  if (preferences.crowdPreference === "avoid_crowds") return "混雑回避の条件が強いため、混雑許容度を「バランス」にすると候補が増えます。";
  return "持ち時間か予算を少し増やすと候補が出やすくなります。";
}

function walkLevelLabel(distance) {
  if (distance < 55) return "少なめ";
  if (distance < 115) return "ふつう";
  return "多め";
}

function parseConsultation(text, currentPreferences) {
  const parsed = { ...currentPreferences, preferredTags: [...(currentPreferences.preferredTags || [])] };
  const normalized = text.trim();
  if (!normalized) return parsed;

  const minuteMatch = normalized.match(/(\d{1,3})\s*分/);
  const hourMatch = normalized.match(/(\d(?:\.\d)?)\s*時間/);
  if (minuteMatch) {
    const minutes = Number(minuteMatch[1]);
    parsed.visitDuration = minutes <= 35 ? "30m" : minutes <= 80 ? "60m" : minutes <= 150 ? "120m" : "half_day";
  } else if (hourMatch) {
    const minutes = Number(hourMatch[1]) * 60;
    parsed.visitDuration = minutes <= 80 ? "60m" : minutes <= 150 ? "120m" : "half_day";
  }

  const budgetMatch = normalized.match(/(\d{2,5})\s*円/);
  if (budgetMatch) {
    const budget = Number(budgetMatch[1]);
    parsed.budget = budget <= 0 ? 0 : budget <= 500 ? 500 : budget <= 1000 ? 1000 : budget <= 1500 ? 1500 : "unlimited";
  }
  if (/無料|0円/.test(normalized)) parsed.budget = 0;

  const interestMap = [
    { pattern: /食べ|ごはん|ご飯|飲み|甘い|スイーツ|クレープ|ドリンク/, interest: "food" },
    { pattern: /ゲーム|遊び|射的|謎解き/, interest: "game" },
    { pattern: /展示|作品|美術|写真|理科|実験/, interest: "exhibition" },
    { pattern: /ステージ|ライブ|ダンス|演奏|吹奏楽/, interest: "stage" },
    { pattern: /写真|映え|撮り/, interest: "photo" },
    { pattern: /休憩|座り|静か|ゆっくり/, interest: "rest" },
    { pattern: /体験|作り|実験/, interest: "hands_on" },
    { pattern: /買い|雑貨|マーケット|物販/, interest: "shopping" },
  ];

  const nextInterests = new Set(parsed.interests);
  interestMap.forEach((item) => {
    if (item.pattern.test(normalized)) nextInterests.add(item.interest);
  });
  parsed.interests = [...nextInterests];

  if (/甘い|スイーツ|クレープ/.test(normalized) && !parsed.preferredTags.includes("sweet")) {
    parsed.preferredTags.push("sweet");
  }
  if (/静か|ゆっくり/.test(normalized) && !parsed.preferredTags.includes("quiet")) {
    parsed.preferredTags.push("quiet");
  }
  if (/友達|みんな|グループ/.test(normalized) && !parsed.preferredTags.includes("friends")) {
    parsed.preferredTags.push("friends");
  }

  if (/空いて|混んでない|混雑を避け|すいて/.test(normalized)) parsed.crowdPreference = "avoid_crowds";
  if (/人気|定番|盛り上が/.test(normalized)) parsed.crowdPreference = "popular_first";
  if (/歩きたくない|近く|移動少な/.test(normalized)) parsed.walkingPreference = "low";
  if (/たくさん歩|校内を回/.test(normalized)) parsed.walkingPreference = "high";

  return parsed;
}

function getProjectById(id) {
  return state.projects.find((project) => project.id === id);
}

function hasStamp(projectId) {
  return state.stamps.includes(projectId);
}

function collectStamp(projectId) {
  const project = getProjectById(projectId);
  if (!project) return;
  if (hasStamp(projectId)) {
    state.notice = `${project.title}のスタンプは取得済みです。`;
    render();
    return;
  }
  state.stamps = [...state.stamps, projectId];
  persistStamps();
  state.notice = `${project.title}のスタンプをGETしました。`;
  render();
}

function resetStamps() {
  state.stamps = [];
  persistStamps();
  state.notice = "スタンプをリセットしました。";
  render();
}

function setPreference(key, value) {
  state.preferences = { ...state.preferences, [key]: value };
  persistPreferences();
  state.route = recommendRoute(state.projects, state.preferences);
  render();
}

function toggleInterest(interest) {
  const set = new Set(state.preferences.interests);
  if (set.has(interest)) {
    set.delete(interest);
  } else {
    set.add(interest);
  }
  if (set.size === 0) set.add(interest);
  state.preferences = { ...state.preferences, interests: [...set] };
  persistPreferences();
  state.route = recommendRoute(state.projects, state.preferences);
  render();
}

function updateProject(projectId, field, value) {
  state.projects = state.projects.map((project) => {
    if (project.id !== projectId) return project;
    const numericFields = ["averageWaitMin", "priceMin", "priceMax", "averageDurationMin", "popularity"];
    return {
      ...project,
      [field]: numericFields.includes(field) ? Number(value) : value,
    };
  });
  persistProjects();
  state.route = recommendRoute(state.projects, state.preferences);
  render();
}

function resetProjects() {
  state.projects = cloneInitialProjects();
  state.selectedProjectId = null;
  persistProjects();
  state.route = recommendRoute(state.projects, state.preferences);
  state.notice = "サンプル企画データを初期状態に戻しました。";
  render();
}

function render() {
  if (!state.route) state.route = recommendRoute(state.projects, state.preferences);
  app.innerHTML = `
    <header class="app-header">
      <div>
        <p class="eyebrow">高校文化祭</p>
        <h1>文化祭AIコンシェルジュ</h1>
      </div>
      <nav class="view-tabs" aria-label="表示切り替え">
        ${renderTab("concierge", "おすすめ")}
        ${renderTab("projects", "企画一覧")}
        ${renderTab("stamps", "スタンプ")}
        ${renderTab("admin", "管理")}
      </nav>
    </header>
    ${state.notice ? `<div class="notice">${escapeHtml(state.notice)}</div>` : ""}
    <main>
      ${state.view === "concierge" ? renderConciergeView() : ""}
      ${state.view === "projects" ? renderProjectsView() : ""}
      ${state.view === "stamps" ? renderStampView() : ""}
      ${state.view === "admin" ? renderAdminView() : ""}
      ${renderOperationNotice()}
    </main>
    ${renderDetailDrawer()}
  `;
}

function renderTab(view, label) {
  const active = state.view === view ? "is-active" : "";
  return `<button class="tab ${active}" type="button" data-view="${view}">${label}</button>`;
}

function renderOperationNotice() {
  return `
    <section class="panel operation-notice" aria-labelledby="operation-notice-title">
      <div>
        <p class="eyebrow">実運用の注意</p>
        <h2 id="operation-notice-title">文化祭で使う前に</h2>
      </div>
      <ul>
        ${OPERATION_NOTICES.map((notice) => `<li>${escapeHtml(notice)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderConciergeView() {
  return `
    <section class="workspace">
      <div class="planner">
        ${renderPreferencePanel()}
      </div>
      <div class="results">
        ${renderRoutePanel()}
        ${renderMapPanel()}
      </div>
    </section>
  `;
}

function renderPreferencePanel() {
  const prefs = state.preferences;
  return `
    <section class="panel planner-panel" aria-labelledby="planner-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">条件</p>
          <h2 id="planner-title">今日の回り方</h2>
        </div>
        <span class="status-pill">${START_AREAS[prefs.startArea]?.label || "正門"}発</span>
      </div>

      ${renderSegment("持ち時間", "visitDuration", DURATION_OPTIONS, prefs.visitDuration)}
      ${renderSegment("予算", "budget", BUDGET_OPTIONS, prefs.budget)}

      <div class="field-group">
        <label class="field-label">好み</label>
        <div class="tag-grid">
          ${INTEREST_OPTIONS.map((option) => `
            <button class="tag ${prefs.interests.includes(option.value) ? "is-selected" : ""}" type="button" data-toggle-interest="${option.value}">
              ${option.label}
            </button>
          `).join("")}
        </div>
      </div>

      <div class="field-row">
        ${renderSmallSelect("歩く量", "walkingPreference", [
          { value: "low", label: "少なめ" },
          { value: "normal", label: "ふつう" },
          { value: "high", label: "多めOK" },
        ], prefs.walkingPreference)}
        ${renderSmallSelect("混雑", "crowdPreference", [
          { value: "avoid_crowds", label: "空き優先" },
          { value: "balanced", label: "バランス" },
          { value: "popular_first", label: "人気優先" },
        ], prefs.crowdPreference)}
      </div>

      <div class="field-row">
        ${renderSmallSelect("出発", "startArea", Object.entries(START_AREAS).map(([value, item]) => ({ value, label: item.label })), prefs.startArea)}
        ${renderSmallSelect("来場時刻", "now", [
          { value: "10:00", label: "10:00" },
          { value: "10:30", label: "10:30" },
          { value: "11:00", label: "11:00" },
          { value: "12:00", label: "12:00" },
          { value: "13:00", label: "13:00" },
          { value: "14:00", label: "14:00" },
        ], prefs.now)}
      </div>

      <div class="consult-box">
        <label class="field-label" for="consultation">相談</label>
        <textarea id="consultation" data-consultation rows="3" placeholder="例: あと40分で甘いものを食べて展示も見たい">${escapeHtml(prefs.consultationText)}</textarea>
        <button class="primary-button" type="button" data-parse-request>相談からおすすめ</button>
      </div>
    </section>
  `;
}

function renderSegment(label, key, options, selected) {
  return `
    <div class="field-group">
      <label class="field-label">${label}</label>
      <div class="segmented" role="group" aria-label="${label}">
        ${options.map((option) => `
          <button
            class="segment ${String(option.value) === String(selected) ? "is-selected" : ""}"
            type="button"
            data-set-pref="${key}"
            data-value="${option.value}"
          >
            ${option.label}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderSmallSelect(label, key, options, selected) {
  return `
    <label class="select-field">
      <span>${label}</span>
      <select data-pref-select="${key}">
        ${options.map((option) => `
          <option value="${option.value}" ${String(option.value) === String(selected) ? "selected" : ""}>${option.label}</option>
        `).join("")}
      </select>
    </label>
  `;
}

function renderRoutePanel() {
  const route = state.route;
  const routeProjects = route.stops.map((stop) => ({ stop, project: getProjectById(stop.projectId) })).filter((item) => item.project);

  return `
    <section class="panel route-panel" aria-labelledby="route-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">おすすめルート</p>
          <h2 id="route-title">${escapeHtml(route.title)}</h2>
        </div>
        <button class="ghost-button" type="button" data-refresh-route>再提案</button>
      </div>

      <p class="route-summary">${escapeHtml(route.summary)}</p>
      ${renderRouteExplanation(route)}

      <div class="metric-strip">
        <div><span>時間</span><strong>${route.totalDurationMin || 0}分</strong></div>
        <div><span>予算</span><strong>${money(route.totalBudget || 0)}</strong></div>
        <div><span>歩く量</span><strong>${route.totalWalkLevel}</strong></div>
      </div>

      ${route.emptyReason ? `<div class="empty-state">${escapeHtml(route.emptyReason)}</div>` : ""}

      <div class="route-list">
        ${routeProjects.map(({ stop, project }) => renderRouteStop(stop, project)).join("")}
      </div>

      ${route.alternatives.length > 0 ? `
        <div class="alternatives">
          <h3>代替候補</h3>
          <div class="mini-list">
            ${route.alternatives.map((project) => renderMiniProject(project)).join("")}
          </div>
        </div>
      ` : ""}
    </section>
  `;
}

function renderRouteExplanation(route) {
  return `
    <div class="explain-card">
      <div>
        <span>判断式</span>
        <strong>好み + 距離 + 混雑 + 予算 + 人気 - 待ち時間</strong>
      </div>
      <p>${escapeHtml(route.reason)} 時間、予算、歩く量の上限を超える候補は除外しています。</p>
    </div>
  `;
}

function renderRouteStop(stop, project) {
  return `
    <article class="route-stop">
      <div class="route-order">${stop.order}</div>
      <div class="route-stop-main">
        <div class="route-stop-top">
          <div>
            <p class="project-meta">${CATEGORY_LABELS[project.category]} ・ ${project.area}${project.floor} ${project.room}</p>
            <h3>${escapeHtml(project.title)}</h3>
          </div>
          ${renderCrowdBadge(project.crowdLevel)}
        </div>
        <p>${escapeHtml(stop.reason)}</p>
        <div class="stop-details">
          <span>到着 ${stop.plannedArrival}</span>
          <span>移動 ${stop.travelMin}分</span>
          <span>待ち ${stop.expectedWaitMin}分</span>
          <span>滞在 ${stop.plannedStayMin}分</span>
          <span>${money(stop.budget)}</span>
        </div>
        ${renderScoreDetails(stop)}
      </div>
      <div class="route-actions">
        ${renderStampButton(project)}
        <button class="icon-button" type="button" data-select-project="${project.id}" aria-label="${escapeHtml(project.title)}の詳細">詳細</button>
      </div>
    </article>
  `;
}

function renderScoreDetails(stop) {
  const breakdown = stop.scoreBreakdown;
  if (!breakdown) return "";

  const max = Math.max(1, ...breakdown.items.map((item) => Math.abs(item.value)));
  return `
    <details class="score-details">
      <summary>
        <span>判断根拠</span>
        <strong>${formatScore(breakdown.total)}点</strong>
      </summary>
      <div class="score-list">
        ${breakdown.items.map((item) => {
          const width = Math.round((Math.abs(item.value) / max) * 100);
          return `
            <div class="score-row ${item.value < 0 ? "is-negative" : ""}">
              <span>${escapeHtml(item.label)}</span>
              <div class="score-bar"><i style="width:${width}%"></i></div>
              <strong>${formatScore(item.value)}</strong>
              <small>${escapeHtml(item.note)}</small>
            </div>
          `;
        }).join("")}
      </div>
    </details>
  `;
}

function renderMiniProject(project) {
  return `
    <button class="mini-project" type="button" data-select-project="${project.id}">
      <span>${escapeHtml(project.title)}</span>
      <small>${CATEGORY_LABELS[project.category]} / ${money(Math.ceil((project.priceMin + project.priceMax) / 2))}</small>
    </button>
  `;
}

function renderStampButton(project) {
  const stamped = hasStamp(project.id);
  return `
    <button class="stamp-button ${stamped ? "is-stamped" : ""}" type="button" data-stamp-project="${project.id}">
      ${stamped ? "取得済み" : "スタンプGET"}
    </button>
  `;
}

function renderMapPanel() {
  const routeStopIds = new Map(state.route.stops.map((stop) => [stop.projectId, stop.order]));
  return `
    <section class="panel map-panel" aria-labelledby="map-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">校内マップ</p>
          <h2 id="map-title">現在の候補位置</h2>
        </div>
        <span class="status-pill">${state.projects.length}企画</span>
      </div>
      <div class="campus-map" role="img" aria-label="校内マップ上の企画位置">
        <div class="map-zone zone-a">A棟</div>
        <div class="map-zone zone-b">B棟</div>
        <div class="map-zone zone-gym">体育館</div>
        <div class="map-zone zone-court">中庭</div>
        <div class="map-zone zone-gate">正門</div>
        ${Object.entries(START_AREAS).map(([key, area]) => `
          <span class="start-pin ${key === state.preferences.startArea ? "is-active" : ""}" style="left:${area.x}%; top:${area.y}%;">出</span>
        `).join("")}
        ${state.projects.map((project) => {
          const order = routeStopIds.get(project.id);
          const selected = state.selectedProjectId === project.id ? "is-selected" : "";
          return `
            <button
              class="map-pin ${order ? "in-route" : ""} ${selected}"
              style="left:${project.mapX}%; top:${project.mapY}%;"
              type="button"
              data-select-project="${project.id}"
              aria-label="${escapeHtml(project.title)}"
            >
              ${order || ""}
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderProjectsView() {
  return `
    <section class="panel list-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">企画一覧</p>
          <h2>出店・展示・イベント</h2>
        </div>
        <span class="status-pill">${state.projects.filter((project) => project.status === "open").length}件開催中</span>
      </div>
      <div class="project-grid">
        ${state.projects.map((project) => renderProjectCard(project)).join("")}
      </div>
    </section>
  `;
}

function renderProjectCard(project) {
  return `
    <article class="project-card">
      <div class="project-card-top">
        <div>
          <p class="project-meta">${CATEGORY_LABELS[project.category]} ・ ${project.groupName}</p>
          <h3>${escapeHtml(project.title)}</h3>
        </div>
        ${renderStatusBadge(project.status)}
      </div>
      <p>${escapeHtml(project.description)}</p>
      <div class="project-facts">
        <span>${project.area}${project.floor} ${project.room}</span>
        <span>${project.startTime}-${project.endTime}</span>
        <span>${project.priceMin === project.priceMax ? money(project.priceMin) : `${money(project.priceMin)}-${money(project.priceMax)}`}</span>
      </div>
      <div class="card-actions">
        ${renderCrowdBadge(project.crowdLevel)}
        <div class="card-action-buttons">
          ${renderStampButton(project)}
          <button class="ghost-button" type="button" data-select-project="${project.id}">詳細</button>
        </div>
      </div>
    </article>
  `;
}

function renderStampView() {
  const stampedProjects = state.projects.filter((project) => hasStamp(project.id));
  const total = state.projects.length;
  const count = stampedProjects.length;
  const percent = total > 0 ? Math.round((count / total) * 100) : 0;
  const categoryCount = new Set(stampedProjects.map((project) => project.category)).size;

  return `
    <section class="panel stamp-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">スタンプラリー</p>
          <h2>集めたスタンプ</h2>
        </div>
        <button class="ghost-button" type="button" data-reset-stamps>リセット</button>
      </div>

      <div class="stamp-hero">
        <div class="stamp-meter" style="--progress:${percent}%">
          <strong>${count}</strong>
          <span>/${total}</span>
        </div>
        <div>
          <p class="stamp-label">コンプリート率 ${percent}%</p>
          <h3>${categoryCount}カテゴリ達成</h3>
          <div class="stamp-progress"><i style="width:${percent}%"></i></div>
        </div>
      </div>

      <div class="stamp-grid">
        ${state.projects.map((project) => renderStampCard(project)).join("")}
      </div>
    </section>
  `;
}

function renderStampCard(project) {
  const stamped = hasStamp(project.id);
  return `
    <article class="stamp-card ${stamped ? "is-stamped" : ""}">
      <div class="stamp-mark ${project.category}">
        <span>${stamped ? "GET" : CATEGORY_LABELS[project.category]}</span>
      </div>
      <div>
        <p class="project-meta">${project.area}${project.floor} ${project.room}</p>
        <h3>${escapeHtml(project.title)}</h3>
      </div>
      ${renderStampButton(project)}
    </article>
  `;
}

function renderAdminView() {
  return `
    <section class="panel admin-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">管理</p>
          <h2>企画情報の更新</h2>
        </div>
        <button class="danger-button" type="button" data-reset-data>初期データに戻す</button>
      </div>
      <div class="admin-table">
        ${state.projects.map((project) => renderAdminRow(project)).join("")}
      </div>
    </section>
  `;
}

function renderAdminRow(project) {
  return `
    <article class="admin-row">
      <div class="admin-title">
        <strong>${escapeHtml(project.title)}</strong>
        <span>${CATEGORY_LABELS[project.category]} / ${project.area}${project.floor} ${project.room}</span>
      </div>
      <label>
        <span>混雑</span>
        <select data-admin-field="crowdLevel" data-project-id="${project.id}">
          ${Object.entries(CROWD_LABELS).map(([value, label]) => `
            <option value="${value}" ${project.crowdLevel === value ? "selected" : ""}>${label}</option>
          `).join("")}
        </select>
      </label>
      <label>
        <span>状態</span>
        <select data-admin-field="status" data-project-id="${project.id}">
          ${Object.entries(STATUS_LABELS).map(([value, label]) => `
            <option value="${value}" ${project.status === value ? "selected" : ""}>${label}</option>
          `).join("")}
        </select>
      </label>
      <label>
        <span>待ち分</span>
        <input type="number" min="0" max="90" value="${project.averageWaitMin}" data-admin-field="averageWaitMin" data-project-id="${project.id}" />
      </label>
      <label>
        <span>最低額</span>
        <input type="number" min="0" max="5000" value="${project.priceMin}" data-admin-field="priceMin" data-project-id="${project.id}" />
      </label>
      <label>
        <span>最高額</span>
        <input type="number" min="0" max="5000" value="${project.priceMax}" data-admin-field="priceMax" data-project-id="${project.id}" />
      </label>
      <label>
        <span>説明</span>
        <input type="text" value="${escapeAttribute(project.description)}" data-admin-field="description" data-project-id="${project.id}" />
      </label>
    </article>
  `;
}

function renderDetailDrawer() {
  const project = state.selectedProjectId ? getProjectById(state.selectedProjectId) : null;
  if (!project) return "";
  return `
    <aside class="detail-drawer" aria-label="企画詳細">
      <div class="drawer-card">
        <div class="drawer-head">
          <div>
            <p class="project-meta">${CATEGORY_LABELS[project.category]} ・ ${project.groupName}</p>
            <h2>${escapeHtml(project.title)}</h2>
          </div>
          <button class="icon-button" type="button" data-close-detail aria-label="詳細を閉じる">×</button>
        </div>
        <div class="detail-visual ${project.category}">
          <span>${CATEGORY_LABELS[project.category]}</span>
        </div>
        <p>${escapeHtml(project.description)}</p>
        <dl class="detail-list">
          <div><dt>場所</dt><dd>${project.area}${project.floor} ${project.room}</dd></div>
          <div><dt>時間</dt><dd>${project.startTime}-${project.endTime}</dd></div>
          <div><dt>価格</dt><dd>${project.priceMin === project.priceMax ? money(project.priceMin) : `${money(project.priceMin)}-${money(project.priceMax)}`}</dd></div>
          <div><dt>所要</dt><dd>${project.averageDurationMin}分 + 待ち${project.averageWaitMin}分</dd></div>
          <div><dt>混雑</dt><dd>${CROWD_LABELS[project.crowdLevel]}</dd></div>
          <div><dt>状態</dt><dd>${STATUS_LABELS[project.status]}</dd></div>
        </dl>
        <div class="tag-row">
          ${project.tags.map((tag) => `<span>${tagLabel(tag)}</span>`).join("")}
        </div>
        <p class="notes">${escapeHtml(project.notes)}</p>
        ${renderStampButton(project)}
      </div>
    </aside>
  `;
}

function renderCrowdBadge(level) {
  return `<span class="badge crowd-${level}">${CROWD_LABELS[level]}</span>`;
}

function renderStatusBadge(status) {
  return `<span class="badge status-${status}">${STATUS_LABELS[status]}</span>`;
}

function tagLabel(tag) {
  const labels = {
    sweet: "甘い",
    photo: "写真映え",
    friends: "友達向け",
    meal: "食事",
    popular: "人気",
    drink: "ドリンク",
    hands_on: "体験",
    quiet: "静か",
    rest: "休憩",
    walking: "周遊",
    free: "無料",
    family: "家族向け",
    short: "短時間",
    shopping: "物販",
  };
  return labels[tag] || tag;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("\n", " ");
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.view) {
    state.view = target.dataset.view;
    state.notice = "";
    persistView();
    render();
    return;
  }

  if (target.dataset.setPref) {
    const key = target.dataset.setPref;
    const raw = target.dataset.value;
    const value = key === "budget" && raw !== "unlimited" ? Number(raw) : raw;
    setPreference(key, value);
    return;
  }

  if (target.dataset.toggleInterest) {
    toggleInterest(target.dataset.toggleInterest);
    return;
  }

  if (target.dataset.stampProject) {
    collectStamp(target.dataset.stampProject);
    return;
  }

  if (target.dataset.refreshRoute !== undefined) {
    state.route = recommendRoute(state.projects, state.preferences);
    state.notice = "現在の条件で再提案しました。";
    render();
    return;
  }

  if (target.dataset.parseRequest !== undefined) {
    const text = app.querySelector("[data-consultation]")?.value || "";
    state.preferences = parseConsultation(text, { ...state.preferences, consultationText: text });
    persistPreferences();
    state.route = recommendRoute(state.projects, state.preferences);
    state.notice = "相談文から条件を反映しました。";
    render();
    return;
  }

  if (target.dataset.selectProject) {
    state.selectedProjectId = target.dataset.selectProject;
    render();
    return;
  }

  if (target.dataset.closeDetail !== undefined) {
    state.selectedProjectId = null;
    render();
    return;
  }

  if (target.dataset.resetData !== undefined) {
    resetProjects();
    return;
  }

  if (target.dataset.resetStamps !== undefined) {
    resetStamps();
  }
});

app.addEventListener("change", (event) => {
  const target = event.target;
  if (target.dataset.prefSelect) {
    setPreference(target.dataset.prefSelect, target.value);
    return;
  }

  if (target.dataset.adminField && target.dataset.projectId) {
    updateProject(target.dataset.projectId, target.dataset.adminField, target.value);
  }
});

app.addEventListener("input", (event) => {
  const target = event.target;
  if (target.dataset.consultation !== undefined) {
    state.preferences = { ...state.preferences, consultationText: target.value };
    persistPreferences();
  }
});

state.route = recommendRoute(state.projects, state.preferences);
render();

if ("serviceWorker" in navigator && window.isSecureContext) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
