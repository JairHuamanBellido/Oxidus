"use client";

import { ThemeContextProvider } from "@/components/contexts/ThemeContext/ThemeContext";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ThemeModifier from "./components/ThemeModifier";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TypographyMuted from "./components/typography/muted";
import Link from "next/link";

export default function Home() {
  return (
    <ThemeContextProvider>
      <main className="flex">
        <ThemeModifier />
        <Sidebar />
        <div className="w-[calc(100vw-260px)] h-screen relative">
          <Header />
          <div className="flex w-full h-[calc(100vw-80px)] items-center justify-center">
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
                <TypographyMuted>
                  Don't have an account?{" "}
                  <Button asChild variant={"link"}>
                    <Link href={"/"}> Sign Up</Link>
                  </Button>
                </TypographyMuted>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </ThemeContextProvider>
  );
}
