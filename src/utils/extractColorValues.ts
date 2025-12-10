import Color from "color";
import { oklch } from "culori";

export function extractHSLValues(color: string, withPrefix: boolean = false) {
  const hue = {
    h: Color(color).hsl().hue().toFixed(2).toString(),
    s: Color(color).hsl().saturationl().toFixed(2).toString(),
    l: Color(color).hsl().lightness().toFixed(2).toString(),
  };

  return `${withPrefix ? "hsl(" : ""}${hue.h} ${hue.s}% ${hue.l}%${withPrefix ? ")" : ""}`;
}

export function extractOklchValues(color: string, withPrefix: boolean = false) {
  const rgb = Color(color).rgb();

  const oklchParsed = oklch({
    r: rgb.red() / 255,
    g: rgb.green() / 255,
    b: rgb.blue() / 255,
    mode: "rgb",
  });

  return `${withPrefix ? "oklch(" : ""}${oklchParsed.l.toFixed(3)} ${oklchParsed.c.toFixed(3)} ${oklchParsed.h?.toFixed(3) || 0.0}${withPrefix ? ")" : ""}`;
}
