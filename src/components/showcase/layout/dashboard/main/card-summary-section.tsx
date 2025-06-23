import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { ArrowUp } from "lucide-react";
import { Progress } from "@/src/components/shadcn/progress";

export default function DashboardCardSummarySection() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,4fr))] gap-4">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-base">Containers Status</CardTitle>

          <CardDescription className="text-foreground/80">
            Total: 24
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <TypographyParagraph>
            18 Running • 4 Stopped • 2 Restarting
          </TypographyParagraph>
          <div className="flex w-fit items-center space-x-2  text-green-600 dark:text-green-400 bg-green-600/10 dark:bg-green-400/10 p-1 px-2 rounded-lg">
            <div className="w-2 h-2 rounded-full bg-green-600" />
            <TypographyParagraph className="w-fit font-semibold text-sm ">
              All Systems Operational
            </TypographyParagraph>
          </div>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-base">CPU Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <TypographyParagraph className="text-xl">67.2%</TypographyParagraph>

          <TypographyMuted className="flex items-center space-x-2">
            <ArrowUp size={14} />
            <span> 12% from last hour</span>
          </TypographyMuted>

          <Progress value={67.2} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Memory Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <TypographyParagraph className="text-xl">
            14.2 GB <span className="text-foreground/60 text-sm">/ 32 GB</span>
          </TypographyParagraph>
          <TypographyMuted>Avialable: 17.8 GB</TypographyMuted>
          <TypographyMuted>44% Memory Utilization</TypographyMuted>
        </CardContent>
      </Card>
    </div>
  );
}
