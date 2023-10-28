import {
  ShadcnVariables,
  ThemeVariables,
} from "@/src/contexts/ThemeContext/ThemeContext";
import Color from "color";

const setColorBasedOnIsLocked = (
  newColor: string,
  theme: "light" | "dark",
  variable: keyof ShadcnVariables,
  shadcnVariables?: ThemeVariables["cssVariables"],
): string => {
  if (!!shadcnVariables) {
    return shadcnVariables?.shadcn[theme][variable].isLocked
      ? shadcnVariables?.shadcn[theme][variable].color || "transparent"
      : newColor;
  }
  return newColor;
};

export function generateShadcnColorAttributes({
  hex,
  darkColors,
  lightColors,
  shadcnVariables,
}: {
  hex: string;
  darkColors: string[];
  lightColors: string[];
  shadcnVariables?: ThemeVariables["cssVariables"];
}) {
  return {
    light: {
      background: {
        color: setColorBasedOnIsLocked(
          lightColors[lightColors.length - 1],
          "light",
          "background",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.background.isLocked,
      },
      foreground: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("black"), 0.9).hex(),
          "light",
          "foreground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.foreground.isLocked,
      },
      primary: {
        color: setColorBasedOnIsLocked(
          hex,
          "light",
          "primary",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.primary.isLocked,
      },
      primaryForeground: {
        color: setColorBasedOnIsLocked(
          Color("white").hex(),
          "light",
          "primaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.primaryForeground.isLocked,
      },
      card: {
        color: setColorBasedOnIsLocked(
          lightColors[lightColors.length - 1],
          "light",
          "card",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.card.isLocked,
      },
      cardForeground: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("black"), 0.9).hex(),
          "light",
          "cardForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.cardForeground.isLocked,
      },
      popover: {
        color: setColorBasedOnIsLocked(
          Color("white").hex(),
          "light",
          "popover",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.popover.isLocked,
      },
      popoverForeground: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("black"), 0.9).hex(),
          "light",
          "popoverForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.popoverForeground.isLocked,
      },
      secondary: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.85).hex(),
          "light",
          "secondary",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.secondary.isLocked,
      },
      secondaryForeground: {
        color: setColorBasedOnIsLocked(
          darkColors[0],
          "light",
          "secondaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.secondaryForeground.isLocked,
      },
      muted: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.9).hex(),
          "light",
          "muted",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.muted.isLocked,
      },
      mutedForeground: {
        color: setColorBasedOnIsLocked(
          Color("white").hsl().darken(0.6).hex(),
          "light",
          "mutedForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.mutedForeground.isLocked,
      },
      accent: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.90).hex(),
          "light",
          "accent",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.accent.isLocked,
      },
      accentForeground: {
        color: setColorBasedOnIsLocked(
          hex,
          "light",
          "accentForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.accentForeground.isLocked,
      },
      border: {
        color: setColorBasedOnIsLocked(
          Color("white").hsl().darken(0.1).hex(),
          "light",
          "border",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.border.isLocked,
      },
      input: {
        color: setColorBasedOnIsLocked(
          Color("white").hsl().darken(0.1).hex(),
          "light",
          "input",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.light.input.isLocked,
      },
      ring: {
        color: setColorBasedOnIsLocked(hex, "light", "ring", shadcnVariables),
        isLocked: shadcnVariables?.shadcn.light.ring.isLocked,
      },
    },
    dark: {
      background: {
        color: setColorBasedOnIsLocked(
          darkColors[0],
          "dark",
          "background",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.background.isLocked,
      },
      foreground: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.85).hex(),
          "dark",
          "foreground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.foreground.isLocked,
      },
      primary: {
        color: setColorBasedOnIsLocked(hex, "dark", "primary", shadcnVariables),
        isLocked: shadcnVariables?.shadcn.dark.primary.isLocked,
      },
      primaryForeground: {
        color: setColorBasedOnIsLocked(
          Color("white").hex(),
          "dark",
          "primaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.primaryForeground.isLocked,
      },
      card: {
        color: setColorBasedOnIsLocked(
          darkColors[0],
          "dark",
          "card",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.card.isLocked,
      },
      cardForeground: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.85).hex(),
          "dark",
          "cardForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.cardForeground.isLocked,
      },
      popover: {
        color: setColorBasedOnIsLocked(
          darkColors[0],
          "dark",
          "popover",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.popover.isLocked,
      },
      popoverForeground: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.85).hex(),
          "dark",
          "popoverForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.popoverForeground.isLocked,
      },
      secondary: {
        color: setColorBasedOnIsLocked(
          Color("black").mix(Color(hex), 0.35).hex(),
          "dark",
          "secondary",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.secondary.isLocked,
      },
      secondaryForeground: {
        color: setColorBasedOnIsLocked(
          Color("white").hex(),
          "dark",
          "secondaryForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.secondaryForeground.isLocked,
      },
      muted: {
        color: setColorBasedOnIsLocked(
          Color(darkColors[0]).mix(Color("white"), 0.1).hex(),
          "dark",
          "muted",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.muted.isLocked,
      },
      mutedForeground: {
        color: setColorBasedOnIsLocked(
          Color(darkColors[0]).mix(Color("white"), 0.5).hex(),
          "dark",
          "mutedForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.mutedForeground.isLocked,
      },
      accent: {
        color: setColorBasedOnIsLocked(
          Color("black").mix(Color(hex), 0.35).hex(),
          "dark",
          "accent",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.accent.isLocked,
      },
      accentForeground: {
        color: setColorBasedOnIsLocked(
          Color(hex).mix(Color("white"), 0.85).hex(),
          "dark",
          "accentForeground",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.accentForeground.isLocked,
      },
      border: {
        color: setColorBasedOnIsLocked(
          Color("black").mix(Color("white"), 0.15).hex(),
          "dark",
          "border",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.border.isLocked,
      },
      input: {
        color: setColorBasedOnIsLocked(
          Color("black").mix(Color("white"), 0.15).hex(),
          "dark",
          "input",
          shadcnVariables,
        ),
        isLocked: shadcnVariables?.shadcn.dark.input.isLocked,
      },
      ring: {
        color: setColorBasedOnIsLocked(hex, "dark", "ring", shadcnVariables),
        isLocked: shadcnVariables?.shadcn.dark.ring.isLocked,
      },
    },
  };
}
