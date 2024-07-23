import {
  ShadcnVariables,
  useThemeContext,
} from "@/src/contexts/ThemeContext/ThemeContext";
import TypographyMuted from "../typography/muted";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn/popover";
import { ColorPicker, useColor } from "react-color-palette";
import { useEffect } from "react";

function SmallColorBlockRounded({ hex }: { hex: string }) {
  return <div className="w-8 h-8 rounded" style={{ background: hex }}></div>;
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
  const [color, setColor] = useColor(hex);

  useEffect(() => {
    changeCssVariables(variable, color.hex, theme);
  }, [color]);
  return (
    <div className="h-20">
      <div className="flex flex-col items-center rounded space-y-2">
        <Popover>
          <PopoverTrigger>
            <SmallColorBlockRounded hex={hex} />
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
        <TypographyMuted className="capitalize">{variable}</TypographyMuted>
      </div>
      {/* <div>
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
      </div> */}
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

  const backgroundMix = mode === "light" ? "black" : "white";
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
    <div
      style={{
        background: `color-mix(in srgb, hsl(var(--background)) 97%, ${backgroundMix})`,
      }}
      className="w-[300px] overflow-y-auto p-4 h-[calc(100vh_-_80px)] relative overflow-auto "
    >
      <div className="h-fit grid grid-cols-2 gap-4  overflow-auto">
        {mode === "light" &&
          Object.keys(light).map((e) => (
            <CssVariablesContainer
              key={`light-${e}`}
              variable={e as keyof ShadcnVariables}
              hex={light[e as keyof ShadcnVariables].color}
              changeCssVariables={changeCssVariables}
              theme="light"
              isLocked={light[e as keyof ShadcnVariables].isLocked}
            />
          ))}

        {mode === "dark" &&
          Object.keys(dark).map((e) => (
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
