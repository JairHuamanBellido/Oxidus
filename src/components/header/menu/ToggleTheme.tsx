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
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ToggleThemeMenuItem() {
  const { setMode } = useThemeContext();
  const { setTheme, systemTheme } = useTheme();
  useEffect(() => {
    setMode(systemTheme as "dark" | "light");
  }, [systemTheme]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <SunIcon
            strokeWidth={1.5}
            size={20}
            className={cn(
              " rotate-0 scale-100 transition-all ",
              { "-rotate-90": systemTheme === "dark" },
              { "scale-0": systemTheme === "dark" },
            )}
          />
          <MoonIcon
            strokeWidth={1.5}
            size={20}
            className={cn(
              "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              { "rotate-0": systemTheme === "dark" },
              { "scale-100": systemTheme === "dark" },
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light");
            setMode("light");
            (window as any).gtag("event", "light-mode");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark");
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
