import TypographyH4 from "@/src/components/typography/h4";
import HeroHeaderSettings from "./hero-header";
import { Label } from "@/src/components/shadcn/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/src/components/shadcn/select";
import { SelectValue } from "@radix-ui/react-select";
import { Button } from "@/src/components/shadcn/button";

export default function PreferencesSettings() {
  return (
    <div>
      <HeroHeaderSettings
        title="Application Preferences"
        description="Customize your language, region, theme, font size, and update settings for the application."
      />
      <div className="w-full space-y-8">
        <div className="space-y-4">
          <TypographyH4>Language and Region</TypographyH4>
          <div className="space-y-2">
            <Label>Language</Label>
            <Select defaultValue="spanish">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="portuguese">Portuguese</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Region</Label>
            <Select defaultValue="south-america">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="south-america">South America</SelectItem>
                <SelectItem value="nort-america">North America</SelectItem>
                <SelectItem value="central-america">Central America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="asia">Africa</SelectItem>
                <SelectItem value="asia">Oceania</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-4">
          <TypographyH4>Theme and Appearance</TypographyH4>
          <div className="space-y-2">
            <Label>Theme</Label>
            <Select defaultValue="light">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Color scheme</Label>
            <Select defaultValue="green">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-4">
          <TypographyH4>Font settings</TypographyH4>
          <div className="space-y-2">
            <Label>Font size</Label>
            <Select defaultValue="medium">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
                <SelectItem value="extra-large">Extra large</SelectItem>
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
