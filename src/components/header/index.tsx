import { Separator } from "@/src/components/shadcn/separator";
import TypographyH1 from "../typography/h1";
import TypographyMuted from "../typography/muted";
import CurrentThemeIndicatorContainer from "./CurrentThemeIndicatorContainer";
import { Menu } from "./menu";

export default function Header() {
  return (
    <header
      className={`h-[80px] space-x-4 flex items-center justify-between w-full py-2 px-6 border-b-[1px] border-b-foreground/10`}
    >
      <div className="flex items-center space-x-2 relative h-full">
        <TypographyH1 className="text-xl">🪄 Oxidus</TypographyH1>
        <Separator className="h-1/2" orientation="vertical" />
        <TypographyMuted className="text-foreground">
          Craft Your Palette for your Shadcn components
        </TypographyMuted>
      </div>
      <CurrentThemeIndicatorContainer />
      <div className="flex items-center space-x-2">
        <Menu.Themes />
        <Menu.SaveChanges />
        <Menu.ColorPicker />
        <Menu.ColorPalette />
        <Menu.ShowCode />
        <Menu.SocialMedia />
        <Menu.ToggleTheme />
      </div>
    </header>
  );
}
