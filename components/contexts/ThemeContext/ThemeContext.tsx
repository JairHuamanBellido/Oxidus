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

export interface ShadcnVariables {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  border: string;
  input: string;
  ring: string;
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
  setDarkColors: (colors: string[]) => void;
  setLightColors: (colors: string[]) => void;
};

const DEFAULT_COLOR = 0x0802a3;

function getThemeVariablesDefaultValues(): ThemeVariables {
  const color = Color(DEFAULT_COLOR);
  const darkColors = getColorsList(5, 96, "black", 0, 0, color.hex()).map(
    (color) => Color(color).hex(),
  );
  const lightColors = getColorsList(5, 96, "white", 0, 0, color.hex()).map(
    (color) => Color(color).hex(),
  );

  const hex = color.hex();
  return {
    mainColor: DEFAULT_COLOR,
    hex,
    r: color.red(),
    g: color.green(),
    b: color.blue(),
    darkColorsAmount: 5,
    darkness: 96,
    darkColorsHueAngle: 0,
    darkColorsSaturation: 0,
    lightColorsAmount: 5,
    lightness: 96,
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
  setDarkColors: () => {},
  setLightColors: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [variables, setVariables] = useState<ThemeVariables>(() =>
    getThemeVariablesDefaultValues(),
  );

  useEffect(() => {
    const { hex, lightColors, darkColors } = variables;

    setVariables({
      ...variables,
      cssVariables: {
        shadcn: generateShadcnColorAttributes({ hex, darkColors, lightColors }),
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

  function setDarkColors(colors: string[]) {
    setDarkColors(colors);
  }
  function setLightColors(colors: string[]) {
    setDarkColors(colors);
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
        setDarkColors,
        setLightColors,
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
