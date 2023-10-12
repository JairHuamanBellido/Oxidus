import Color from "color";

export function generateShadcnColorAttributes({
  hex,
  darkColors,
  lightColors,
}: {
  hex: string;
  darkColors: string[];
  lightColors: string[];
}) {
  return {
    light: {
      background: lightColors[lightColors.length - 1],
      foreground: Color(hex).mix(Color("black"), 0.9).hex(),
      primary: hex,
      primaryForeground: Color("white").hex(),
      card: lightColors[lightColors.length - 1],
      cardForeground: Color(hex).mix(Color("black"), 0.9).hex(),
      popover: Color("white").hex(),
      popoverForeground: Color(hex).mix(Color("black"), 0.9).hex(),
      secondary: Color(hex).mix(Color("white"), 0.85).hex(),
      secondaryForeground: darkColors[0],
      muted: Color(hex).mix(Color("white"), 0.90).hex(),
      mutedForeground: Color("white").hsl().darken(0.6).hex(),
      accent: Color(hex).mix(Color("white"), 0.95).hex(),
      accentForeground: hex,
      border: Color("white").hsl().darken(0.1).hex(),
      input: Color("white").hsl().darken(0.1).hex(),
      ring: hex,
    },
    dark: {
      background: darkColors[0],
      foreground: Color(hex).mix(Color("white"), 0.85).hex(),
      primary: hex,
      primaryForeground: Color("white").hex(),
      card: darkColors[0],
      cardForeground: Color(hex).mix(Color("white"), 0.85).hex(),
      popover: darkColors[0],
      popoverForeground: Color(hex).mix(Color("white"), 0.85).hex(),
      secondary: Color("black").mix(Color(hex), 0.35).hex(),
      secondaryForeground: Color("white").hex(),
      muted: Color(darkColors[0]).mix(Color("white"), 0.1).hex(),
      mutedForeground: Color(darkColors[0]).mix(Color("white"), 0.5).hex(),
      accent: Color("black").mix(Color(hex), 0.35).hex(),
      accentForeground: Color(hex).mix(Color("white"), 0.85).hex(),
      border: Color("black").mix(Color("white"), 0.15).hex(),
      input: Color("black").mix(Color("white"), 0.15).hex(),
      ring: hex,
    },
  };
}
