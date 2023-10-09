"use client";

import {
  ThemeContextDebugger,
  ThemeContextProvider,
  useThemeContext,
} from "@/components/contexts/ThemeContext/ThemeContext";
import { HexInput } from "@/app/components/HexInput";
import { RGBSliders } from "@/app/components/RGBSliders";
import DarkThemeSettingSection from "./components/DarkThemeSettingSection";
import LightThemeSettingSection from "./components/LightThemeSettingSection";
import HorizontalPaletteColors from "./components/HorizontalPaletteColors";

export default function Home() {
  return (
    <ThemeContextProvider>
      <PageContent />

      <ThemeContextDebugger />
    </ThemeContextProvider>
  );
}

function PageContent() {
  return (
    <main className={`min-h-screen p-8 flex flex-col gap-6`}>
      <HexInput />

      <RGBSliders />

      <DarkThemeSettingSection />
      <LightThemeSettingSection />
      <HorizontalPaletteColors />
    </main>
  );
}
