import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Input } from "@/src/components/shadcn/input";
import TypographyH3 from "@/src/components/typography/h3";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Brain } from "lucide-react";

export default function CardAIChat() {
  return (
    <Card
      className="col-span-2 row-span-2 flex flex-col justify-between bg-[radial-gradient(circle_at_50%_470%,var(--tw-gradient-stops))] 
                from-white from-1% via-[hsl(var(--primary))] via-30% 
                to-[hsl(var(--background))] to-85%"
    >
      <CardHeader>
        <CardTitle className="mb-2 text-center">Oxidus GPT AI</CardTitle>
        <div className="flex justify-center ">
          <div className="flex items-center space-x-2 text-sm  bg-muted px-2 py-1 rounded-full">
            <Brain size={16} />
            <TypographyParagraph className="text-foreground">
              27017 Tokens
            </TypographyParagraph>
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-[400px] flex flex-col justify-end">
        <div>
          <TypographyH3 className="text-xl">Frequently questions</TypographyH3>
          <div className="flex mt-2 space-x-2">
            <div className="transition-all text-foreground cursor-pointer border p-4 rounded-full hover:bg-primary hover:text-primary-foreground">
              <TypographyMuted className="text-inherit">
                What Javascript Framework releases today?
              </TypographyMuted>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Input
          className="w-full bg-white/5 backdrop-blur-3xl "
          placeholder="Ask me anything?"
        />
      </CardFooter>
    </Card>
  );
}
