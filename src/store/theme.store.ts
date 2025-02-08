import { create } from "zustand";
import { IOxidusThemeIndexDB } from "../infrastructure/interface/OxidusThemeModel";

interface ThemeStore {
  theme: IOxidusThemeIndexDB | undefined;
  setTheme: (theme: IOxidusThemeIndexDB | undefined) => void;
}

export const useThemeStore = create<ThemeStore>()((set) => ({
  theme: undefined,
  setTheme: (theme) => set({ theme }),
}));
