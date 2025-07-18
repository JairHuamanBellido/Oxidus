import { ThemeVariables } from "@/src/contexts/ThemeContext/ThemeContext";

export interface ColorPaletteStrategy {
  generateColorPalette({
    hex,
    shadcnVariables,
  }: {
    hex: string;
    shadcnVariables?: ThemeVariables["cssVariables"];
  }): {
    light: ThemeVariables["cssVariables"]["shadcn"]["light"];
    dark: ThemeVariables["cssVariables"]["shadcn"]["dark"];
  };
}

export class ColorPaletteGenerator {
  strategy: ColorPaletteStrategy;

  constructor(strategy: ColorPaletteStrategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy: ColorPaletteStrategy) {
    this.strategy = strategy;
  }
  

  generateColorPalette({
    hex,
    shadcnVariables,
  }: {
    hex: string;
    shadcnVariables?: ThemeVariables["cssVariables"];
  }) {
    return this.strategy.generateColorPalette({ hex, shadcnVariables });
  }
}
