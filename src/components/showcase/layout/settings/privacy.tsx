import TypographyH4 from "@/src/components/typography/h4";
import HeroHeaderSettings from "./hero-header";
import { Label } from "@/src/components/shadcn/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/src/components/shadcn/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/shadcn/select";
import TypographyMuted from "@/src/components/typography/muted";
import { Switch } from "@/src/components/shadcn/switch";
import { Button } from "@/src/components/shadcn/button";

export default function PrivacySettings() {
  return (
    <div>
      <HeroHeaderSettings
        title="Privacy and Security"
        description="Control your privacy settings, enhance security, view activity history, and configure session locking"
      />
      <div className="w-full space-y-8">
        <div className="space-y-4">
          <TypographyH4>Privacy Settings</TypographyH4>
          <div className="space-y-2">
            <Label>Data sharing</Label>
            <RadioGroup defaultValue="private" className="flex">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="r1" />
                <Label htmlFor="r1">Public</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="r2" />
                <Label htmlFor="r2">Private</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="r3" />
                <Label htmlFor="r3">Custom</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Data usage</Label>
            <Select defaultValue="personalized">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Data usage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personalized">Personalized</SelectItem>
                <SelectItem value="anonymous">Anonymous</SelectItem>
                <SelectItem value="limited">Limited</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <TypographyH4>Security Settings</TypographyH4>
          <div className="flex items-center gap-x-4">
            <div className="w-5/6">
              <Label>Two-Factor Authentication (2FA):</Label>
              <TypographyMuted>
                2FA is an extra layer of security that helps keep your account
                safe. It requires you to verify your identity using two
                different methods, typically a password and a one-time code,
                adding an extra barrier to unauthorized access.
              </TypographyMuted>
            </div>
            <div className="w-1/6">
              <Switch />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <TypographyH4>Session Security</TypographyH4>
          <div className="space-y-2">
            <Label>Automatic Logoff</Label>
            <Select defaultValue="15-min">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Logoff" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15-min">15 min</SelectItem>
                <SelectItem value="30-min">30 min</SelectItem>
                <SelectItem value="1-hour">1 hour</SelectItem>
                <SelectItem value="6-hour">6 hours</SelectItem>
                <SelectItem value="1-day">1 day</SelectItem>
              </SelectContent>
            </Select>
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
