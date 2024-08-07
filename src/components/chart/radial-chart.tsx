import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from ".";

interface Props {
  config: ChartConfig;
  data: any[];
}

export default function RadialChart({ config, data }: Props) {
  return (
    <ChartContainer config={config} className="aspect-square h-[100px] ">
      <RadialBarChart
        data={data}
        startAngle={90}
        endAngle={90 + (data[0].key / 100) * -360}
        innerRadius={40}
        outerRadius={60}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={[46, 34]}
        />
        <RadialBar dataKey={"key"} background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-base"
                    >
                      {data[0].key.toLocaleString()}%
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
