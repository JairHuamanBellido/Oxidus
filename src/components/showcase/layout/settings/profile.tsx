import { Label } from "@/src/components/shadcn/label";
import HeroHeaderSettings from "./hero-header";
import { Input } from "@/src/components/shadcn/input";
import TypographyH4 from "@/src/components/typography/h4";
import { Button } from "@/src/components/shadcn/button";
import TypographyMuted from "@/src/components/typography/muted";
import { Switch } from "@/src/components/shadcn/switch";

export default function ProfileSettings() {
  return (
    <div>
      <HeroHeaderSettings
        title="Profile"
        description="Manage your personal information, password, profile picture and notificacion preferences"
      />
      <div className="w-full space-y-8">
        <div className="space-y-4">
          <TypographyH4 className="font-normal">
            Personal Information
          </TypographyH4>
          <div className="flex flex-col space-y-2">
            <Label>Name</Label>
            <Input placeholder={"Jair Huaman Bellido"} />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Email</Label>
            <Input placeholder="foo@bar.xyz" type="email" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Phone number</Label>
            <Input placeholder={"34999666888"} type="number" />
          </div>
        </div>
        <div className="space-y-4">
          <TypographyH4 className="font-normal">Password</TypographyH4>
          <div className="flex flex-col space-y-2">
            <Label>Current password</Label>
            <Input value={"*******"} type="password" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>New password</Label>
            <Input placeholder="Type your new password" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Confirm New Password</Label>
            <Input placeholder="Confirm your password" type="text" />
          </div>
        </div>
        <div className="space-y-4 ">
          <TypographyH4 className="font-normal">Notifications</TypographyH4>
          <div className="flex items-center gap-x-4">
            <div className="w-5/6">
              <Label>Email Notifications</Label>
              <TypographyMuted>
                This option allows you to enable or disable email notifications.
                When enabled, you will receive important updates and information
                via email.
              </TypographyMuted>
            </div>
            <div className="w-1/6">
              <Switch />
            </div>
          </div>
          <div className="flex  items-center gap-x-4">
            <div className="w-5/6">
              <Label>Push Notifications</Label>
              <TypographyMuted>
                Use this option to enable or disable push notifications. Push
                notifications provide real-time updates and alerts on your
                desktop or mobile device.
              </TypographyMuted>
            </div>
            <div className="w-1/6">
              <Switch />
            </div>
          </div>
          <div className="flex  items-center gap-x-4">
            <div className="w-5/6">
              <Label>Sound Notifications</Label>
              <TypographyMuted>
                When enabled, sound notifications will play an audible alert to
                grab your attention when new notifications arrive.
              </TypographyMuted>
            </div>
            <div className="w-1/6">
              <Switch />
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-center justify-end">
          <Button variant={"outline"}>Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </div>
    </div>
  );
}
