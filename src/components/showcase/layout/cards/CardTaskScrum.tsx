import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Calendar, CircleDashed, Users } from "lucide-react";

export default function CardTaskScrum() {
  const today = new Date();

  today.setDate(today.getDate() + 2);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Authentication | OAuth Google</CardTitle>
        <div className="mt-2 pt-2">
          <TypographyMuted>
            Epic:
            <span className="py-1 ml-1 px-2 rounded bg-primary text-primary-foreground">
              Authentication
            </span>
          </TypographyMuted>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="flex items-center w-full">
          <TypographyMuted className="w-1/4 flex items-center">
            <Users size={16} className="mr-1" /> Asignes
          </TypographyMuted>
          <TypographyParagraph className="w-5/6">Jhon Doe</TypographyParagraph>
        </div>
        <div className="flex items-center w-full">
          <TypographyMuted className="w-1/4 flex items-center">
            <Calendar size={16} className="mr-1" /> Due Date
          </TypographyMuted>
          <TypographyParagraph className="w-5/6">
            {today.toISOString().substring(0, 10)} (in 2 days)
          </TypographyParagraph>
        </div>
        <div className="flex items-center w-full">
          <TypographyMuted className="w-1/4 flex items-center">
            <CircleDashed size={16} className="mr-1" /> Points
          </TypographyMuted>{" "}
          <TypographyParagraph className="w-5/6">8</TypographyParagraph>
        </div>
        <div>
          <TypographyMuted>Description</TypographyMuted>
          <TypographyParagraph>
            We urgently need to implement Google OAuth authentication to enhance
            the security and user experience of our application. This feature is
            critical to our next release and must be prioritized to ensure a
            seamless and secure login process for our users. The implementation
            should comply with the latest security standards and include proper
            error handling and user feedback mechanisms.
          </TypographyParagraph>
        </div>
      </CardContent>
    </Card>
  );
}
