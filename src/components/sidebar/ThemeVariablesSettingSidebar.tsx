"use client";
import {
  ContrastInfo,
  ShadcnVariables,
  useThemeContext,
} from "@/src/contexts/ThemeContext/ThemeContext";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/popover";
import { ColorPicker, useColor } from "react-color-palette";
import { useEffect } from "react";
import { Button } from "../shadcn/button";
import { Lock, Unlock } from "lucide-react";
import TypographyH3 from "../typography/h3";
import AccessibilityIndicatorIcon from "../icon/accesibility-indicator-icon";
import TypographyParagraph from "../typography/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn/accordion";

function SmallColorBlockRounded({ hex }: { hex: string }) {
  return (
    <div className="w-6 h-6 rounded border" style={{ background: hex }}></div>
  );
}

function CssVariablesContainer({
  variable,
  hex,
  changeCssVariables,
  theme,
  contrastInfo,
  isLocked,
}: {
  variable: keyof ShadcnVariables;
  hex: string;
  isLocked: boolean | undefined;
  changeCssVariables: (
    cssVariable: keyof ShadcnVariables,
    hex: string,
    theme: "dark" | "light",
    lock?: boolean | undefined,
  ) => void;
  theme: "dark" | "light";
  contrastInfo?: ContrastInfo;
}) {
  const [color, setColor] = useColor(hex);

  useEffect(() => {
    changeCssVariables(variable, color.hex, theme, isLocked);
  }, [color]);
  return (
    <div className="relative flex flex-col">
      <div className="w-full flex items-center justify-between">
        <TypographyParagraph className=" max-w-[150px] truncate capitalize">
          {variable}
        </TypographyParagraph>

        <div className="flex items-center">
          {!!contrastInfo && (
            <AccessibilityIndicatorIcon contrastInfo={contrastInfo} />
          )}
          <Button
            variant={"ghost"}
            className="w-fit p-1 h-fit bg-transparent"
            onClick={() => {
              console.log("isLocked", isLocked);
              changeCssVariables(variable, hex, theme, !isLocked);
            }}
          >
            {isLocked ? (
              <>
                <Lock className="text-secondary-foreground" height={16} />
              </>
            ) : (
              <>
                <Unlock className="text-secondary-foreground/40" height={16} />
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="flex items-center rounded space-x-2 ">
        <Popover>
          <PopoverTrigger className="pr-2 rounded-lg flex items-center space-x-2 hover:bg-muted">
            <SmallColorBlockRounded hex={hex} />
            <TypographyParagraph className="max-w-[150px] truncate">
              {hex}
            </TypographyParagraph>
          </PopoverTrigger>
          <PopoverContent>
            <ColorPicker
              color={color}
              hideInput={["hsv"]}
              hideAlpha
              onChange={setColor}
            />
          </PopoverContent>
        </Popover>

        <div className="flex items-center"></div>
      </div>
    </div>
  );
}

export default function ThemeVariablesSettingSidebar() {
  const {
    cssVariables: {
      shadcn: { light, dark },
    },
    setCssVariables,
    mode,
  } = useThemeContext();

  const changeCssVariables = (
    cssVariable: keyof ShadcnVariables,
    hex: string,
    theme: "dark" | "light",
    lock: boolean | undefined = undefined,
  ) => {
    const isLightTheme = theme === "light";

    const themeUpdate = {
      shadcn: {
        dark: isLightTheme
          ? { ...dark }
          : {
              ...dark,
              [cssVariable]: {
                color: hex,
                isLocked:
                  lock !== undefined ? lock : dark[cssVariable].isLocked,
              },
            },
        light: isLightTheme
          ? {
              ...light,
              [cssVariable]: {
                color: hex,
                isLocked:
                  lock !== undefined ? lock : light[cssVariable].isLocked,
              },
            }
          : { ...light },
      },
    };
    setCssVariables(themeUpdate);
  };
  return (
    <div className="min-w-[300px] overflow-y-auto p-4 h-[calc(100vh_-_80px)] relative overflow-auto  bg-background">
      <TypographyH3 className="mb-4">
        {mode === "dark" ? "Dark variables" : "Light variables"}
      </TypographyH3>
      <div className="h-fit flex flex-col space-y-2  overflow-auto">
        <Accordion type="multiple" className="w-full space-y-4">
          <AccordionItem
            value="item-1"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Primary</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="primary"
                hex={mode === "dark" ? dark.primary.color : light.primary.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.primary.isLocked
                    : light.primary.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.primary.contrastChecker
                    : light.primary.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="primaryForeground"
                hex={
                  mode === "dark"
                    ? dark.primaryForeground.color
                    : light.primaryForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.primaryForeground.isLocked
                    : light.primaryForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.primaryForeground.contrastChecker
                    : light.primaryForeground.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="background"
                hex={
                  mode === "dark"
                    ? dark.background.color
                    : light.background.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.background.isLocked
                    : light.background.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.background.contrastChecker
                    : light.background.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="foreground"
                hex={
                  mode === "dark"
                    ? dark.foreground.color
                    : light.foreground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.foreground.isLocked
                    : light.foreground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.foreground.contrastChecker
                    : light.foreground.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Card</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="card"
                hex={mode === "dark" ? dark.card.color : light.card.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.card.isLocked : light.card.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.card.contrastChecker
                    : light.card.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="cardForeground"
                hex={
                  mode === "dark"
                    ? dark.cardForeground.color
                    : light.cardForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.cardForeground.isLocked
                    : light.cardForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.cardForeground.contrastChecker
                    : light.cardForeground.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Popover</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="popover"
                hex={mode === "dark" ? dark.popover.color : light.popover.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.popover.isLocked
                    : light.popover.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.popover.contrastChecker
                    : light.popover.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="popoverForeground"
                hex={
                  mode === "dark"
                    ? dark.popoverForeground.color
                    : light.popoverForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.popoverForeground.isLocked
                    : light.popoverForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.popoverForeground.contrastChecker
                    : light.popoverForeground.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Secondary</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="secondary"
                hex={
                  mode === "dark" ? dark.secondary.color : light.secondary.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.secondary.isLocked
                    : light.secondary.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.secondary.contrastChecker
                    : light.secondary.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="secondaryForeground"
                hex={
                  mode === "dark"
                    ? dark.secondaryForeground.color
                    : light.secondaryForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.secondaryForeground.isLocked
                    : light.secondaryForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.secondaryForeground.contrastChecker
                    : light.secondaryForeground.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Muted</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="muted"
                hex={mode === "dark" ? dark.muted.color : light.muted.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.muted.isLocked : light.muted.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.muted.contrastChecker
                    : light.muted.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="mutedForeground"
                hex={
                  mode === "dark"
                    ? dark.mutedForeground.color
                    : light.mutedForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.mutedForeground.isLocked
                    : light.mutedForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.mutedForeground.contrastChecker
                    : light.mutedForeground.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Accent</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="accent"
                hex={mode === "dark" ? dark.accent.color : light.accent.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.accent.isLocked : light.accent.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.accent.contrastChecker
                    : light.accent.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="accentForeground"
                hex={
                  mode === "dark"
                    ? dark.accentForeground.color
                    : light.accentForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.accentForeground.isLocked
                    : light.accentForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.accentForeground.contrastChecker
                    : light.accentForeground.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-7"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Charts</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="chart1"
                hex={mode === "dark" ? dark.chart1.color : light.chart1.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.chart1.isLocked : light.chart1.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.chart1.contrastChecker
                    : light.chart1.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="chart2"
                hex={mode === "dark" ? dark.chart2.color : light.chart2.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.chart2.isLocked : light.chart2.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.chart2.contrastChecker
                    : light.chart2.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="chart3"
                hex={mode === "dark" ? dark.chart3.color : light.chart3.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.chart3.isLocked : light.chart3.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.chart3.contrastChecker
                    : light.chart3.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="chart4"
                hex={mode === "dark" ? dark.chart4.color : light.chart4.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.chart4.isLocked : light.chart4.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.chart4.contrastChecker
                    : light.chart4.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="chart5"
                hex={mode === "dark" ? dark.chart5.color : light.chart5.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.chart5.isLocked : light.chart5.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.chart5.contrastChecker
                    : light.chart5.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-8"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Sidebar</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="sidebarBackground"
                hex={
                  mode === "dark"
                    ? dark.sidebarBackground.color
                    : light.sidebarBackground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarBackground.isLocked
                    : light.sidebarBackground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarBackground.contrastChecker
                    : light.sidebarBackground.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="sidebarForeground"
                hex={
                  mode === "dark"
                    ? dark.sidebarForeground.color
                    : light.sidebarForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarForeground.isLocked
                    : light.sidebarForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarForeground.contrastChecker
                    : light.sidebarForeground.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="sidebarPrimary"
                hex={
                  mode === "dark"
                    ? dark.sidebarPrimary.color
                    : light.sidebarPrimary.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarPrimary.isLocked
                    : light.sidebarPrimary.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarPrimary.contrastChecker
                    : light.sidebarPrimary.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="sidebarPrimaryForeground"
                hex={
                  mode === "dark"
                    ? dark.sidebarPrimaryForeground.color
                    : light.sidebarPrimaryForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarPrimaryForeground.isLocked
                    : light.sidebarPrimaryForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarPrimaryForeground.contrastChecker
                    : light.sidebarPrimaryForeground.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="sidebarAccent"
                hex={
                  mode === "dark"
                    ? dark.sidebarAccent.color
                    : light.sidebarAccent.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarAccent.isLocked
                    : light.sidebarAccent.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarAccent.contrastChecker
                    : light.sidebarAccent.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="sidebarAccentForeground"
                hex={
                  mode === "dark"
                    ? dark.sidebarAccentForeground.color
                    : light.sidebarAccentForeground.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarAccentForeground.isLocked
                    : light.sidebarAccentForeground.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarAccentForeground.contrastChecker
                    : light.sidebarAccentForeground.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="sidebarBorder"
                hex={
                  mode === "dark"
                    ? dark.sidebarBorder.color
                    : light.sidebarBorder.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarBorder.isLocked
                    : light.sidebarBorder.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarBorder.contrastChecker
                    : light.sidebarBorder.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="sidebarRing"
                hex={
                  mode === "dark"
                    ? dark.sidebarRing.color
                    : light.sidebarRing.color
                }
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark"
                    ? dark.sidebarRing.isLocked
                    : light.sidebarRing.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.sidebarRing.contrastChecker
                    : light.sidebarRing.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-9"
            className="border rounded-xl px-4 w-full"
          >
            <AccordionTrigger>Border / Input / Ring</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <CssVariablesContainer
                variable="border"
                hex={mode === "dark" ? dark.border.color : light.border.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.border.isLocked : light.border.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.border.contrastChecker
                    : light.border.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="input"
                hex={mode === "dark" ? dark.input.color : light.input.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.input.isLocked : light.input.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.input.contrastChecker
                    : light.input.contrastChecker
                }
              />
              <CssVariablesContainer
                variable="ring"
                hex={mode === "dark" ? dark.ring.color : light.ring.color}
                changeCssVariables={changeCssVariables}
                theme={mode}
                isLocked={
                  mode === "dark" ? dark.ring.isLocked : light.ring.isLocked
                }
                contrastInfo={
                  mode === "dark"
                    ? dark.ring.contrastChecker
                    : light.ring.contrastChecker
                }
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
