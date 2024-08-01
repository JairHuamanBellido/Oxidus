import { Separator } from "@/src/components/shadcn/separator";
import ButtonShowCode from "./ButtonShowCode";
import ThemeToggle from "./ThemeToggle";

import ColorPickerOption from "../theme/ColorPicker";
import TypographyH1 from "../typography/h1";
import TypographyMuted from "../typography/muted";
import { Github } from "lucide-react";
import Link from "next/link";
export default function Header() {
  return (
    <header
      className={`h-[80px] space-x-4 flex items-center justify-between w-full py-2 px-6`}
    >
      <div className="flex items-center space-x-2 relative h-full">
        <TypographyH1 className="text-xl">Oxidus</TypographyH1>
        <Separator className="h-1/2" orientation="vertical" />
        <TypographyMuted className="text-foreground">
          Craft Your Palette for your Shadcn components
        </TypographyMuted>
      </div>
      <div className="flex items-center space-x-2">
        <ColorPickerOption />
        <ButtonShowCode />
        <Link
          target="_blank"
          href={"https://github.com/JairHuamanBellido/Oxidus"}
        >
          <Github />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
