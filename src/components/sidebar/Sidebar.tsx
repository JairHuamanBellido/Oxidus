import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { HexInput } from "../theme/HexInput";
import { ThemeRGBSliders } from "../theme/ThemeRGBSliders";

import { CustomInput } from "../ui/input";
import TypographyMuted from "../typography/muted";
import ThemeSettingSlider from "../theme/ThemeSettingSlider";
import { Separator } from "@/src/components/shadcn/separator";
import TypographyH4 from "../typography/h4";
import SidebarThemeBlock from "./SidebarThemeBlock";

export default function Sidebar() {
  const {
    setLightThemeSettings,
    lightColorsAmount,
    lightColorsHueAngle,
    lightColorsSaturation,
    lightness,
    darkColorsAmount,
    darkColorsHueAngle,
    darkColorsSaturation,
    darkness,
    setDarkThemeSettings,
  } = useThemeContext();
  return (
    <div className="w-[300px] overflow-y-auto space-y-4 p-4 h-screen border-r-[1px] border-r-border">
      <SidebarThemeBlock>
        <TypographyMuted>Hex</TypographyMuted>
        <HexInput />
      </SidebarThemeBlock>
      <SidebarThemeBlock>
        <TypographyMuted>RGB</TypographyMuted>
        <ThemeRGBSliders />
      </SidebarThemeBlock>

      <Separator />

      <TypographyH4 className="text-lg">Light theme settings</TypographyH4>
      <SidebarThemeBlock>
        <TypographyMuted>Colors ammount</TypographyMuted>
        <CustomInput
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
      </SidebarThemeBlock>
      <SidebarThemeBlock>
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
      </SidebarThemeBlock>
      <SidebarThemeBlock>
        <ThemeSettingSlider
          label="Hue angle"
          value={lightColorsHueAngle}
          onValueChange={(val) =>
            setLightThemeSettings({
              lightColorsAmount,
              lightColorsHueAngle: val,
              lightColorsSaturation,
              lightness,
            })
          }
          min={-360}
          max={360}
          symbol="°"
        />
      </SidebarThemeBlock>
      <SidebarThemeBlock>
        <ThemeSettingSlider
          label="Saturation"
          value={lightColorsSaturation}
          onValueChange={(val) =>
            setLightThemeSettings({
              lightColorsAmount,
              lightColorsHueAngle,
              lightColorsSaturation: val,
              lightness,
            })
          }
          min={-100}
          max={100}
        />
      </SidebarThemeBlock>

      <TypographyH4 className="text-lg">Dark theme settings</TypographyH4>
      <SidebarThemeBlock>
        <TypographyMuted>Colors ammount</TypographyMuted>
        <CustomInput
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
      </SidebarThemeBlock>
      <SidebarThemeBlock>
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
      </SidebarThemeBlock>
      <SidebarThemeBlock>
        <ThemeSettingSlider
          label="Hue angle"
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
      </SidebarThemeBlock>
      <SidebarThemeBlock>
        <ThemeSettingSlider
          label="Saturation"
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
      </SidebarThemeBlock>
    </div>
  );
}
