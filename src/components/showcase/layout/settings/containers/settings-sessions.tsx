import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Laptop, Smartphone } from "lucide-react";
import { Button } from "@/src/components/shadcn/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/shadcn/select";

export default function SettingsSessions() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Active Sessions</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          View and manage the devices currently logged into your account.
        </TypographyParagraph>
      </div>
      <div className="flex relative items-start">
        <div className="flex flex-col w-[400px]"> 
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Active Sessions
          </TypographyParagraph>
          <TypographyMuted>
            List of devices currently logged in.
          </TypographyMuted>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-centers space-x-2">
                <Laptop strokeWidth={1} />
                <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
                  193.45.12.44
                </TypographyParagraph>
              </div>
              <div className="flex items-center space-x-2">
                <TypographyParagraph className="text-green-600">
                  Current Session
                </TypographyParagraph>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <TypographyParagraph>Perú</TypographyParagraph>
              </div>
              <div className="flex items-center space-x-2">
                <TypographyMuted>
                  <sup>. </sup> Laptop
                </TypographyMuted>
                <TypographyMuted>
                  <sup>. </sup> Last active 1 minute ago
                </TypographyMuted>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-centers space-x-2">
                <Smartphone strokeWidth={1} />
                <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
                  192.168.1.10
                </TypographyParagraph>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <TypographyParagraph>Perú</TypographyParagraph>
              </div>
              <div className="flex items-center space-x-2">
                <TypographyMuted>
                  <sup>. </sup> Mobile
                </TypographyMuted>
                <TypographyMuted>
                  <sup>. </sup> Last active 10 hours ago
                </TypographyMuted>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Logout From Others
          </TypographyParagraph>
          <TypographyMuted>Sign out from all other devices.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <Button variant="destructive">Logout</Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Session Timeout
          </TypographyParagraph>
          <TypographyMuted>Auto-logout after inactivity.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <Select defaultValue="15 minutes">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="15 minutes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15 minutes">15 minutes</SelectItem>
              <SelectItem value="1 hour">1 hour</SelectItem>
              <SelectItem value="2 hours">2 hours</SelectItem>
              <SelectItem value="4 hours">4 hours</SelectItem>
              <SelectItem value="1 day">1 day</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
