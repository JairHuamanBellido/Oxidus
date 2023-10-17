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

const Layout = ({ children }: { children: ReactNode }) => {
  const {
    hex,
    cssVariables: {
      shadcn: { light, dark },
    },
    mode,
  } = useThemeContext();

  const [bg, setBg] = useState<string>("");

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
            <div className="flex items-center justify-center bg-background rounded w-full h-full">
              <div className="w-[600px] space-y-4">
                <div className="space-y-1 ">
                  <Label>Username</Label>
                  <Input placeholder="Type your username" />
                </div>
                <div className="space-y-1 ">
                  <Label>Password</Label>
                  <Input placeholder="Type your password" type="password" />
                </div>
                <div className="flex flex-col space-y-2">
                  <Button>Sign In</Button>
                  <Button variant={"secondary"}>Secondary</Button>
                  <TypographyMuted>
                    Don't have an account?{" "}
                    <Button asChild variant={"link"}>
                      <Link href={"/"}> Sign Up</Link>
                    </Button>
                  </TypographyMuted>{" "}
                </div>
              </div>
            </div>
          </Layout>
        </div>
        <ThemeVariablesSettingSidebar />
      </main>
    </ThemeContextProvider>
  );
}
