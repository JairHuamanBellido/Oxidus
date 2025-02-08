import { ShadcnVariables } from "@/src/contexts/ThemeContext/ThemeContext";

export interface IOxidusThemeIndexDB {
  id?: string;
  name: string;
  mainColorHex: string;
  lightTheme: ShadcnVariables;
  darkTheme: ShadcnVariables;
  createdAt: Date;
}
