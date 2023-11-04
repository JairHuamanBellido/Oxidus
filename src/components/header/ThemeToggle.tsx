import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { Button } from "@/src/components/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/shadcn/dropdown-menu";
import { cn } from "@/src/utils/utils";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  const { setMode, mode } = useThemeContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <SunIcon
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ",
              { "-rotate-90": mode === "dark" },
              { "scale-0": mode === "dark" },
            )}
          />
          <MoonIcon
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              { "rotate-0": mode === "dark" },
              { "scale-100": mode === "dark" },
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setMode("light");
            (window as any).gtag("event", "light-mode");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setMode("dark");
            (window as any).gtag("event", "dark-mode");
          }}
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
