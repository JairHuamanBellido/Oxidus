import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/chart";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const lastTwoMonthsApiCalls = [
  {
    date: "2024-01-01",
    apiCalls: 100,
  },
  {
    date: "2024-01-02",
    apiCalls: 120,
  },
  {
    date: "2024-01-03",
    apiCalls: 95,
  },
  {
    date: "2024-01-04",
    apiCalls: 2500,
  },
  {
    date: "2024-01-05",
    apiCalls: 110,
  },
  {
    date: "2024-01-06",
    apiCalls: 3000,
    note: "Major DDoS attack",
  },
  {
    date: "2024-01-07",
    apiCalls: 2800,
    note: "DDoS attack mitigation in progress",
  },
  {
    date: "2024-01-08",
    apiCalls: 105,
  },
  {
    date: "2024-01-09",
    apiCalls: 115,
  },
  {
    date: "2024-01-10",
    apiCalls: 125,
  },
  {
    date: "2024-01-11",
    apiCalls: 4500,
  },
  {
    date: "2024-01-12",
    apiCalls: 4200,
  },
  {
    date: "2024-01-13",
    apiCalls: 130,
  },
  {
    date: "2024-01-14",
    apiCalls: 145,
  },
  { date: "2024-01-15", apiCalls: 630 },
  { date: "2024-01-16", apiCalls: 240 },
  { date: "2024-01-17", apiCalls: 150 },
  { date: "2024-01-18", apiCalls: 60 },
  { date: "2024-01-19", apiCalls: 1270 },
  { date: "2024-01-20", apiCalls: 1280 },
  { date: "2024-01-21", apiCalls: 1290 },
  { date: "2024-01-22", apiCalls: 1300 },
  { date: "2024-01-23", apiCalls: 1310 },
  { date: "2024-01-24", apiCalls: 520 },
  { date: "2024-01-25", apiCalls: 332 },
  { date: "2024-01-26", apiCalls: 389 },
  { date: "2024-01-27", apiCalls: 482 },
  { date: "2024-01-28", apiCalls: 512 },
  { date: "2024-01-29", apiCalls: 370 },
  { date: "2024-01-30", apiCalls: 380 },
  { date: "2024-01-31", apiCalls: 234 },
  { date: "2024-02-01", apiCalls: 102 },
  { date: "2024-02-02", apiCalls: 789 },
  { date: "2024-02-03", apiCalls: 182 },
  { date: "2024-02-04", apiCalls: 387 },
  { date: "2024-02-05", apiCalls: 1723 },
  { date: "2024-02-06", apiCalls: 1234 },
  { date: "2024-02-07", apiCalls: 1234 },
  { date: "2024-02-08", apiCalls: 823 },
  { date: "2024-02-09", apiCalls: 512 },
  { date: "2024-02-10", apiCalls: 818 },
  { date: "2024-02-11", apiCalls: 132 },
  { date: "2024-02-12", apiCalls: 510 },
  { date: "2024-02-13", apiCalls: 520 },
  { date: "2024-02-14", apiCalls: 530 },
  { date: "2024-02-15", apiCalls: 540 },
  { date: "2024-02-16", apiCalls: 550 },
  { date: "2024-02-17", apiCalls: 560 },
  { date: "2024-02-18", apiCalls: 570 },
  { date: "2024-02-19", apiCalls: 580 },
  { date: "2024-02-20", apiCalls: 590 },
  { date: "2024-02-21", apiCalls: 200 },
  { date: "2024-02-22", apiCalls: 310 },
  { date: "2024-02-23", apiCalls: 720 },
  { date: "2024-02-24", apiCalls: 130 },
  { date: "2024-02-25", apiCalls: 140 },
  { date: "2024-02-26", apiCalls: 350 },
  { date: "2024-02-27", apiCalls: 660 },
  { date: "2024-02-28", apiCalls: 970 },
  { date: "2024-02-29", apiCalls: 480 },
];
const chartConfig = {
  apiCalls: {
    label: "API Calls",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
export default function APICallsChart() {
  return (
    <div className="w-full relative flex flex-col gap-4">
      <div>
        <TypographyParagraph className="text-xl">API Calls</TypographyParagraph>
        <TypographyMuted>
          The number of API calls made to the server in the last two months.
        </TypographyMuted>
      </div>

      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full"
      >
        <BarChart
          accessibilityLayer
          data={lastTwoMonthsApiCalls}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey={"apiCalls"} fill={`var(--color-apiCalls)`} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
