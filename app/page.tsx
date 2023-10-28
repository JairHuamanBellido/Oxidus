"use client";

import {
  ThemeContextProvider,
  useThemeContext,
} from "@/src/contexts/ThemeContext/ThemeContext";

import Sidebar from "../src/components/sidebar/Sidebar";
import Header from "../src/components/header";
import ThemeModifier from "../src/components/theme/ThemeModifier";
import { Label } from "@/src/components/shadcn/label";
import { Input } from "@/src/components/shadcn/input";
import { Button } from "@/src/components/shadcn/button";
import TypographyMuted from "../src/components/typography/muted";
import Link from "next/link";
import ThemeVariablesSettingSidebar from "../src/components/sidebar/ThemeVariablesSettingSidebar";
import Color from "color";
import { ReactNode, useEffect, useState } from "react";
import ShowCase from "@/src/components/showcase";

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
      className="flex w-full h-[calc(100vh-80px)] relative p-8"
    >
      {children}
    </div>
  );
};
export default function Home() {
  return (
    <ThemeContextProvider>
      <main className="flex">
        <ThemeModifier />
        <Sidebar />
        <div className="w-[calc(100vw-600px)] h-screen relative">
          <Header />
          <Layout>
            <div className="flex items-center overflow-auto p-8 justify-center bg-background rounded w-full h-full relative">
              <ShowCase />
            </div>
          </Layout>
        </div>
        <ThemeVariablesSettingSidebar />
      </main>
    </ThemeContextProvider>
  );
}
