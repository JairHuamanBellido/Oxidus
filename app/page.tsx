"use client";

import { Slider } from "@/components/ui/slider";
import {
  ThemeContextDebugger,
  ThemeContextProvider,
  useThemeContext,
} from "@/components/contexts/ThemeContext/ThemeContext";
import { useEffect, useState } from "react";
import { isHexColor } from "@/lib/colors";
import { Input } from "@/components/ui/input";
import { HexInput } from "@/app/components/HexInput";
import { RGBSliders } from "@/app/components/RGBSliders";

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
    </main>
  );
}
