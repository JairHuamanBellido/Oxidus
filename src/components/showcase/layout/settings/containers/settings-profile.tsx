import { Input } from "@/src/components/shadcn/input";
import { Label } from "@/src/components/shadcn/label";
import { Textarea } from "@/src/components/shadcn/textarea";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";

export default function SettingsProfile() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Profile</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Manage your personal information and how it appears across the
          platform.
        </TypographyParagraph>
      </div>

      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Full Name
          </TypographyParagraph>
          <TypographyMuted>
            Your display name shown across the app.
          </TypographyMuted>
        </div>
        <Input className="w-1/2" type="text" placeholder="Full Name" />
      </div>

      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Username
          </TypographyParagraph>
          <TypographyMuted>
            Unique name used to identify your profile.
          </TypographyMuted>
        </div>
        <Input className="w-1/2" type="text" placeholder="Username" />
      </div>

      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Biography
          </TypographyParagraph>
          <TypographyMuted>A short description of yourself.</TypographyMuted>
        </div>
        <Textarea className="w-1/2" placeholder="Biography" />
      </div>
    </div>
  );
}
