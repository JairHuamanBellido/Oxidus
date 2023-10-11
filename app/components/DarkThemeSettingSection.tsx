import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { Input } from "@/app/components/input";
import { Label } from "@/components/ui/label";
import ThemeSettingSlider from "./ThemeSettingSlider";

export default function DarkThemeSettingSection() {
  const {
    darkColorsAmount,
    darkColorsHueAngle,
    darkColorsSaturation,
    darkness,
    setDarkThemeSettings,
  } = useThemeContext();

  return (
    <div className="flex space-x-4">
      <div className="flex flex-col w-24">
        <Label>Dark colors amount</Label>
        <Input
          type="number"
          className="inline-block border-none p-0 text-3xl w-10 focus-visible:ring-0 focus-visible:ring-offset-0"
          minLength={0}
          maxLength={2}
          value={darkColorsAmount}
          onChange={(e) =>
            setDarkThemeSettings({
              darkColorsAmount: parseInt(e.target.value),
              darkColorsHueAngle,
              darkColorsSaturation,
              darkness,
            })
          }
        />
      </div>
      <ThemeSettingSlider
        label="Darkness"
        value={darkness}
        onValueChange={(val) =>
          setDarkThemeSettings({
            darkColorsAmount,
            darkColorsHueAngle,
            darkColorsSaturation,
            darkness: val,
          })
        }
      />
      <ThemeSettingSlider
        label="Dark colors hue angle"
        value={darkColorsHueAngle}
        min={-360}
        max={360}
        onValueChange={(val) =>
          setDarkThemeSettings({
            darkColorsAmount,
            darkColorsHueAngle: val,
            darkColorsSaturation,
            darkness,
          })
        }
        symbol="°"
      />
      <ThemeSettingSlider
        label="Dark colors saturation"
        value={darkColorsSaturation}
        onValueChange={(val) =>
          setDarkThemeSettings({
            darkColorsAmount,
            darkColorsHueAngle,
            darkColorsSaturation: val,
            darkness,
          })
        }
        min={-100}
        max={100}
      />
    </div>
  );
}
