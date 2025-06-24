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
import { Bar, BarChart, CartesianGrid } from "recharts";
import TypographyH4 from "@/src/components/typography/h4";
import TypographyMuted from "@/src/components/typography/muted";

const chartData = [
  { month: "January", sales: 1304 },
  { month: "February", sales: 2401 },
  { month: "March", sales: 2034 },
  { month: "April", sales: 748 },
  { month: "May", sales: 2893 },

  { month: "December", sales: 7883 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary-foreground))",
  },
} satisfies ChartConfig;
export default function CardStatistics() {
  return (
    <Card className="bg-primary text-primary-foreground border-none">
      <CardHeader>
        <CardTitle className="font-light">Statistics</CardTitle>
      </CardHeader>
      <CardContent className="flex w-full relative">
        <div className="w-3/4 flex flex-col ">
          <TypographyH4 className="text-4xl font-bold">1,000</TypographyH4>
          <TypographyMuted className="text-primary-foreground/80">
            Sales
          </TypographyMuted>
        </div>
        <ChartContainer className="w-1/4" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-sidebar" hideLabel />}
            />
            <Bar dataKey="sales" fill="var(--color-sales)" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
