import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import TypographySmall from "@/src/components/typography/small";
import { Shield } from "lucide-react";

export default function SecurityScanOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield />
          <span> Security Scan Overview</span>
        </CardTitle>
        <CardDescription>
          Monitor and manage all running containers with real-time status
          updates and quick action controls.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="flex items-center justify-between">
          <TypographySmall className="text-muted-foreground"> Vulnerability Scan</TypographySmall>
          <TypographyParagraph className="py-2 px-4 rounded flex items-center space-x-2">
            <span>3 Critical</span>
          </TypographyParagraph>
        </div>
        <div className="flex items-center justify-between">
          <TypographySmall className="text-muted-foreground"> Config Issues</TypographySmall>
          <TypographyParagraph className="py-2 px-4 rounded flex items-center space-x-2">
            <span>2 Warnings</span>
          </TypographyParagraph>
        </div>
        <div className="flex items-center justify-between">
          <TypographySmall className="text-muted-foreground"> Exposed Ports</TypographySmall>
          <TypographyParagraph className="py-2 px-4 rounded flex items-center space-x-2">
            <span>5 High Risk</span>
          </TypographyParagraph>
        </div>
        <div className="flex items-center justify-between">
          <TypographySmall className="text-muted-foreground"> SSL Certificates</TypographySmall>
          <TypographyParagraph className="py-2 px-4 rounded flex items-center space-x-2">
            <span>2 Expiring Soon</span>
          </TypographyParagraph>
        </div>
        <div className="flex items-center justify-between">
          <TypographySmall className="text-muted-foreground"> Access Control</TypographySmall>
          <TypographyParagraph className="py-2 px-4 rounded flex items-center space-x-2">
            <span>5 Containers</span>
          </TypographyParagraph>
        </div>
      </CardContent>
    </Card>
  );
}
