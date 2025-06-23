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
  { time: "01:00h", bandwidth: 1304 },
  { time: "02:00h", bandwidth: 1305 },
  { time: "03:00h", bandwidth: 1302 },
  { time: "04:00h", bandwidth: 1303 },
  { time: "05:00h", bandwidth: 3002 },
  { time: "06:00h", bandwidth: 3001 },
  { time: "07:00h", bandwidth: 3010 },
  { time: "08:00h", bandwidth: 3034 },
  { time: "09:00h", bandwidth: 3056 },
  { time: "10:00h", bandwidth: 3100 },
  { time: "11:00h", bandwidth: 3090 },
  { time: "12:00h", bandwidth: 3010 },
  { time: "13:00h", bandwidth: 4200 },
  { time: "14:00h", bandwidth: 5003 },
  { time: "15:00h", bandwidth: 5004 },
  { time: "16:00h", bandwidth: 1304 },
  { time: "17:00h", bandwidth: 1304 },
  { time: "18:00h", bandwidth: 1324 },
  { time: "19:00h", bandwidth: 1304 },
  { time: "20:00h", bandwidth: 1304 },
  { time: "21:00h", bandwidth: 1305 },
  { time: "22:00h", bandwidth: 1560 },
  { time: "23:00h", bandwidth: 1304 },
  { time: "24:00h", bandwidth: 1200 },
];

const chartConfig = {
  bandwidth: {
    label: "Bandwidth",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
export default function BandwidthLineAreaChart() {
  return (
    <Card className="border-none h-fit">
      <CardHeader>
        <CardTitle className="text-lg">
          <span> Bandwidth Usage</span>
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
              <linearGradient id="colorUvB" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="10%"
                  stopColor="var(--color-bandwidth)"
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
              tickFormatter={(value) => value / 100 + " GB"}
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
                      <div className="bg-chart-1 w-3 h-3 rounded "></div>
                      <TypographyMuted className="capitalize">
                        {name}
                      </TypographyMuted>
                    </div>
                    <TypographyParagraph>
                      {val / 100 + " GB"}
                    </TypographyParagraph>
                  </div>
                );
              }}
              content={
                <ChartTooltipContent className="w-fit" indicator="dot" />
              }
            />

            <Area
              dataKey="bandwidth"
              type="natural"
              fill="url(#colorUvB)"
              fillOpacity={0.4}
              stroke="var(--color-bandwidth)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
