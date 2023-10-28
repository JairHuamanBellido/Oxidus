import { Button } from "@/src/components/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Progress } from "@/src/components/shadcn/progress";
import TypographyLead from "@/src/components/typography/lead";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import Color from "color";
import { Info } from "lucide-react";

export default function CardScore() {
  const {
    cssVariables: { shadcn },
    mode,
  } = useThemeContext();

  const background = shadcn[mode].background.color;

  const mixBackground = mode === "dark" ? "white" : "black";
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle> Score</CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyParagraph className="text-sm text-muted-foreground">
          Track your credit score and financial progress in real time with Score
          - the smart web card for financial wellness.
        </TypographyParagraph>
        <div
          className="p-3 w-full rounded flex gap-x-2 my-3 text-foreground/60"
          style={{
            background: Color(background).mix(Color(mixBackground), 0.05).hex(),
          }}
        >
          <Info />
          <TypographyMuted className="text-in">
            To increase your score{" "}
            <span className="text-primary font-semibold"> contact us </span>
          </TypographyMuted>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <TypographyLead className="text-base">Your score</TypographyLead>
            <TypographyParagraph>70/100</TypographyParagraph>
          </div>
          <Progress className="h-1" value={70} />
        </div>
        <div className="mt-4 space-x-2 flex w-full">
          <Button className="w-1/2">Improve score</Button>
          <Button variant={"secondary"} className="w-1/2">
            Contact support
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
