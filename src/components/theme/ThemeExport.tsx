import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { Button } from "../shadcn/button";

export default function ThemeExport() {
  const {
    setCssVariables,
    setDarkThemeSettings,
    setHex,
    setLightThemeSettings,
    setMainColor,
    setRGB,
    setMode,
    ...variables
  } = useThemeContext();

  const onClick = () => {
    const jsonData = variables;

    const jsonStringify = JSON.stringify(jsonData);
    const blob = new Blob([jsonStringify], { type: "application/json" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "theme.json";

    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={onClick} variant={"outline"}>
      Download Theme
    </Button>
  );
}
