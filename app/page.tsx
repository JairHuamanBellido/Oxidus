"use client";

import {
  ThemeContextProvider,
  useThemeContext,
} from "@/src/contexts/ThemeContext/ThemeContext";
import Header from "../src/components/header";
import ThemeModifier from "../src/components/theme/ThemeModifier";
import Color from "color";
import { ReactNode, useEffect, useState } from "react";
import ShowCase from "@/src/components/showcase";
import ThemeVariablesSettingSidebar from "../src/components/sidebar/ThemeVariablesSettingSidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const {
    cssVariables: {
      shadcn: { light, dark },
    },
    mode,
  } = useThemeContext();

  const background =
    mode === "light" ? light.background.color : dark.background.color;
  const mixColor = mode === "light" ? "black" : "white";
  const backgroundVariant = Color(Color(background).hex())
    .mix(Color(mixColor), 0.05)
    .hex();

  return (
    <div
      style={{ background: backgroundVariant }}
      className="flex w-full h-[calc(100vh-80px)] relative"
    >
      {children}
    </div>
  );
};
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted)
    return (
      <div className="w-full h-screen flex items-center justify-center loading-container">
        <p>Loading...</p>
      </div>
    );
  return (
    <ThemeContextProvider>
      <main className="flex">
        <ThemeModifier />
        <div className="w-screen h-screen relative">
          <Header />
          <Layout>
            <ThemeVariablesSettingSidebar />
            <div className="flex items-center overflow-auto justify-center bg-background p-4 rounded w-full h-full relative">
              <ShowCase />
            </div>
          </Layout>
        </div>
      </main>
    </ThemeContextProvider>
  );
}
