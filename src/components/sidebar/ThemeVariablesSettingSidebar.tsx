import {
  ShadcnVariables,
  useThemeContext,
} from "@/src/contexts/ThemeContext/ThemeContext";
import TypographyH4 from "../typography/h4";
import TypographyMuted from "../typography/muted";
import TypographyParagraph from "../typography/paragraph";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/popover";
import { RadioGroup, RadioGroupItem } from "@/src/components/shadcn/radio-group";
import { Separator } from "@/src/components/shadcn/separator";
import { Lock, Unlock } from "lucide-react";
import { Button } from "@/src/components/shadcn/button";

function SmallColorBlockRounded({ hex }: { hex: string }) {
  return (
    <div className="w-4 h-4 rounded mr-2" style={{ background: hex }}></div>
  );
}

function CssVariablesContainer({
  variable,
  hex,
  changeCssVariables,
  theme,
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
}) {
  const { lightColors, darkColors } = useThemeContext();

  return (
    <div className="flex items-center justify-between w-full ">
      <div className="flex items-center">
        <Popover>
          <PopoverTrigger>
            <SmallColorBlockRounded hex={hex} />
          </PopoverTrigger>
          <PopoverContent>
            <TypographyParagraph className="capitalize">
              {variable}
            </TypographyParagraph>
            <TypographyMuted>Choose the color</TypographyMuted>
            <div className="mt-2"></div>
            <div className="space-y-2">
              <RadioGroup
                onValueChange={(e) => {
                  changeCssVariables(variable, e, theme);
                }}
                defaultValue={hex}
              >
                {darkColors.map((darkColor) => (
                  <div
                    key={darkColor}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <SmallColorBlockRounded hex={darkColor} />
                      <TypographyParagraph className="text-sm">
                        {darkColor}
                      </TypographyParagraph>
                    </div>
                    <RadioGroupItem
                      value={darkColor}
                      id={`dark-option-${darkColor}`}
                    />
                  </div>
                ))}
                {lightColors.map((lightColor) => (
                  <div
                    key={lightColor}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <SmallColorBlockRounded hex={lightColor} />
                      <TypographyParagraph className="text-sm">
                        {lightColor}
                      </TypographyParagraph>
                    </div>
                    <RadioGroupItem
                      value={lightColor}
                      id={`light-option-${lightColor}`}
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>
          </PopoverContent>
        </Popover>
        <TypographyMuted className="capitalize">{variable}</TypographyMuted>
      </div>
      <div>
        <Button
          variant={"secondary"}
          className="w-fit p-1 h-fit bg-transparent"
          onClick={() => {
            changeCssVariables(variable, hex, theme, !isLocked);
          }}
        >
          {isLocked ? (
            <Lock className="text-secondary-foreground" height={16} />
          ) : (
            <Unlock className="text-secondary-foreground/40" height={16} />
          )}
        </Button>
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
    <div className="w-[300px] overflow-y-auto space-y-4 p-4 h-screen border-l-[1px] border-l-border">
      <TypographyH4>Light variables</TypographyH4>
      <div className="space-y-2">
        {Object.keys(light).map((e) => (
          <CssVariablesContainer
            key={`light-${e}`}
            variable={e as keyof ShadcnVariables}
            hex={light[e as keyof ShadcnVariables].color}
            changeCssVariables={changeCssVariables}
            theme="light"
            isLocked={light[e as keyof ShadcnVariables].isLocked}
          />
        ))}
      </div>
      <Separator />

      <TypographyH4>Dark variables</TypographyH4>
      <div className="space-y-2">
        {Object.keys(dark).map((e) => (
          <CssVariablesContainer
            key={`dark-${e}`}
            variable={e as keyof ShadcnVariables}
            hex={dark[e as keyof ShadcnVariables].color}
            changeCssVariables={changeCssVariables}
            theme="dark"
            isLocked={dark[e as keyof ShadcnVariables].isLocked}
          />
        ))}
      </div>
    </div>
  );
}
