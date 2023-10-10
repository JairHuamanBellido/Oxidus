import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import BlockColor from "./BlockColor";

export default function HorizontalPaletteColors() {
  const { darkColors, lightColors } = useThemeContext();

  return (
    <div className="h-16 flex">
      {darkColors.map((darkColor, i) => (
        <BlockColor color={darkColor} key={`dark-${i}`} />
      ))}
      {lightColors.map((lightColor, i) => (
        <BlockColor color={lightColor} key={`light-${i}`} />
      ))}
    </div>
  );
}
