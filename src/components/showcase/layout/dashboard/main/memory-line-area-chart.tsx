import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/chart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { time: "01:00h", memory: 4304 },
  { time: "02:00h", memory: 5305 },
  { time: "03:00h", memory: 5302 },
  { time: "04:00h", memory: 5303 },
  { time: "05:00h", memory: 6002 },
  { time: "06:00h", memory: 4501 },
  { time: "07:00h", memory: 4010 },
  { time: "08:00h", memory: 4034 },
  { time: "09:00h", memory: 4056 },
  { time: "10:00h", memory: 4100 },
  { time: "11:00h", memory: 4090 },
  { time: "12:00h", memory: 7010 },
  { time: "13:00h", memory: 4200 },
  { time: "14:00h", memory: 5003 },
  { time: "15:00h", memory: 5004 },
  { time: "16:00h", memory: 3304 },
  { time: "17:00h", memory: 3304 },
  { time: "18:00h", memory: 4324 },
  { time: "19:00h", memory: 3304 },
  { time: "20:00h", memory: 3304 },
  { time: "21:00h", memory: 6305 },
  { time: "22:00h", memory: 3560 },
  { time: "23:00h", memory: 3304 },
  { time: "24:00h", memory: 3200 },
];

const chartConfig = {
  memory: {
    label: "Memory",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
export default function MemoryLineAreaChart() {
  return (
    <Card className="border-none h-fit">
      <CardHeader>
        <CardTitle className="text-lg">
          <span> Memory Usage</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[200px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorUvM" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="10%"
                  stopColor="var(--color-memory)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="90%"
                  stopColor="hsl(var(--card))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value / 1000 + " GB"}
            />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />

            <ChartTooltip
              cursor={false}
              formatter={(val: number, name) => {
                return (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <div className="bg-chart-2 w-3 h-3 rounded "></div>
                      <TypographyMuted className="capitalize">
                        {name}
                      </TypographyMuted>
                    </div>
                    <TypographyParagraph>
                      {val / 1000 + " GB"}
                    </TypographyParagraph>
                  </div>
                );
              }}
              content={
                <ChartTooltipContent className="w-fit" indicator="dot" />
              }
            />

            <Area
              dataKey="memory"
              type="linear"
              fill="url(#colorUvM)"
              fillOpacity={0.4}
              stroke="var(--color-memory)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
