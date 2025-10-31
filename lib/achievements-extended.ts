// Extended achievement system

export const extendedAchievements = [
  {
    id: "first-visit",
    title: "Welcome Explorer",
    description: "Visited the Developer Universe",
    icon: "🌟",
    unlocked: false,
  },
  {
    id: "terminal-master",
    title: "Terminal Master",
    description: "Used 10 terminal commands",
    icon: "💻",
    unlocked: false,
  },
  {
    id: "planet-explorer",
    title: "Planet Explorer",
    description: "Visited all project planets",
    icon: "🚀",
    unlocked: false,
  },
  {
    id: "secret-finder",
    title: "Secret Finder",
    description: "Found the hidden easter egg",
    icon: "🥚",
    unlocked: false,
  },
  {
    id: "theme-switcher",
    title: "Theme Switcher",
    description: "Tried all theme modes",
    icon: "🎨",
    unlocked: false,
  },
  {
    id: "speed-reader",
    title: "Speed Reader",
    description: "Scrolled through entire portfolio in under 2 minutes",
    icon: "⚡",
    unlocked: false,
  },
  {
    id: "night-owl",
    title: "Night Owl",
    description: "Visited between midnight and 4am",
    icon: "🦉",
    unlocked: false,
  },
  {
    id: "game-master",
    title: "Game Master",
    description: "Scored 10+ in the typing game",
    icon: "🎮",
    unlocked: false,
  },
  {
    id: "social-butterfly",
    title: "Social Butterfly",
    description: "Clicked all social media links",
    icon: "🦋",
    unlocked: false,
  },
  {
    id: "completionist",
    title: "Completionist",
    description: "Viewed every section",
    icon: "🏆",
    unlocked: false,
  },
  {
    id: "return-visitor",
    title: "Return Visitor",
    description: "Came back to the portfolio",
    icon: "🔄",
    unlocked: false,
  },
  {
    id: "code-curious",
    title: "Code Curious",
    description: "Opened browser developer tools",
    icon: "🔍",
    unlocked: false,
  },
];

// Achievement checking functions
export const checkNightOwlAchievement = (): boolean => {
  const hour = new Date().getHours();
  return hour >= 0 && hour < 4;
};

export const checkSpeedReaderAchievement = (startTime: number): boolean => {
  const elapsed = Date.now() - startTime;
  return elapsed < 120000; // 2 minutes
};

