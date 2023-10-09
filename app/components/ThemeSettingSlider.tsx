import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

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
    <div className="flex flex-col w-[160px]">
      <Label className="h-8">{label}</Label>
      <h2 className="text-3xl mt-2 mb-4">
        {value} <span className="opacity-60">{symbol}</span>
      </h2>
      <div>
        <Slider
          trackClassName={"h-1"}
          defaultValue={[value]}
          value={[value]}
          step={1}
          min={min}
          max={max}
          onValueChange={(g) => onValueChange(g[0])}
        />
      </div>
    </div>
  );
}
