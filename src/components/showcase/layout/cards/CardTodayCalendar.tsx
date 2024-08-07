import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Calendar } from "lucide-react";

export default function CardTodayCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2"><Calendar className="mr-2"/> Today</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4 overflow-hidden max-h-[250px] ">
        <div className="flex items-center w-full">
          <div className="flex items-start w-full relative space-x-4">
            <TypographyParagraph>09:00</TypographyParagraph>
            <div className="w-full relative pt-2">
              <div className="w-full h-[1px] bg-foreground/30" />
              <div className="flex flex-col space-y-2 mt-2">
                <div className="w-full rounded bg-primary text-primary-foreground p-4 ">
                  <TypographyMuted className="text-primary-foreground/50">09:00 am - 09:15 am</TypographyMuted>
                  <TypographyParagraph className="text-primary-foreground">"Code Review" 🤣</TypographyParagraph>
                </div>
                <div className="flex flex-col space-y-2 mt-2">
                  <div className="w-full rounded bg-muted p-4 ">
                    <div className="flex items-center justify-between">
                      <TypographyMuted>09:15 am - 10:15 pm</TypographyMuted>
                      <div className="py-1 px-2  text-sm rounded-full bg-destructive text-destructive-foreground">Denied! Rejected!</div>
                    </div>
                    <TypographyParagraph>
                      Daily Meeting (15min 🙏)
                    </TypographyParagraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full">
          <div className="flex items-start w-full relative space-x-4">
            <TypographyParagraph className="text-muted-foreground">
              11:00
            </TypographyParagraph>
            <div className="w-full relative pt-2">
              <div className="w-full h-[1px] bg-foreground/30" />
              <div className="flex flex-col space-y-2 mt-2">
                <div className="w-full rounded bg-muted p-4 ">
                  <TypographyMuted>11:00 am - 11:15 pm</TypographyMuted>
                  <TypographyParagraph>Code Review</TypographyParagraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
