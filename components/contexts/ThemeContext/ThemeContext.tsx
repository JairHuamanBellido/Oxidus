"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import Color from "color";

export type ThemeVariables = {
  mainColor: number;
  hex: string;
  r: number;
  g: number;
  b: number;
};

export type ThemeContextType = ThemeVariables & {
  setMainColor: (color: number) => void;
  setRGB: (r: number, g: number, b: number) => void;
  setHex: (hex: string) => void;
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
  };
}

const ThemeContext = createContext<ThemeContextType>({
  ...getThemeVariablesDefaultValues(),
  setMainColor: () => {},
  setRGB: () => {},
  setHex: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [variables, setVariables] = useState<ThemeVariables>(() =>
    getThemeVariablesDefaultValues(),
  );

  function setMainColor(color: number) {
    const obj = Color(color);

    setVariables({
      mainColor: color,
      hex: obj.hex(),
      r: obj.red(),
      g: obj.green(),
      b: obj.blue(),
    });
  }

  function setRGB(r: number, g: number, b: number) {
    const obj = Color({ r, g, b });

    setVariables({ mainColor: obj.rgbNumber(), hex: obj.hex(), r, g, b });
  }

  function setHex(hex: string) {
    const obj = Color(hex);

    setVariables({
      mainColor: obj.rgbNumber(),
      hex,
      r: obj.red(),
      g: obj.green(),
      b: obj.blue(),
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        ...variables,
        setMainColor,
        setRGB,
        setHex,
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
