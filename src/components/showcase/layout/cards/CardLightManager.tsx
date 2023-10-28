import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Switch } from "@/src/components/shadcn/switch";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Bed, ChefHat, Sofa } from "lucide-react";

export default function CardLightManager() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Lights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <Bed />
            <div>
              <TypographyParagraph>
                Bedroom{" "}
                <span className="text-muted-foreground">{"(2 lights)"}</span>{" "}
              </TypographyParagraph>
            </div>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <Sofa />
            <div>
              <TypographyParagraph>
                Living room{" "}
                <span className="text-muted-foreground">{"(3 lights)"}</span>
              </TypographyParagraph>
            </div>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <ChefHat />
            <div>
              <TypographyParagraph>
                Kitchen{" "}
                <span className="text-muted-foreground">{"(1 lights)"}</span>
              </TypographyParagraph>
            </div>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
}
