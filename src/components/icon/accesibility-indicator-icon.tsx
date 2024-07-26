import { ContrastInfo } from "@/src/contexts/ThemeContext/ThemeContext";
import { cn } from "@/src/utils/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../shadcn/hover-card";
import TypographyH4 from "../typography/h4";
import TypographyParagraph from "../typography/paragraph";

interface Props {
  contrastInfo: ContrastInfo;
}
export default function AccessibilityIndicatorIcon({ contrastInfo }: Props) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <div
          className={cn("h-3 w-3 rounded-full ", {
            "bg-red-500 text-foreground": contrastInfo.level === "low",
            "bg-orange-400 text-foreground": contrastInfo.level === "medium",
            "bg-green-600 text-foreground": contrastInfo.level === "good",
            "bg-green-400 text-foreground": contrastInfo.level === "excellent",
          })}
        ></div>
      </HoverCardTrigger>
      <HoverCardContent side="right" className="flex flex-col shadow-none bg-background/10 backdrop-blur-2xl">
        <TypographyH4>Color Contrast</TypographyH4>

        <div className="mt-2 space-y-2">
          <TypographyParagraph className="text-foreground/80">
            Contrast: {contrastInfo.contrast.toFixed(2)}
          </TypographyParagraph>
          <TypographyParagraph className="text-foreground/80">
            Level:{" "}
            <span
              className={cn("text-sm font-semibold py-1 px-2 rounded-full ", {
                "bg-red-500 text-white": contrastInfo.level === "low",
                "bg-orange-400 text-black": contrastInfo.level === "medium",
                "bg-green-600 text-white": contrastInfo.level === "good",
                "bg-green-400 text-black": contrastInfo.level === "excellent",
              })}
            >
              {contrastInfo.level.slice(0, 1).toUpperCase()}
              {contrastInfo.level.slice(1)}
            </span>
          </TypographyParagraph>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
