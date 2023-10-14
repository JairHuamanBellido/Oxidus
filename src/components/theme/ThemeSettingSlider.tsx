import { Slider } from "@/src/components/shadcn/slider";
import TypographyMuted from "../typography/muted";
import TypographyParagraph from "../typography/paragraph";

interface Props {
  label: string;
  onValueChange: (val: number) => void;
  value: number;
  min?: number;
  max?: number;
  symbol?: string;
}

export default function ThemeSettingSlider({
  label,
  onValueChange,
  value,
  min = 0,
  max = 100,
  symbol = "%",
}: Props) {
  return (
    <div className="flex justify-between">
      <TypographyMuted className="w-[150px] mr-4">{label}</TypographyMuted>

      <Slider
        defaultValue={[value]}
        value={[value]}
        step={1}
        min={min}
        max={max}
        onValueChange={(g) => onValueChange(g[0])}
      />
      <TypographyParagraph className="flex ml-2 w-[100px]">
        {value} <span className="opacity-60">{symbol}</span>
      </TypographyParagraph>
    </div>
  );
}
