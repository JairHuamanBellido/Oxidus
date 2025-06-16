import { Card, CardContent } from "@/src/components/shadcn/card";
import TypographyH4 from "@/src/components/typography/h4";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import TypographySmall from "@/src/components/typography/small";
import { cn } from "@/src/utils/utils";
import { BadgeCheck, Gauge, RotateCw, Timer } from "lucide-react";

export default function ContainersList() {
  return (
    <Card className="border-none bg-transparent">
      <CardContent className="space-y-4 p-0">
        <div className="border flex flex-col rounded-2xl p-6 space-y-4 bg-card">
          <div>
            <div className="flex items-center justify-between">
              <TypographyH4>nginx-web-server</TypographyH4>
              <div className="flex items-center space-x-2">
                <BadgeCheck size={20} className="text-green-600" />
                <TypographySmall>Running</TypographySmall>
              </div>
            </div>
            <TypographyMuted>nginx:1.21-alpine</TypographyMuted>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Gauge className="text-muted-foreground" />
              <TypographySmall>Low</TypographySmall>
            </div>
            <div className="flex items-center space-x-2">
              <Timer className="text-muted-foreground" />
              <TypographySmall>45.3ms average</TypographySmall>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 45 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1 h-8 rounded-sm ",
                    index < 45 * 0.2 ? "bg-green-600" : "bg-foreground/20",
                  )}
                />
              ))}
            </div>
            <TypographyParagraph className="text-foreground/70">
              20%
            </TypographyParagraph>
          </div>
        </div>
        <div className="border flex flex-col rounded-2xl p-6 space-y-4 bg-card">
          <div>
            <div className="flex items-center justify-between">
              <TypographyH4>postgres-database</TypographyH4>
              <div className="flex items-center space-x-2">
                <BadgeCheck size={20} className="text-green-600" />
                <TypographySmall>Running</TypographySmall>
              </div>
            </div>
            <TypographyMuted>postgres:13.8</TypographyMuted>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Gauge className="text-muted-foreground" />
              <TypographySmall>Moderate</TypographySmall>
            </div>
            <div className="flex items-center space-x-2">
              <Timer className="text-muted-foreground" />
              <TypographySmall>405.3ms average</TypographySmall>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 45 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1 h-8 rounded-sm ",
                    index < 45 * 0.5 ? "bg-orange-600" : "bg-foreground/20",
                  )}
                />
              ))}
            </div>
            <TypographyParagraph className="text-foreground/70">
              50%
            </TypographyParagraph>
          </div>
        </div>
        <div className="border flex flex-col rounded-2xl p-6 space-y-4 bg-card">
          <div>
            <div className="flex items-center justify-between">
              <TypographyH4>redis-cache</TypographyH4>
              <div className="flex items-center space-x-2">
                <BadgeCheck size={20} className="text-green-600" />
                <TypographySmall>Running</TypographySmall>
              </div>
            </div>
            <TypographyMuted>redis:7.0-alpine</TypographyMuted>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Gauge className="text-muted-foreground" />
              <TypographySmall>High</TypographySmall>
            </div>
            <div className="flex items-center space-x-2">
              <Timer className="text-muted-foreground" />
              <TypographySmall>1.3s average</TypographySmall>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 45 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1 h-6 rounded-sm ",
                    index < 45 * 0.8 ? "bg-red-600" : "bg-foreground/20",
                  )}
                />
              ))}
            </div>
            <TypographyParagraph className="text-foreground/70">
              80%
            </TypographyParagraph>
          </div>
        </div>
        <div className="border flex flex-col rounded-2xl p-6 space-y-4 bg-card">
          <div>
            <div className="flex items-center justify-between">
              <TypographyH4>api-gateway</TypographyH4>
              <div className="flex items-center space-x-2">
                <RotateCw size={20} className="text-orange-600 animate-spin" />{" "}
                <TypographySmall>Restarting</TypographySmall>
              </div>
            </div>
            <TypographyMuted>node:18-alpine</TypographyMuted>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Gauge className="text-muted-foreground" />
              <TypographySmall>Low</TypographySmall>
            </div>
            <div className="flex items-center space-x-2">
              <Timer className="text-muted-foreground" />
              <TypographySmall>85.3ms average</TypographySmall>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 45 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-1 h-6 rounded-sm ",
                    index < 45 * 0.1 ? "bg-green-600" : "bg-foreground/20",
                  )}
                />
              ))}
            </div>
            <TypographyParagraph className="text-foreground/70">
              10%
            </TypographyParagraph>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
