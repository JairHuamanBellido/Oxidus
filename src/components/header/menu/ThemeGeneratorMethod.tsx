import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { DefaultPaletteStrategy } from "@/src/application/engine/DefaultPaletteStrategy";
import { SoftPaletteStrategy } from "@/src/application/engine/SoftPaletteStrategy";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../shadcn/dropdown-menu";
import { Cpu } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../shadcn/tooltip";
import { Button } from "../../shadcn/button";
import { cn } from "@/src/utils/utils";
import TypographyParagraph from "../../typography/paragraph";
import { Check } from "lucide-react";
import TypographySmall from "../../typography/small";

export default function ThemeGeneratorMethod() {
  const { setColorPaletteGenerator, colorPaletteGenerator, hex, setHex } =
    useThemeContext();

  return (
    <div className="flex flex-col space-y-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="w-8 h-8 p-0" variant="ghost">
                <Cpu strokeWidth={1.5} size={20} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme Generator Method</p>
            </TooltipContent>
          </Tooltip>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px] bg-popover/20 backdrop-blur-lg">
          <DropdownMenuLabel>Generator Method</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setColorPaletteGenerator(new DefaultPaletteStrategy());
              setHex(hex);
              (window as any).gtag("event", "change-theme-generator", {
                themeGenerator: "default",
              });
            }}
            className={cn("flex items-center justify-between")}
          >
            <TypographyParagraph>Default</TypographyParagraph>
            {colorPaletteGenerator.strategy instanceof
              DefaultPaletteStrategy && <Check />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setColorPaletteGenerator(new SoftPaletteStrategy());
              setHex(hex);
              (window as any).gtag("event", "change-theme-generator", {
                themeGenerator: "soft",
              });
            }}
            className={cn("flex items-center justify-between")}
          >
            <div className="flex items-center space-x-2">
              <TypographyParagraph>Soft</TypographyParagraph>
              <TypographySmall className="bg-primary text-sm px-1 py-[1px] text-primary-foreground rounded">
                Beta
              </TypographySmall>
            </div>

            {colorPaletteGenerator.strategy instanceof SoftPaletteStrategy && (
              <Check />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
