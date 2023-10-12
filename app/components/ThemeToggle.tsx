import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, theme } = useThemeContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <SunIcon
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ",
              { "-rotate-90": theme === "dark" },
              { "scale-0": theme === "dark" },
            )}
          />
          <MoonIcon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              { "rotate-0": theme === "dark" },
              { "scale-100": theme === "dark" },
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
