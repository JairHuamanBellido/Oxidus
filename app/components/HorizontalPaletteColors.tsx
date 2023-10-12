import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import BlockColor from "./BlockColor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TypographyParagraph from "./typography/paragraph";

export default function HorizontalPaletteColors() {
  const { darkColors, lightColors, hex } = useThemeContext();

  return (
    <TooltipProvider>
      <div className="flex">
        {darkColors.map((darkColor, i) => (
          <Tooltip key={`dark-${i}`}>
            <TooltipTrigger>
              <BlockColor color={darkColor} />
            </TooltipTrigger>
            <TooltipContent>{darkColor}</TooltipContent>
          </Tooltip>
        ))}

        <Tooltip>
          <TooltipTrigger>
            <div style={{ background: hex }} className="h-8 w-16 " />
          </TooltipTrigger>
          <TooltipContent className="text-center">
            <TypographyParagraph style={{ color: hex }}>
              Primary
            </TypographyParagraph>
            <TypographyParagraph>{hex}</TypographyParagraph>
          </TooltipContent>
        </Tooltip>
        {lightColors.map((lightColor, i) => (
          <Tooltip key={`light-${i}`}>
            <TooltipTrigger>
              <BlockColor color={lightColor} />
            </TooltipTrigger>
            <TooltipContent>{lightColor}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
