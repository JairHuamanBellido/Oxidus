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
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { cn } from "@/src/utils/utils";

function CardTheme() {
  return (
    <div className="border w-full bg-muted relative h-[160px] rounded p-2">
      <div className="light w-full flex bg-background h-full rounded relative p-1">
        <div
          style={{
            background: `color-mix(in srgb, hsl(var(--background)) 98%, hsl(var(--primary)))`,
          }}
          className="w-1/4 h-full rounded flex flex-col space-y-[2px]"
        >
          <div className="text-foreground/60 text-[6px] px-1">- - -</div>
          <div className="text-foreground/60 text-[6px] px-1">- - -</div>
          <div className="bg-primary/10 text-primary text-[6px] px-1">
            - - -
          </div>
        </div>
        <div className="w-3/4 h-full pl-4 flex relative flex-col">
          <div className="text-[10px]">- - -</div>
          <div className="flex items-center space-x-2">
            <div className="bg-primary h-2 w-1/2" />
            <div className="bg-secondary h-2 w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SettingsAppearance() {
  const { mode } = useThemeContext();
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Appearance Preferences</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Customize the look and feel of your dashboard, including themes,
          fonts, and colors.
        </TypographyParagraph>
      </div>
      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Mode
          </TypographyParagraph>
          <TypographyMuted>
            Choose between light, dark or system.
          </TypographyMuted>
        </div>
        <Select defaultValue="dark">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Font Size
          </TypographyParagraph>
          <TypographyMuted>Select the base text size.</TypographyMuted>
        </div>
        <Select defaultValue="16px">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a font size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="16px">16px</SelectItem>
            <SelectItem value="18px">18px</SelectItem>
            <SelectItem value="20px">20px</SelectItem>
            <SelectItem value="22px">22px</SelectItem>
            <SelectItem value="24px">24px</SelectItem>
            <SelectItem value="26px">26px</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold">
            Theme
          </TypographyParagraph>
          <TypographyMuted>
            Customize the primary color of the UI.
          </TypographyMuted>
        </div>

        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(240px,3fr))] gap-8">
          <RadioGroup className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
              <CardTheme />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" />
                <Label htmlFor="r1">Default</Label>
              </div>
            </div>
          </RadioGroup>
          <RadioGroup
            className={cn(mode, "flex flex-col space-y-2 theme-yellow")}
          >
            <div className={cn("flex flex-col space-y-2")}>
              <CardTheme />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" />
                <Label htmlFor="r2">Yellow</Label>
              </div>
            </div>
          </RadioGroup>
          <RadioGroup
            className={cn("flex flex-col space-y-2 theme-orange", mode)}
          >
            <div className={cn("flex flex-col space-y-2")}>
              <CardTheme />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" />
                <Label htmlFor="r2">Orange</Label>
              </div>
            </div>
          </RadioGroup>
          <RadioGroup className={cn("flex flex-col space-y-2 theme-red", mode)}>
            <div className={cn("flex flex-col space-y-2")}>
              <CardTheme />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" />
                <Label htmlFor="r2">Red</Label>
              </div>
            </div>
          </RadioGroup>
          <RadioGroup
            className={cn("flex flex-col space-y-2 theme-blue", mode)}
          >
            <div className={cn("flex flex-col space-y-2")}>
              <CardTheme />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" />
                <Label htmlFor="r2">Blue</Label>
              </div>
            </div>
          </RadioGroup>
          <RadioGroup
            className={cn("flex flex-col space-y-2 theme-purple", mode)}
          >
            <div className={cn("flex flex-col space-y-2")}>
              <CardTheme />
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" />
                <Label htmlFor="r2">Purple</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
