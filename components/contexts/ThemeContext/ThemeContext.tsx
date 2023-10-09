"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import Color from "color";
import { getColorsList } from "@/src/utils/getColorsList";

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

const DEFAULT_COLOR = 0x1d9a6c;

function getThemeVariablesDefaultValues(): ThemeVariables {
  const color = Color(DEFAULT_COLOR);

  return {
    mainColor: DEFAULT_COLOR,
    hex: color.hex(),
    r: color.red(),
    g: color.green(),
    b: color.blue(),
    darkColorsAmount: 5,
    darkness: 90,
    darkColorsHueAngle: 0,
    darkColorsSaturation: 0,
    lightColorsAmount: 5,
    lightness: 90,
    lightColorsHueAngle: 0,
    lightColorsSaturation: 0,
    darkColors: getColorsList(5, 90, "black", 0, 0, color.hex()),
    lightColors: getColorsList(5, 90, "white", 0, 0, color.hex()),
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

  function updatePaletteThemes() {
    return {
      lightColors: getColorsList(
        variables.lightColorsAmount,
        variables.lightness,
        "white",
        variables.lightColorsHueAngle,
        variables.lightColorsSaturation,
        variables.hex,
      ),
      darkColors: getColorsList(
        variables.darkColorsAmount,
        variables.darkness,
        "black",
        variables.darkColorsHueAngle,
        variables.darkColorsSaturation,
        variables.hex,
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
      ...updatePaletteThemes(),
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
      ...updatePaletteThemes(),
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
      ...updatePaletteThemes(),
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
    <div className={"fixed bottom-0 right-0 p-4"}>
      <pre>{JSON.stringify(vars, null, 2)}</pre>
    </div>
  );
}
