"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcn/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from ".";
import { fromNumberToCurrency } from "@/src/utils/utils";
import TypographyMuted from "../typography/muted";
import TypographyParagraph from "../typography/paragraph";

const chartData = [
  { month: "January", sales: 1304 },
  { month: "February", sales: 2401 },
  { month: "March", sales: 2034 },
  { month: "April", sales: 748 },
  { month: "May", sales: 2893 },
  { month: "June", sales: 5433 },
  { month: "July", sales: 4342 },
  { month: "August", sales: 8392 },
  { month: "September", sales: 7562 },
  { month: "October", sales: 4551 },
  { month: "November", sales: 6733 },
  { month: "December", sales: 7883 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function SalesLineChart() {
  return (
    <Card className="border-none bg-transparent">
      <CardHeader>
        <CardTitle className="text-muted-foreground text-base">Sales</CardTitle>
        <CardDescription className="text-foreground text-2xl">
          $12,340.12
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--background))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              formatter={(val: number, name) => {
                return (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <div className="bg-primary w-3 h-3 rounded "></div>
                      <TypographyMuted className="capitalize">
                        {name}
                      </TypographyMuted>
                    </div>
                    <TypographyParagraph>
                      {fromNumberToCurrency(val)}
                    </TypographyParagraph>
                  </div>
                );
              }}
              content={
                <ChartTooltipContent className="w-fit" indicator="dot" />
              }
            />

            <Area
              dataKey="sales"
              type="linear"
              fill="url(#colorUv)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
