"use client";

import {
  ThemeContextDebugger,
  ThemeContextProvider,
  useThemeContext,
} from "@/components/contexts/ThemeContext/ThemeContext";
import { HexInput } from "@/app/components/HexInput";
import { RGBSliders } from "@/app/components/RGBSliders";
import DarkThemeSettingSection from "./components/DarkThemeSettingSection";

export default function Home() {
  return (
    <ThemeContextProvider>
      <PageContent />

      <ThemeContextDebugger />
    </ThemeContextProvider>
  );
}

function PageContent() {
  const { hex } = useThemeContext();

  return (
    <main className={`min-h-screen p-8 flex flex-col gap-6`}>
      <span>Color</span>

      <HexInput />

      <RGBSliders />

      <div className={"w-24 h-24"} style={{ backgroundColor: hex }}></div>
      <DarkThemeSettingSection />
    </main>
  );
}
