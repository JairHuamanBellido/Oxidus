import { ShadcnVariables } from "@/src/contexts/ThemeContext/ThemeContext";

export interface ISaveOxidusTheme {
  name: string;
  mainColorHex: string;
  lightTheme: ShadcnVariables;
  darkTheme: ShadcnVariables;
  createdAt: Date;
}
