import { Button } from "@/src/components/shadcn/button";
import { Input } from "@/src/components/shadcn/input";
import { Label } from "@/src/components/shadcn/label";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import {  Workflow } from "lucide-react";
import Link from "next/link";

function Authform() {
  return (
    <div className="w-full max-w-[600px] relative">
      <div className="mb-12 space-y-1">
        <TypographyH2 className="font-normal text-4xl">
          Welcome Back!
        </TypographyH2>
        <TypographyParagraph className="font-light text-">
          Enter your credentials to access your account
        </TypographyParagraph>
      </div>

      <div className="flex flex-col space-y-6 w-full">
        <div className="space-y-2">
          <Label htmlFor="username">Email</Label>
          <Input
            name="username"
            type="email"
            placeholder="Type your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            placeholder="******"
            type="password"
            required
          />
        </div>

        <SubmitButton />
      </div>
      <div className="mt-6 flex items-center space-x-1 ">
        <TypographyParagraph className="opacity-60 ">
          Don't have an account?
        </TypographyParagraph>
        <Link href={"#"} className="text-primary underline font-semibold">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

function SubmitButton() {
  return (
    <Button
      size="lg"
      type="submit"
      className="w-full h-[50px] font-semibold text-base"
    >
      LogIn
    </Button>
  );
}

export default function AuthBlock2() {
  return (
    <div className="w-full h-[900px] overflow-hidden relative flex border rounded-2xl">
      <div className="bg-background  w-full max-w-[900px] flex flex-col items-start justify-between px-12 py-8 relative">
        <div className="flex items-center space-x-2 text-foreground">
          <Workflow className="text-primary" />
          <TypographyParagraph className="font-bold">
            JairAI Flow
          </TypographyParagraph>
        </div>
        <Authform />
        <TypographyMuted>2024 Jair Acme, All right reserved</TypographyMuted>
      </div>
      <div className=" w-full min-w-[400px]">
        <div
          style={{
            background: `conic-gradient(from 90deg at 50% 100%, color-mix(in srgb, hsl(var(--background)) 98%, hsl(var(--primary))) 50%, hsl(var(--primary) / 0.4), color-mix(in srgb, hsl(var(--background)) 95%, hsl(var(--primary))), hsl(var(--primary) / 0.4), color-mix(in srgb, hsl(var(--background)) 98%, hsl(var(--primary))))`,
          }}
          className="w-full h-full flex items-center justify-start rounded-xl px-12"
        >
          <div className="  text-left w-3/4 space-y-4">
            <TypographyH2 className="text-foreground  text-4xl font-normal">
              Streamline Your Workflows with Powerful Integrations
            </TypographyH2>
            <TypographyParagraph className="opacity-80 text-xl">
              Design and automate workflows to save time, boost efficiency, and
              stay focused on what matters most.
            </TypographyParagraph>
          </div>
        </div>
      </div>
    </div>
  );
}
