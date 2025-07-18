import {
  ShadcnVariables,
  ThemeVariables,
} from "@/src/contexts/ThemeContext/ThemeContext";
import Color from "color";
import { getContrastInfo } from "@/src/utils/colors";
import { ColorPaletteStrategy } from "./ColorPaletteGenerator";

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

export class SoftPaletteStrategy implements ColorPaletteStrategy {
  generateColorPalette({
    hex,
    shadcnVariables,
  }: {
    hex: string;
    shadcnVariables?: ThemeVariables["cssVariables"];
  }): {
    light: ShadcnVariables;
    dark: ShadcnVariables;
  } {
    const primaryHSL = Color(hex).hsl();

    const primary = hex;
    const primaryForeground = Color({ hex: primary }).isDark()
      ? Color(hex).mix(Color("white"), 0.9).hex()
      : Color(hex).mix(Color("black"), 0.9).hex();

    const lightBackground = Color(hex)
      .mix(Color("white"), 0.97)
      .darken(0.01)
      .hex();

    const lightForeground = Color(hex).mix(Color("black"), 0.9).hex();
    const lightCard = "#ffffff";
    const lightCardForeground = Color(hex).mix(Color("black"), 0.9).hex();
    const lightPopover = Color(hex).mix(Color("white"), 0.98).hex();
    const lightPopoverForeground = Color(hex).mix(Color("black"), 0.9).hex();
    const lightSecondary = Color(hex).mix(Color("white"), 0.85).hex();
    const lightSecondaryForeground = "#000000";
    const lightMuted = Color(hex).mix(Color("white"), 0.9).hex();
    const lightMutedForeground = Color("white").hsl().darken(0.6).hex();
    const lightAccent = Color(hex).mix(Color("white"), 0.9).hex();
    const lightAccentForeground = Color(hex).mix(Color("black"), 0.85).hex();
    const lightInput = Color(hex)
      .mix(Color("black"), 0.5)
      .mix(Color("white"), 0.75)
      .hex();
    const lightBorder = Color("#000")
      .mix(Color(hex).mix(Color(lightBackground), 0.92), 0.92)
      .hex();

    const lightRing = hex;
    const lightChart1 = hex;
    const lightChart2 = Color(hex).mix(Color("white"), 0.15).hex();
    const lightChart3 = Color(hex).mix(Color("white"), 0.35).hex();
    const lightChart4 = Color(hex).mix(Color("white"), 0.45).hex();
    const lightChart5 = Color(hex).mix(Color("white"), 0.55).hex();

    const lightSidebarBackground = Color(hex)
      .mix(Color("white"), 0.97)
      .darken(0.03)
      .hex();

    const lightSidebarForeground = Color(hex).mix(Color("black"), 0.9).hex();
    const lightSidebarPrimary = primary;
    const lightSidebarPrimaryForeground = Color({ hex: primary }).isDark()
      ? Color(hex).mix(Color("white"), 0.9).hex()
      : Color(hex).mix(Color("black"), 0.9).hex();
    const lightSidebarAccent = primary;
    const lightSidebarAccentForeground = Color({ hex: primary }).isDark()
      ? Color(hex).mix(Color("white"), 0.9).hex()
      : Color(hex).mix(Color("black"), 0.9).hex();
    const lightSidebarBorder = Color(hex).mix(Color("white"), 0.8).hex();
    const lightSidebarRing = hex;

    const darkBackground = primaryHSL
      .darken(0.95)
      .lighten(2)
      .saturate(-0.75)
      .hex();
    const darkForeground = Color(hex).mix(Color("white"), 0.85).hex();

    const darkCard = primaryHSL.darken(0.95).lighten(2.8).saturate(-0.63).hex();
    const darkCardForeground = Color(hex).mix(Color("white"), 0.85).hex();

    const darkPopover = primaryHSL
      .darken(0.95)
      .lighten(4)
      .saturate(-0.92)
      .hex();
    const darkPopoverForeground = Color(hex).mix(Color("white"), 0.85).hex();

    const darkSecondary = Color("black").mix(Color(hex), 0.35).hex();
    const darkSecondaryForeground = Color("white").hex();

    const darkMuted = Color(hex).darken(0.93).lighten(4).saturate(-0.95).hex();
    const darkMutedForeground = Color("#000000").mix(Color("white"), 0.5).hex();

    const darkAccent = Color("black").mix(Color(hex), 0.35).hex();
    const darkAccentForeground = Color(hex).mix(Color("white"), 0.85).hex();
    const darkInput = Color(hex)
      .mix(Color("white"), 0.6)
      .mix(Color("black"), 0.75)
      .hex();

    const darkBorder = Color("#343434")
      .mix(Color(hex).mix(Color(darkBackground), 0.8), 0.3)
      .hex();

    const darkRing = hex;
    const darkChart1 = hex;
    const darkChart2 = Color(hex).mix(Color("black"), 0.15).hex();
    const darkChart3 = Color(hex).mix(Color("black"), 0.35).hex();
    const darkChart4 = Color(hex).mix(Color("black"), 0.45).hex();
    const darkChart5 = Color(hex).mix(Color("black"), 0.55).hex();

    const darkSidebarBackground = primaryHSL
      .darken(0.95)
      .lighten(4.2)
      .saturate(-0.85)
      .hex();
    const darkSidebarForeground = Color(hex).mix(Color("white"), 0.85).hex();
    const darkSidebarPrimary = primary;
    const darkSidebarPrimaryForeground = Color({ hex: primary }).isDark()
      ? Color(hex).mix(Color("white"), 0.9).hex()
      : Color(hex).mix(Color("black"), 0.9).hex();
    const darkSidebarAccent = primary;
    const darkSidebarAccentForeground = Color({ hex: primary }).isDark()
      ? Color(hex).mix(Color("white"), 0.9).hex()
      : Color(hex).mix(Color("black"), 0.9).hex();
    const darkSidebarBorder = Color(hex).mix(Color("black"), 0.8).hex();
    const darkSidebarRing = hex;

    return {
      light: {
        background: {
          color: setColorBasedOnIsLocked(
            lightBackground,
            "light",
            "background",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.background.isLocked,
        },
        foreground: {
          color: setColorBasedOnIsLocked(
            lightForeground,
            "light",
            "foreground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.foreground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: lightBackground,
            foregroundColor: lightForeground,
          }),
        },
        primary: {
          color: setColorBasedOnIsLocked(
            primary,
            "light",
            "primary",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.primary.isLocked,
        },
        primaryForeground: {
          color: setColorBasedOnIsLocked(
            primaryForeground,
            "light",
            "primaryForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.primaryForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: primary,
            foregroundColor: primaryForeground,
          }),
        },
        card: {
          color: setColorBasedOnIsLocked(
            lightCard,
            "light",
            "card",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.card.isLocked,
        },
        cardForeground: {
          color: setColorBasedOnIsLocked(
            lightCardForeground,
            "light",
            "cardForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.cardForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: lightCard,
            foregroundColor: lightCardForeground,
          }),
        },
        popover: {
          color: setColorBasedOnIsLocked(
            lightPopover,
            "light",
            "popover",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.popover.isLocked,
        },
        popoverForeground: {
          color: setColorBasedOnIsLocked(
            lightPopoverForeground,
            "light",
            "popoverForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.popoverForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: lightPopover,
            foregroundColor: lightPopoverForeground,
          }),
        },
        secondary: {
          color: setColorBasedOnIsLocked(
            lightSecondary,
            "light",
            "secondary",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.secondary.isLocked,
        },
        secondaryForeground: {
          color: setColorBasedOnIsLocked(
            lightSecondaryForeground,
            "light",
            "secondaryForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.secondaryForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: lightSecondary,
            foregroundColor: lightSecondaryForeground,
          }),
        },
        muted: {
          color: setColorBasedOnIsLocked(
            lightMuted,
            "light",
            "muted",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.muted.isLocked,
        },
        mutedForeground: {
          color: setColorBasedOnIsLocked(
            lightMutedForeground,
            "light",
            "mutedForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.mutedForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: lightMuted,
            foregroundColor: lightMutedForeground,
          }),
        },
        accent: {
          color: setColorBasedOnIsLocked(
            lightAccent,
            "light",
            "accent",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.accent.isLocked,
        },
        accentForeground: {
          color: setColorBasedOnIsLocked(
            lightAccentForeground,
            "light",
            "accentForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.accentForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: lightAccent,
            foregroundColor: lightAccentForeground,
          }),
        },
        border: {
          color: setColorBasedOnIsLocked(
            lightBorder,
            "light",
            "border",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.border.isLocked,
        },
        input: {
          color: setColorBasedOnIsLocked(
            lightInput,
            "light",
            "input",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.input.isLocked,
        },
        ring: {
          color: setColorBasedOnIsLocked(
            lightRing,
            "light",
            "ring",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.ring.isLocked,
        },
        chart1: {
          color: setColorBasedOnIsLocked(
            lightChart1,
            "light",
            "chart1",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.chart1.isLocked,
        },
        chart2: {
          color: setColorBasedOnIsLocked(
            lightChart2,
            "light",
            "chart2",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.chart2.isLocked,
        },
        chart3: {
          color: setColorBasedOnIsLocked(
            lightChart3,
            "light",
            "chart3",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.chart3.isLocked,
        },
        chart4: {
          color: setColorBasedOnIsLocked(
            lightChart4,
            "light",
            "chart4",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.chart4.isLocked,
        },
        chart5: {
          color: setColorBasedOnIsLocked(
            lightChart5,
            "light",
            "chart5",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.chart5.isLocked,
        },
        sidebarBackground: {
          color: setColorBasedOnIsLocked(
            lightSidebarBackground,
            "light",
            "sidebarBackground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.sidebarBackground.isLocked,
        },
        sidebarForeground: {
          color: setColorBasedOnIsLocked(
            lightSidebarForeground,
            "light",
            "sidebarForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.sidebarForeground.isLocked,
        },
        sidebarPrimary: {
          color: setColorBasedOnIsLocked(
            lightSidebarPrimary,
            "light",
            "sidebarPrimary",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.sidebarPrimary.isLocked,
        },
        sidebarPrimaryForeground: {
          color: setColorBasedOnIsLocked(
            lightSidebarPrimaryForeground,
            "light",
            "sidebarPrimaryForeground",
            shadcnVariables,
          ),
          isLocked:
            shadcnVariables?.shadcn.light.sidebarPrimaryForeground.isLocked,
        },
        sidebarAccent: {
          color: setColorBasedOnIsLocked(
            lightSidebarAccent,
            "light",
            "sidebarAccent",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.sidebarAccent.isLocked,
        },
        sidebarAccentForeground: {
          color: setColorBasedOnIsLocked(
            lightSidebarAccentForeground,
            "light",
            "sidebarAccentForeground",
            shadcnVariables,
          ),
          isLocked:
            shadcnVariables?.shadcn.light.sidebarAccentForeground.isLocked,
        },
        sidebarBorder: {
          color: setColorBasedOnIsLocked(
            lightSidebarBorder,
            "light",
            "sidebarBorder",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.sidebarBorder.isLocked,
        },
        sidebarRing: {
          color: setColorBasedOnIsLocked(
            lightSidebarRing,
            "light",
            "sidebarRing",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.light.sidebarRing.isLocked,
        },
      },
      dark: {
        background: {
          color: setColorBasedOnIsLocked(
            darkBackground,
            "dark",
            "background",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.background.isLocked,
        },
        foreground: {
          color: setColorBasedOnIsLocked(
            darkForeground,
            "dark",
            "foreground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.foreground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: darkBackground,
            foregroundColor: darkForeground,
          }),
        },
        primary: {
          color: setColorBasedOnIsLocked(
            primary,
            "dark",
            "primary",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.primary.isLocked,
        },
        primaryForeground: {
          color: setColorBasedOnIsLocked(
            primaryForeground,
            "dark",
            "primaryForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.primaryForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: primary,
            foregroundColor: primaryForeground,
          }),
        },
        card: {
          color: setColorBasedOnIsLocked(
            darkCard,
            "dark",
            "card",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.card.isLocked,
        },
        cardForeground: {
          color: setColorBasedOnIsLocked(
            darkCardForeground,
            "dark",
            "cardForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.cardForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: darkCard,
            foregroundColor: darkCardForeground,
          }),
        },
        popover: {
          color: setColorBasedOnIsLocked(
            darkPopover,
            "dark",
            "popover",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.popover.isLocked,
        },
        popoverForeground: {
          color: setColorBasedOnIsLocked(
            darkPopoverForeground,
            "dark",
            "popoverForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.popoverForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: darkPopover,
            foregroundColor: darkPopoverForeground,
          }),
        },
        secondary: {
          color: setColorBasedOnIsLocked(
            darkSecondary,
            "dark",
            "secondary",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.secondary.isLocked,
        },
        secondaryForeground: {
          color: setColorBasedOnIsLocked(
            darkSecondaryForeground,
            "dark",
            "secondaryForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.secondaryForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: darkSecondary,
            foregroundColor: darkSecondaryForeground,
          }),
        },
        muted: {
          color: setColorBasedOnIsLocked(
            darkMuted,
            "dark",
            "muted",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.muted.isLocked,
        },
        mutedForeground: {
          color: setColorBasedOnIsLocked(
            darkMutedForeground,
            "dark",
            "mutedForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.mutedForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: darkMuted,
            foregroundColor: darkMutedForeground,
          }),
        },
        accent: {
          color: setColorBasedOnIsLocked(
            darkAccent,
            "dark",
            "accent",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.accent.isLocked,
        },
        accentForeground: {
          color: setColorBasedOnIsLocked(
            darkAccentForeground,
            "dark",
            "accentForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.accentForeground.isLocked,
          contrastChecker: getContrastInfo({
            backgroundColor: darkAccent,
            foregroundColor: darkAccentForeground,
          }),
        },
        border: {
          color: setColorBasedOnIsLocked(
            darkBorder,
            "dark",
            "border",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.border.isLocked,
        },
        input: {
          color: setColorBasedOnIsLocked(
            darkInput,
            "dark",
            "input",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.input.isLocked,
        },
        ring: {
          color: setColorBasedOnIsLocked(
            darkRing,
            "dark",
            "ring",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.ring.isLocked,
        },
        chart1: {
          color: setColorBasedOnIsLocked(
            darkChart1,
            "dark",
            "chart1",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.chart1.isLocked,
        },
        chart2: {
          color: setColorBasedOnIsLocked(
            darkChart2,
            "dark",
            "chart2",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.chart2.isLocked,
        },
        chart3: {
          color: setColorBasedOnIsLocked(
            darkChart3,
            "dark",
            "chart3",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.chart3.isLocked,
        },
        chart4: {
          color: setColorBasedOnIsLocked(
            darkChart4,
            "dark",
            "chart4",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.chart4.isLocked,
        },
        chart5: {
          color: setColorBasedOnIsLocked(
            darkChart5,
            "dark",
            "chart5",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.chart5.isLocked,
        },
        sidebarBackground: {
          color: setColorBasedOnIsLocked(
            darkSidebarBackground,
            "dark",
            "sidebarBackground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.sidebarBackground.isLocked,
        },
        sidebarForeground: {
          color: setColorBasedOnIsLocked(
            darkSidebarForeground,
            "dark",
            "sidebarForeground",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.sidebarForeground.isLocked,
        },
        sidebarPrimary: {
          color: setColorBasedOnIsLocked(
            darkSidebarPrimary,
            "dark",
            "sidebarPrimary",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.sidebarPrimary.isLocked,
        },
        sidebarPrimaryForeground: {
          color: setColorBasedOnIsLocked(
            darkSidebarPrimaryForeground,
            "dark",
            "sidebarPrimaryForeground",
            shadcnVariables,
          ),
          isLocked:
            shadcnVariables?.shadcn.dark.sidebarPrimaryForeground.isLocked,
        },
        sidebarAccent: {
          color: setColorBasedOnIsLocked(
            darkSidebarAccent,
            "dark",
            "sidebarAccent",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.sidebarAccent.isLocked,
        },
        sidebarAccentForeground: {
          color: setColorBasedOnIsLocked(
            darkSidebarAccentForeground,
            "dark",
            "sidebarAccentForeground",
            shadcnVariables,
          ),
          isLocked:
            shadcnVariables?.shadcn.dark.sidebarAccentForeground.isLocked,
        },
        sidebarBorder: {
          color: setColorBasedOnIsLocked(
            darkSidebarBorder,
            "dark",
            "sidebarBorder",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.sidebarBorder.isLocked,
        },
        sidebarRing: {
          color: setColorBasedOnIsLocked(
            darkSidebarRing,
            "dark",
            "sidebarRing",
            shadcnVariables,
          ),
          isLocked: shadcnVariables?.shadcn.dark.sidebarRing.isLocked,
        },
      },
    };
  }
}
