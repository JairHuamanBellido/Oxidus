import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/chart";
import { Button } from "@/src/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/src/components/shadcn/dropdown-menu";
import { ChevronDown, Container } from "lucide-react";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const cpuUsagePerContainer = [
  {
    time: "1min",
    container1: 21,
    container2: 22,
    container3: 22,
    container4: 25,
    container5: 22,
  },
  {
    time: "5min",
    container1: 22,
    container2: 23,
    container3: 23,
    container4: 30,
    container5: 32,
  },
  {
    time: "10min",
    container1: 24,
    container2: 23,
    container3: 21,
    container4: 18,
    container5: 24,
  },
  {
    time: "15min",
    container1: 80,
    container2: 79,
    container3: 78,
    container4: 80,
    container5: 81,
  },
  {
    time: "20min",
    container1: 62,
    container2: 69,
    container3: 68,
    container4: 60,
    container5: 61,
  },
  {
    time: "25min",
    container1: 61,
    container2: 69,
    container3: 78,
    container4: 60,
    container5: 59,
  },
  {
    time: "30min",
    container1: 61,
    container2: 69,
    container3: 78,
    container4: 60,
    container5: 59,
  },
];

const chartConfig = {
  container1: {
    label: "Container 1",
    color: "hsl(var(--chart-1))",
  },
  container2: {
    label: "Container 2",
    color: "hsl(var(--chart-2))",
  },
  container3: {
    label: "Container 3",
    color: "hsl(var(--chart-3))",
  },
  container4: {
    label: "Container 4",
    color: "hsl(var(--chart-4))",
  },
  container5: {
    label: "Container 5",
    color: "hsl(var(--chart-5))",
  },
};
export default function LineChartDockersCPUUsage() {
  const [selectedContainers, setSelectedContainers] = useState<string[]>([
    "container1",
    "container2",
    "container3",
    "container4",
    "container5",
  ]);
  return (
    <Card className="bg-transparent border-none">
      <CardHeader>
        <CardTitle>CPU Performance Overview</CardTitle>
        <CardDescription>
          Real-time CPU utilization across all containers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-end w-full mb-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="flex items-center space-x-2">
                <Container size={16} />
                <span>Containers </span>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.entries(chartConfig).map(([key, value]) => (
                <DropdownMenuCheckboxItem
                  key={key}
                  checked={selectedContainers.includes(key)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedContainers([...selectedContainers, key]);
                    } else {
                      setSelectedContainers(
                        selectedContainers.filter((item) => item !== key),
                      );
                    }
                  }}
                >
                  {value.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={cpuUsagePerContainer}
            margin={{
              left: 0,
              right: 12,
            }}
            stackOffset="expand"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value + "%"}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" hideLabel />}
            />
            {selectedContainers.map((container, index) => (
              <Area
                key={`${container}-${index}`}
                type="step"
                dataKey={container}
                stroke={`var(--color-${container})`}
                fill={`var(--color-${container})`}
                fillOpacity={0.05}
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
