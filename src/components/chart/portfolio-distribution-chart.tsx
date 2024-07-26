"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from ".";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../shadcn/card";
import TypographyParagraph from "../typography/paragraph";
import TypographyMuted from "../typography/muted";

const chartData = [
  { stock: "VOO", stocks: 275, fill: "hsl(var(--chart-1))" },
  { stock: "MSFT", stocks: 200, fill: "hsl(var(--chart-2))" },
  { stock: "NVDA", stocks: 287, fill: "hsl(var(--chart-3))" },
  { stock: "AMD", stocks: 173, fill: "hsl(var(--chart-4))" },
  { stock: "AMZN", stocks: 190, fill: "hsl(var(--chart-5))" },
];

const chartConfig = {
  stocks: {
    label: "stocks",
  },
  VOO: {
    label: "VOO",
  },
  MSFT: {
    label: "MSFT",
  },
  NVDA: {
    label: "NVDA",
  },
  AMD: {
    label: "AMD",
  },
  AMZN: {
    label: "AMZN",
  },
} satisfies ChartConfig;

export function PortfolioDistributionCard() {
  const totalstocks = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.stocks, 0);
  }, []);

  return (
    <Card className="bg-transparent border-none flex flex-col">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
        <CardDescription className="text-muted-foreground">
          Distribution - Today
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <ChartContainer
          config={chartConfig}
          className="flex-1 mx-0  aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="stocks"
              nameKey="stock"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalstocks.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          stocks
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex-1 flex flex-col space-y-2">
          {chartData.map((val) => (
            <div
              key={`portfolio-${val.stock}`}
              className="flex items-start space-x-2"
            >
              <div
                style={{ background: val.fill }}
                className={`w-4 h-4 rounded`}
              ></div>
              <div className="flex flex-col">
                <TypographyParagraph className="leading-none">
                  {val.stock}
                </TypographyParagraph>
                <TypographyMuted>Stocks: {val.stocks}</TypographyMuted>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
