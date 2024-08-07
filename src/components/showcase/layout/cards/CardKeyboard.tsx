import { Card, CardContent } from "@/src/components/shadcn/card";
import TypographyH4 from "@/src/components/typography/h4";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import Marquee from "@/src/components/ui/marquee";
import { cn } from "@/src/utils/utils";
import { useEffect, useState } from "react";

const reviews = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((letter) => ({ key: letter, label: letter.toUpperCase() }));

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(reviews.length / 4);
const fourthRow = reviews.slice(0, reviews.length / 3);

export default function CardKeyboard() {
  const [keySelected, setCurrentKey] = useState<string>("");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setCurrentKey(e.key.toLowerCase());
    };

    const handleKeyUp = () => {
      setCurrentKey("");
    };
    window.addEventListener("keypress", handleKeyPress);

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return (
    <Card className="bg-gradient-to-b from-background from-10% via-background via-50%  to-primary/20 to-100%">
      <CardContent className="px-0 py-4">
        <div className="px-4 mb-4">
          <TypographyH4 className="">Type fast!</TypographyH4>
          <TypographyMuted>Press any letter key</TypographyMuted>
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
          <Marquee className="[--duration:20s]">
            {firstRow.map((review) => (
              <div
                key={`first-${review.key}-label`}
                className={cn(
                  "h-12 w-12 rounded bg-muted/20 text-foreground border flex items-center justify-center",
                  {
                    "bg-primary text-primary-foreground":
                      review.key === keySelected,
                  },
                )}
              >
                <TypographyParagraph>{review.label}</TypographyParagraph>
              </div>
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:20s]">
            {secondRow.map((review) => (
              <div
                key={`second-${review.key}-label`}
                className={cn(
                  "h-12 w-12 rounded bg-muted/20 text-foreground border flex items-center justify-center",
                  {
                    "bg-primary text-primary-foreground":
                      review.key === keySelected,
                  },
                )}
              >
                <TypographyParagraph>{review.label}</TypographyParagraph>
              </div>
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:40s]">
            {thirdRow.map((review) => (
              <div
                key={`third-${review.key}-label`}
                className={cn(
                  "h-12 w-12 rounded bg-muted/20 text-foreground border flex items-center justify-center",
                  {
                    "bg-primary text-primary-foreground":
                      review.key === keySelected,
                  },
                )}
              >
                <TypographyParagraph>{review.label}</TypographyParagraph>
              </div>
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:10s]">
            {fourthRow.map((review) => (
              <div
                key={`fourth-${review.key}-label`}
                className={cn(
                  "h-12 w-12 rounded bg-muted/20 text-foreground border flex items-center justify-center",
                  {
                    "bg-primary text-primary-foreground":
                      review.key === keySelected,
                  },
                )}
              >
                <TypographyParagraph>{review.label}</TypographyParagraph>
              </div>
            ))}
          </Marquee>
        </div>
      </CardContent>
    </Card>
  );
}
