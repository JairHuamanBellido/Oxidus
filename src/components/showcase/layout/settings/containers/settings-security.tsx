import { Input } from "@/src/components/shadcn/input";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Switch } from "@/src/components/shadcn/switch";

export default function SettingsSecurity() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Security Settings</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Enhance your account protection with password management and
          two-factor authentication.
        </TypographyParagraph>
      </div>
      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Change Password
          </TypographyParagraph>
          <TypographyMuted>
            Update your current account password.
          </TypographyMuted>
        </div>
        <Input className="w-1/2" type="password" placeholder="Password" />
      </div>
      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Two Factor Authentication
          </TypographyParagraph>
          <TypographyMuted>Require a second factor to sign in.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <Switch />
        </div>
      </div>
      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Recovery Email
          </TypographyParagraph>
          <TypographyMuted>Email used to recover your account.</TypographyMuted>
        </div>
        <Input className="w-1/2" type="email" placeholder="Email" />
      </div>
    </div>
  );
}
