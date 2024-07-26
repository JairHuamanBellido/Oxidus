import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/chart";
import RadialChart from "@/src/components/chart/radial-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  focus: {
    label: "Focus",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
const lineChartData = [
  { hour: "10:00 am", focus: 186, anime: 80, other: 2 },
  { hour: "11:00 am", focus: 305, anime: 200, other: 14 },
  { hour: "12:00 pm", focus: 237, anime: 120, other: 8 },
  { hour: "13:00 pm", focus: 73, anime: 190, other: 6 },
  { hour: "14:00 pm", focus: 209, anime: 130, other: 11 },
  { hour: "15:00 pm", focus: 214, anime: 140, other: 8 },
];
const lineChartConfig = {
  focus: {
    label: "Focus",
    color: "hsl(var(--chart-1))",
  },
  anime: {
    label: "Anime",
    color: "hsl(var(--chart-2))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
const chartData = [{ key: 90, fill: "hsl(var(--chart-2))" }];
const chartData1 = [{ key: 25, fill: "hsl(var(--chart-1))" }];
const chartData2 = [{ key: 2, fill: "hsl(var(--chart-3))" }];

export default function CardDailySummary() {
  return (
    <Card className="row-span-2">
      <CardHeader>
        <CardTitle>Daily</CardTitle>
        <CardDescription>
          Today was a highly productive day with significant progress made on
          several fronts.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="w-full flex items-center">
          <div className="py-4 flex-1 flex flex-col items-center space-y-4">
            <RadialChart config={chartConfig} data={chartData} />
            <TypographyParagraph className="leading-none">
              Focus
            </TypographyParagraph>
          </div>
          <div className="py-4 flex-1 flex flex-col items-center space-y-4">
            <RadialChart config={chartConfig} data={chartData1} />
            <TypographyParagraph className="leading-none">
              Anime
            </TypographyParagraph>
          </div>
          <div className="py-4 flex-1 flex flex-col items-center space-y-4">
            <RadialChart config={chartConfig} data={chartData2} />
            <TypographyParagraph className="leading-none">
              Other
            </TypographyParagraph>
          </div>
        </div>
        <div className="flex-1">
          <ChartContainer config={lineChartConfig}>
            <AreaChart
              accessibilityLayer
              data={lineChartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="hour"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 6)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="other"
                type="natural"
                fill="var(--color-other)"
                fillOpacity={0.4}
                stroke="var(--color-other)"
                stackId="a"
              />
              <Area
                dataKey="anime"
                type="natural"
                fill="var(--color-anime)"
                fillOpacity={0.4}
                stroke="var(--color-anime)"
                stackId="a"
              />
              <Area
                dataKey="focus"
                type="natural"
                fill="var(--color-focus)"
                fillOpacity={0.4}
                stroke="var(--color-focus)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex font-medium text-muted-foreground leading-none">
          Featured Categories
        </div>
        <div className="flex flex-col space-y-2 w-full">
          <div className="w-full grid grid-cols-4 gap-x-2 items-center">
            <div className="flex items-center space-x-2">
              <TypographyParagraph>75%</TypographyParagraph>
              <TypographyParagraph>Coding</TypographyParagraph>
            </div>
            <div className="col-span-2 relative">
              <div className="w-3/4 bg-primary h-2 rounded" />
            </div>
            <TypographyParagraph className="text-right">
              2hr 15min
            </TypographyParagraph>
          </div>
          <div className="w-full grid grid-cols-4 gap-x-2 items-center">
            <div className="flex items-center space-x-2">
              <TypographyParagraph>15%</TypographyParagraph>
              <TypographyParagraph>Coffee</TypographyParagraph>
            </div>
            <div className="col-span-2 relative">
              <div className="w-1/4 bg-primary h-2 rounded" />
            </div>
            <TypographyParagraph className="text-right">
              {" "}
              34min
            </TypographyParagraph>
          </div>
          <div className="w-full grid grid-cols-4 gap-x-2 items-center">
            <div className="flex items-center space-x-2">
              <TypographyParagraph>7%</TypographyParagraph>
              <TypographyParagraph>Break</TypographyParagraph>
            </div>
            <div className="col-span-2 relative">
              <div className="w-1/12 bg-primary h-2 rounded" />
            </div>
            <TypographyParagraph className="text-right">
              12min{" "}
            </TypographyParagraph>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
