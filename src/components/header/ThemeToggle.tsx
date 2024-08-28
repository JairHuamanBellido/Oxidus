import { cn } from "@/src/utils/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "@/src/components/shadcn/switch";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";

export default function ThemeToggle() {
  const { setMode, mode } = useThemeContext();

  const isDarkMode = mode === "dark";

  const handleToggle = () => {
    setMode(isDarkMode ? "light" : "dark");
    (window as any).gtag("event", isDarkMode ? "light-mode" : "dark-mode");
  };

  return (
    <div className="flex items-center space-x-2">
      {isDarkMode ? (
        <MoonIcon className="h-5 w-5 text-[#D8DEE9]" />
      ) : (
        <SunIcon className="h-5 w-5 text-[#4C566A]" />
      )}
      <Switch
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        className={cn(
          "rounded-full",
          isDarkMode
            ? "bg-[#36FF3B] border-transparent"
            : "bg-[#ECEFF4] border-transparent",
        )}
      />
    </div>
  );
}
