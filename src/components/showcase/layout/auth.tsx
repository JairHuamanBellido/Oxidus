import Link from "next/link";
import { Button } from "../../shadcn/button";
import { Input } from "../../shadcn/input";
import { Label } from "../../shadcn/label";
import TypographyMuted from "../../typography/muted";
import TypographyH4 from "../../typography/h4";
import {
  Bell,
  Fingerprint,
  KeyRound,
  Shield,
  ShieldCheck,
  User,
} from "lucide-react";
import TypographyParagraph from "../../typography/paragraph";

import TypographyH2 from "../../typography/h2";
import { AnimatedBeam } from "../../ui/animated-beam";
import { useRef } from "react";

function AnimationContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative flex w-5/6 items-center justify-center"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between items-center">
          <div
            ref={div1Ref}
            className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-3xl z-10 flex items-center justify-center"
          >
            <User />
          </div>
          <div
            ref={div2Ref}
            className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-3xl z-10 flex items-center justify-center"
          >
            <Fingerprint />
          </div>
          <div className="flex flex-col gap-10 ">
            <div
              ref={div3Ref}
              className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-3xl z-10 flex items-center justify-center"
            >
              <ShieldCheck />
            </div>
            <div
              ref={div4Ref}
              className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-3xl z-10 flex items-center justify-center"
            >
              <KeyRound />
            </div>
            <div
              ref={div5Ref}
              className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-3xl z-10 flex items-center justify-center"
            >
              <Bell />
            </div>
          </div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div2Ref}
        duration={3}
        gradientStartColor="hsl(var(--chart-3))"
        gradientStopColor="hsl(var(--primary))"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div2Ref}
        duration={3}
        gradientStartColor="hsl(var(--chart-3))"
        gradientStopColor="hsl(var(--primary))"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div2Ref}
        duration={3}
        gradientStartColor="hsl(var(--chart-3))"
        gradientStopColor="hsl(var(--primary))"
      />

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        gradientStartColor="hsl(var(--chart-3))"
        gradientStopColor="hsl(var(--primary))"
      />
    </div>
  );
}

function AuthForm() {
  return (
    <div className="w-full relative h-full flex items-center bg-gradient-to-l from-primary/10 from-30% to-background to-95%">
      <div className="w-full h-full flex flex-col justify-between p-8">
        <div className="flex items-center space-x-2 text-foreground">
          <Shield className="text-primary" />
          <TypographyParagraph className="font-bold">
            Pied Piper Security Networks
          </TypographyParagraph>
        </div>
        <div className="w-[600px]">
          <div className="space-y-2 mb-12">
            <TypographyH4 className="font-semibold text-4xl">
              Log in to your Account
            </TypographyH4>
            <TypographyMuted>
              Welcome back! Enter your credentials
            </TypographyMuted>
          </div>
          <div className="space-y-4">
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
                Don't have an account?
                <Button
                  asChild
                  variant={"link"}
                  className="text-foreground pl-[1px]"
                >
                  <Link className="underline text-foreground" href={"/"}>
                    Sign Up
                  </Link>
                </Button>
              </TypographyMuted>
            </div>
          </div>
        </div>
        <div>
          <TypographyMuted>
            © 2024 Jair Orlando by Oxidus | All Rights Reserved
          </TypographyMuted>
        </div>
      </div>
      <div className="w-full relative h-full flex flex-col items-start justify-center p-12 space-y-8">
        <AnimationContainer />
        <TypographyH2 className="leading-none border-none p-0">
          Security Guarantee
        </TypographyH2>
        <TypographyParagraph className="opacity-80 w-3/4">
          We are committed to protecting your data and systems with the most
          advanced technologies and best practices in the industry.
        </TypographyParagraph>
      </div>
    </div>
  );
}
export default function AuthenticationShowcase() {
  return (
    <div className="w-full h-full p-4 flex rounded">
      <AuthForm />
    </div>
  );
}
