import { Braces, Download, Import, Palette } from "lucide-react";
import { Button } from "../shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../shadcn/dropdown-menu";
import useThemeExport from "@/src/hooks/useThemeExport";


export default function ThemeFeatures() {
  const { exportTheme } = useThemeExport();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-9 px-0" variant={"ghost"}>
          <Palette />
          <span className="sr-only">Theme features</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={exportTheme}>
          <Braces className="mr-2 w-4 h-4" />
          <span>Download</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
