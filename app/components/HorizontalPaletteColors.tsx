import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { getColorsList } from "@/src/utils/getColorsList";
import { useEffect, useState } from "react";
import BlockColor from "./BlockColor";

export default function HorizontalPaletteColors() {
  const {
    darkColorsAmount,
    darkColorsHueAngle,
    darkColorsSaturation,
    darkness,
    lightColorsAmount,
    lightColorsHueAngle,
    lightColorsSaturation,
    lightness,
    hex,
  } = useThemeContext();

  const [darkColors, setDarkColors] = useState<string[]>([]);
  const [lightColors, setLightColors] = useState<string[]>([]);

  useEffect(() => {
    setDarkColors(
      getColorsList(
        darkColorsAmount,
        darkness,
        "black",
        darkColorsHueAngle,
        darkColorsSaturation,
        hex,
      ).reverse(),
    );
  }, [
    darkColorsAmount,
    darkColorsHueAngle,
    darkColorsSaturation,
    darkness,

    hex,
  ]);

  useEffect(() => {
    setLightColors(
      getColorsList(
        lightColorsAmount,
        lightness,
        "white",
        lightColorsHueAngle,
        lightColorsSaturation,
        hex,
      ),
    );
  }, [
    lightColorsAmount,
    lightColorsHueAngle,
    lightColorsSaturation,
    lightness,
    hex,
  ]);

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
