import { create } from 'zustand';

export type ThemeMode = 'universe' | 'terminal' | 'cyberpunk' | 'professional';

interface ThemeStore {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  mode: 'universe',
  setMode: (mode) => set({ mode }),
  isTerminalOpen: false,
  toggleTerminal: () => set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
}));

interface NavigationStore {
  currentPlanet: string | null;
  setCurrentPlanet: (planet: string | null) => void;
  isNavigating: boolean;
  setIsNavigating: (isNavigating: boolean) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  currentPlanet: null,
  setCurrentPlanet: (planet) => set({ currentPlanet: planet }),
  isNavigating: false,
  setIsNavigating: (isNavigating) => set({ isNavigating }),
}));

interface AchievementStore {
  unlockedAchievements: string[];
  unlockAchievement: (id: string) => void;
}

export const useAchievementStore = create<AchievementStore>((set) => ({
  unlockedAchievements: [],
  unlockAchievement: (id) =>
    set((state) => ({
      unlockedAchievements: [...state.unlockedAchievements, id],
    })),
}));

