import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import ThemeSettingSlider from "./ThemeSettingSlider";

export default function LightThemeSettingSection() {
  const {
    setLightThemeSettings,
    lightColorsAmount,
    lightColorsHueAngle,
    lightColorsSaturation,
    lightness,
  } = useThemeContext();

  return (
    <div className="flex space-x-4">
      <div className="flex flex-col">
        <Label>Light colors amount</Label>
        <Input
          type="number"
          className="inline-block border-none p-0 text-3xl w-10 focus-visible:ring-0 focus-visible:ring-offset-0"
          minLength={0}
          maxLength={2}
          value={lightColorsAmount}
          onChange={(e) =>
            setLightThemeSettings({
              lightColorsAmount: parseInt(e.target.value),
              lightColorsHueAngle,
              lightColorsSaturation,
              lightness,
            })
          }
        />
      </div>
      <ThemeSettingSlider
        label="Lightness"
        value={lightness}
        onValueChange={(val) =>
          setLightThemeSettings({
            lightColorsAmount,
            lightColorsHueAngle,
            lightColorsSaturation,
            lightness: val,
          })
        }
      />
      <ThemeSettingSlider
        label="Light colors hue angle"
        value={lightColorsHueAngle}
        onValueChange={(val) =>
          setLightThemeSettings({
            lightColorsAmount,
            lightColorsHueAngle: val,
            lightColorsSaturation,
            lightness,
          })
        }
      />
      <ThemeSettingSlider
        label="Light colors saturation"
        value={lightColorsSaturation}
        onValueChange={(val) =>
          setLightThemeSettings({
            lightColorsAmount,
            lightColorsHueAngle,
            lightColorsSaturation: val,
            lightness,
          })
        }
      />
    </div>
  );
}
