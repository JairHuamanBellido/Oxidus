import { Switch } from "@/src/components/shadcn/switch";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";

export default function SettingsEmail() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Email Notifications</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Control which updates and alerts you receive via email.
        </TypographyParagraph>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Newsletter
          </TypographyParagraph>
          <TypographyMuted>
            Receive product updates and announcements.
          </TypographyMuted>
        </div>
        <div className="w-1/2">
          <Switch />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Security Alerts
          </TypographyParagraph>
          <TypographyMuted>
            Get emails when security settings change.
          </TypographyMuted>
        </div>
        <div className="w-1/2">
          <Switch />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Notification Preview
          </TypographyParagraph>
          <TypographyMuted>
            Show content in notification popups.
          </TypographyMuted>
        </div>
        <div className="w-1/2">
          <Switch />
        </div>
      </div>
    </div>
  );
}
