import { Separator } from "@/src/components/shadcn/separator";
import HorizontalPaletteColors from "./HorizontalPaletteColors";
import ButtonShowCode from "./ButtonShowCode";
import ThemeToggle from "./ThemeToggle";
import ThemeExport from "../theme/ThemeExport";
import ThemeImport from "../theme/ThemeImport";

export default function Header() {
  return (
    <header className={`h-[80px] space-x-4 flex items-center w-full py-2 px-6`}>
      <HorizontalPaletteColors />
      <Separator orientation="vertical" />
      <ButtonShowCode />
      <ThemeExport />
      <ThemeImport />
      <ThemeToggle />
    </header>
  );
}
