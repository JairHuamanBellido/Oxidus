import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Separator } from "@/src/components/shadcn/separator";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import Color from "color";
import Image from "next/image";

export default function CardBill() {
  const {
    cssVariables: { shadcn },
    mode,
  } = useThemeContext();

  const background = shadcn[mode].primary.color;
  const mix = mode === "dark" ? "black" : "white";
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardDescription> Bill</CardDescription>
        <CardTitle className=" flex items-center justify-between">
          <span>N° 38471932</span>
          <span className="text-sm text-muted-foreground">02/09/1996</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <TypographyMuted className="underline">Buyer</TypographyMuted>
            <div className="flex items-center">
              <Image
                src={"/avatar-3.svg"}
                alt="Jair Huaman Bellido"
                width={32}
                height={32}
              />
              <TypographyParagraph>Jair Huaman</TypographyParagraph>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <TypographyMuted className="underline">
              Payment Status
            </TypographyMuted>
            <TypographyParagraph
              style={{
                background: Color(background).mix(Color(mix), 0.8).hex(),
              }}
              className="py-1 px-2 text-primary text-sm rounded"
            >
              Confirmed
            </TypographyParagraph>
          </div>
          <div className="flex items-center justify-between">
            <TypographyMuted className="underline">
              Payment Method
            </TypographyMuted>
            <TypographyParagraph>Credit card</TypographyParagraph>
          </div>
          <div className="flex items-center justify-between">
            <TypographyMuted className="underline">
              Due Date
            </TypographyMuted>
            <TypographyParagraph>Sep 02 </TypographyParagraph>
          </div>
          <div className="flex items-center justify-between">
            <TypographyMuted className="underline">
              Total Ammount
            </TypographyMuted>
            <TypographyParagraph>$3200</TypographyParagraph>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
