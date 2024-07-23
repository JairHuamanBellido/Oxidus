import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { Button } from "../shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/popover";
import { ColorPicker, useColor } from "react-color-palette";
import TypographyMuted from "../typography/muted";
import { useEffect } from "react";

export default function ColorPickerOption() {
  const { hex, setHex } = useThemeContext();
  const [color, setColor] = useColor(hex);

  useEffect(() => {
    setHex(color.hex);
  }, [color]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className=" bg-transparent hover:bg-muted h-fit w-fit flex items-center space-x-2">
          <TypographyMuted className="text-foreground">
            Pick your color
          </TypographyMuted>
          <div style={{ background: hex }} className="w-4 h-4 rounded"></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <ColorPicker
          color={color}
          hideInput={["hsv"]}
          hideAlpha
          onChange={setColor}
        />
      </PopoverContent>
    </Popover>
  );
}
