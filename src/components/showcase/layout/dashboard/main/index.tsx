import TypographyH2 from "@/src/components/typography/h2";
import DashboardCardSummarySection from "./card-summary-section";
import LineChartDockersCPUUsage from "./line-chart-dockers-cpu-usage";
import ContainersList from "./containers-list";
import BandwidthLineAreaChart from "./bandwidth-line-area-chart";
import MemoryLineAreaChart from "./memory-line-area-chart";
import NetworkLineAreaChart from "./network-line-area-chart copy";
import TableLogsContainers from "./table-logs-containers";

export default function DashboardMain() {
  return (
    <>
      <TypographyH2>Dockers Overview</TypographyH2>
      <div>
        <DashboardCardSummarySection />
        <LineChartDockersCPUUsage />
      </div>

      <div className="grid grid-cols-2 space-x-4 ">
        <ContainersList />
        <div className="space-y-4">
          <BandwidthLineAreaChart />
          <MemoryLineAreaChart />
          <NetworkLineAreaChart />
        </div>
      </div>
      <TableLogsContainers />
    </>
  );
}
