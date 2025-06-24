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
  { time: "01:00h", network: 1304 },
  { time: "02:00h", network: 1305 },
  { time: "03:00h", network: 1302 },
  { time: "04:00h", network: 1303 },
  { time: "05:00h", network: 1002 },
  { time: "06:00h", network: 1001 },
  { time: "07:00h", network: 1010 },
  { time: "08:00h", network: 2034 },
  { time: "09:00h", network: 2056 },
  { time: "10:00h", network: 2100 },
  { time: "11:00h", network: 3090 },
  { time: "12:00h", network: 2010 },
  { time: "13:00h", network: 1200 },
  { time: "14:00h", network: 5003 },
  { time: "15:00h", network: 5004 },
  { time: "16:00h", network: 1304 },
  { time: "17:00h", network: 1304 },
  { time: "18:00h", network: 1324 },
  { time: "19:00h", network: 1304 },
  { time: "20:00h", network: 1304 },
  { time: "21:00h", network: 1305 },
  { time: "22:00h", network: 1560 },
  { time: "23:00h", network: 1304 },
  { time: "24:00h", network: 1200 },
];

const chartConfig = {
  network: {
    label: "Network",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
export default function NetworkLineAreaChart() {
  return (
    <Card className="border-none h-fit">
      <CardHeader>
        <CardTitle className="text-lg">
          <span> Network I/O</span>
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
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="10%"
                  stopColor="var(--color-network)"
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
              tickFormatter={(value) => value / 100 + " MB"}
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
                      <div className="bg-chart-3 w-3 h-3 rounded "></div>
                      <TypographyMuted className="capitalize">
                        {name}
                      </TypographyMuted>
                    </div>
                    <TypographyParagraph>
                      {val / 100 + " MB"}
                    </TypographyParagraph>
                  </div>
                );
              }}
              content={
                <ChartTooltipContent className="w-fit" indicator="dot" />
              }
            />

            <Area
              dataKey="network"
              type="natural"
              fill="url(#colorUv)"
              fillOpacity={0.4}
              stroke="var(--color-network)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
