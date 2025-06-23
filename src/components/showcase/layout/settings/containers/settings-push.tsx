import { Switch } from "@/src/components/shadcn/switch";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";

export default function SettingsPush() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Push Notifications</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Configure real-time alerts and notification preferences on your
          devices.
        </TypographyParagraph>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Enable Push
          </TypographyParagraph>
          <TypographyMuted>
            Allow push notifications on your device.
          </TypographyMuted>
        </div>
        <div className="w-1/2">
          <Switch />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Sound
          </TypographyParagraph>
          <TypographyMuted>Enable sound notifications.</TypographyMuted>
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
