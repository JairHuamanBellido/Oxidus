"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Color from "color";
import { getColorsList } from "@/src/utils/getColorsList";
import { generateShadcnColorAttributes } from "@/src/utils/generateShadcnColorAttributes";

export interface ColorState {
  color: string;
  isLocked?: boolean;
}
export interface ShadcnVariables {
  background: ColorState;
  foreground: ColorState;
  primary: ColorState;
  primaryForeground: ColorState;
  card: ColorState;
  cardForeground: ColorState;
  popover: ColorState;
  popoverForeground: ColorState;
  secondary: ColorState;
  secondaryForeground: ColorState;
  muted: ColorState;
  mutedForeground: ColorState;
  accent: ColorState;
  accentForeground: ColorState;
  border: ColorState;
  input: ColorState;
  ring: ColorState;
}

export type ThemeVariables = {
  mainColor: number;
  hex: string;
  r: number;
  g: number;
  b: number;
  darkColorsAmount: number;
  darkness: number;
  darkColorsHueAngle: number;
  darkColorsSaturation: number;
  lightColorsAmount: number;
  lightness: number;
  lightColorsHueAngle: number;
  lightColorsSaturation: number;
  darkColors: string[];
  lightColors: string[];
  cssVariables: {
    shadcn: {
      light: ShadcnVariables;
      dark: ShadcnVariables;
    };
  };
  mode: "dark" | "light";
};

export type ThemeContextType = ThemeVariables & {
  setMainColor: (color: number) => void;
  setRGB: (r: number, g: number, b: number) => void;
  setHex: (hex: string) => void;
  setDarkThemeSettings: (
    darkThemeSettings: Pick<
      ThemeVariables,
      | "darkColorsAmount"
      | "darkColorsHueAngle"
      | "darkness"
      | "darkColorsSaturation"
    >,
  ) => void;
  setLightThemeSettings: (
    lightThemeSettings: Pick<
      ThemeVariables,
      | "lightColorsAmount"
      | "lightColorsHueAngle"
      | "lightness"
      | "lightColorsSaturation"
    >,
  ) => void;
  setMode: (mode: "dark" | "light") => void;
  setCssVariables: (cssVariables: ThemeVariables["cssVariables"]) => void;
  setTheme: (theme: ThemeVariables) => void;
};

const DEFAULT_COLOR = Color("#1350f4").rgbNumber()

function getThemeVariablesDefaultValues(): ThemeVariables {
  const color = Color(DEFAULT_COLOR);
  const darkColors = getColorsList(5, 100, "black", 0, 0, color.hex()).map(
    (color) => Color(color).hex(),
  );
  const lightColors = getColorsList(5, 100, "white", 0, 0, color.hex()).map(
    (color) => Color(color).hex(),
  );

  const hex = color.hex();
  return {
    mainColor: DEFAULT_COLOR,
    mode: "dark",
    hex,
    r: color.red(),
    g: color.green(),
    b: color.blue(),
    darkColorsAmount: 5,
    darkness: 100,
    darkColorsHueAngle: 0,
    darkColorsSaturation: 0,
    lightColorsAmount: 5,
    lightness: 100,
    lightColorsHueAngle: 0,
    lightColorsSaturation: 0,
    darkColors,
    lightColors,
    cssVariables: {
      shadcn: generateShadcnColorAttributes({ hex, darkColors, lightColors }),
    },
  };
}

const ThemeContext = createContext<ThemeContextType>({
  ...getThemeVariablesDefaultValues(),
  setMainColor: () => {},
  setRGB: () => {},
  setHex: () => {},
  setDarkThemeSettings: () => {},
  setLightThemeSettings: () => {},
  setMode: () => {},
  setCssVariables: () => {},
  setTheme: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [variables, setVariables] = useState<ThemeVariables>(() =>
    getThemeVariablesDefaultValues(),
  );

  useEffect(() => {
    const { hex, lightColors, darkColors, cssVariables } = variables;

    setVariables({
      ...variables,
      cssVariables: {
        shadcn: generateShadcnColorAttributes({
          hex,
          darkColors,
          lightColors,
          shadcnVariables: cssVariables,
        }),
      },
    });
  }, [variables.hex, variables.lightColors, variables.darkColors]);

  function updatePaletteThemes(mainColor: string = variables.hex) {
    return {
      lightColors: getColorsList(
        variables.lightColorsAmount,
        variables.lightness,
        "white",
        variables.lightColorsHueAngle,
        variables.lightColorsSaturation,
        mainColor,
      ),
      darkColors: getColorsList(
        variables.darkColorsAmount,
        variables.darkness,
        "black",
        variables.darkColorsHueAngle,
        variables.darkColorsSaturation,
        mainColor,
      ),
    };
  }

  function setTheme(theme: ThemeVariables) {
    setVariables(theme);
  }

  function setMainColor(color: number) {
    const obj = Color(color);

    setVariables({
      ...variables,
      mainColor: color,
      hex: obj.hex(),
      r: obj.red(),
      g: obj.green(),
      b: obj.blue(),
      ...updatePaletteThemes(obj.hex()),
    });
  }

  function setRGB(r: number, g: number, b: number) {
    const obj = Color({ r, g, b });

    setVariables({
      ...variables,
      mainColor: obj.rgbNumber(),
      hex: obj.hex(),
      r,
      g,
      b,
      ...updatePaletteThemes(obj.hex()),
    });
  }

  function setHex(hex: string) {
    const obj = Color(hex);

    setVariables({
      ...variables,
      mainColor: obj.rgbNumber(),
      hex,
      r: obj.red(),
      g: obj.green(),
      b: obj.blue(),
      ...updatePaletteThemes(hex),
    });
  }

  function setDarkThemeSettings(
    darkThemeSettings: Pick<
      ThemeVariables,
      | "darkColorsAmount"
      | "darkColorsHueAngle"
      | "darkness"
      | "darkColorsSaturation"
    >,
  ) {
    const {
      darkColorsAmount,
      darkColorsHueAngle,
      darkColorsSaturation,
      darkness,
    } = darkThemeSettings;

    setVariables({
      ...variables,
      darkColorsAmount,
      darkColorsHueAngle,
      darkColorsSaturation,
      darkness,
      darkColors: getColorsList(
        darkColorsAmount,
        darkness,
        "black",
        darkColorsHueAngle,
        darkColorsSaturation,
        variables.hex,
      ),
    });
  }
  function setLightThemeSettings(
    lightThemeSettings: Pick<
      ThemeVariables,
      | "lightColorsAmount"
      | "lightColorsHueAngle"
      | "lightness"
      | "lightColorsSaturation"
    >,
  ) {
    const {
      lightColorsAmount,
      lightColorsHueAngle,
      lightColorsSaturation,
      lightness,
    } = lightThemeSettings;

    setVariables({
      ...variables,
      lightColorsAmount,
      lightColorsHueAngle,
      lightColorsSaturation,
      lightness,
      lightColors: getColorsList(
        lightColorsAmount,
        lightness,
        "white",
        lightColorsHueAngle,
        lightColorsSaturation,
        variables.hex,
      ),
    });
  }

  function setMode(mode: "dark" | "light") {
    setVariables({ ...variables, mode });
  }

  function setCssVariables(cssVariables: ThemeVariables["cssVariables"]) {
    setVariables({ ...variables, cssVariables });
  }

  return (
    <ThemeContext.Provider
      value={{
        ...variables,
        setMainColor,
        setRGB,
        setHex,
        setDarkThemeSettings,
        setLightThemeSettings,
        setMode,
        setCssVariables,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeContextDebugger() {
  const { setMainColor, setRGB, setHex, ...vars } = useThemeContext();

  return (
    <div className={"fixed bottom-0 max-h-[400px] overflow-auto right-0 p-4"}>
      <pre>{JSON.stringify(vars, null, 2)}</pre>
    </div>
  );
}
