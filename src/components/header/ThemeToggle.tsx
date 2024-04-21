import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { buttonVariants } from "@/src/components/shadcn/button";
import { cn } from "@/src/utils/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "../shadcn/switch";

export default function ThemeToggle() {
  const { setMode, mode } = useThemeContext();

  const handleThemeChange = (checked: boolean) => {
    checked ? setMode("dark") : setMode("light");
  };

  return (
    <div>
      <div
        className={cn(
          buttonVariants({
            variant: "ghost",
            className: "w-9 px-0 hover:bg-transition",
          }),
        )}
      >
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
      </div>
      <Switch onCheckedChange={(e) => handleThemeChange(e)} />
    </div>
  );
}
