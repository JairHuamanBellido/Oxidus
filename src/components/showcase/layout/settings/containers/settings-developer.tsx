import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/shadcn/select";
import { Switch } from "@/src/components/shadcn/switch";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyH3 from "@/src/components/typography/h3";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { FlaskConical } from "lucide-react";

export default function SettingsDeveloperOptions() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Developer Options</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Enable developer tools and experimental features for advanced
          customization.
        </TypographyParagraph>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Enable Dev Mode
          </TypographyParagraph>
          <TypographyMuted>Show additional debugging tools.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <Switch />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Log Level
          </TypographyParagraph>
          <TypographyMuted>Verbosity of apps logs.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <Select defaultValue="info">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="info" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trace">Trace</SelectItem>
              <SelectItem value="debug">Debug</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="warn">Warn</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        <TypographyH3 className="flex items-center space-x-1">
          <FlaskConical />
          <span>Experimental Features</span>
        </TypographyH3>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col w-[400px]">
            <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
              New Dashboard Layout
            </TypographyParagraph>
            <TypographyMuted>
              Try out the upcoming redesigned dashboard UI with improved
              navigation.
            </TypographyMuted>
          </div>
          <div className="w-1/2">
            <Switch defaultChecked />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col w-[400px]">
            <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
              AI-Powered Suggestions
            </TypographyParagraph>
            <TypographyMuted>
              Enable contextual recommendations powered by machine learning.
            </TypographyMuted>
          </div>
          <div className="w-1/2">
            <Switch />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col w-[400px]">
            <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
              Beta Integration
            </TypographyParagraph>
            <TypographyMuted>
              Access integrations that are currently in beta testing with
              limited support.
            </TypographyMuted>
          </div>
          <div className="w-1/2">
            <Switch defaultChecked />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col w-[400px]">
            <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
              Dark Mode Scheduler
            </TypographyParagraph>
            <TypographyMuted>
              Automatically switch between light and dark themes based on system
              time.
            </TypographyMuted>
          </div>
          <div className="w-1/2">
            <Switch />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col w-[400px]">
            <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
              Keyboard Shortcuts
            </TypographyParagraph>
            <TypographyMuted>
              Use advanced keyboard shortcuts to navigate and perform actions
              faster.
            </TypographyMuted>
          </div>
          <div className="w-1/2">
            <Switch defaultChecked />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col w-[400px]">
            <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
              Live Collaboration
            </TypographyParagraph>
            <TypographyMuted>
              Collaborate in real time with other users on the same document or
              screen.
            </TypographyMuted>
          </div>
          <div className="w-1/2">
            <Switch />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col w-[400px]">
            <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
              Advanced Export Options
            </TypographyParagraph>
            <TypographyMuted>
              Unlock new formats and customization options when exporting data
              or reports.
            </TypographyMuted>
          </div>
          <div className="w-1/2">
            <Switch />
          </div>
        </div>
        <div className="h-8"></div>
      </div>
    </div>
  );
}
