"use client";

import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { Slider } from "@/components/ui/slider";

export function RGBSliders() {
  const { r, g, b, setRGB } = useThemeContext();

  function updateRGB({
    newR,
    newG,
    newB,
  }: {
    newR?: number;
    newG?: number;
    newB?: number;
  }) {
    setRGB(newR ?? r, newG ?? g, newB ?? b);
  }

  return (
    <div className={"flex flex-col gap-2 w-48"}>
      <div className={"flex flex-row flex-nowrap items-center"}>
        <span className={"inline-block w-36"}>R ({r})</span>

        <Slider
          defaultValue={[r]}
          value={[r]}
          step={1}
          max={255}
          onValueChange={(r) => updateRGB({ newR: r[0] })}
        />
      </div>

      <div className={"flex flex-row flex-nowrap items-center"}>
        <span className={"inline-block w-36"}>G ({g})</span>
        <Slider
          defaultValue={[g]}
          value={[g]}
          step={1}
          max={255}
          onValueChange={(g) => updateRGB({ newG: g[0] })}
        />
      </div>

      <div className={"flex flex-row flex-nowrap items-center"}>
        <span className={"inline-block w-36"}>B ({b})</span>
        <Slider
          defaultValue={[b]}
          value={[b]}
          step={1}
          max={255}
          onValueChange={(b) => updateRGB({ newB: b[0] })}
        />
      </div>
    </div>
  );
}
