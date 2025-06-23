import CardInviteMembers from "./cards/CardInviteMembers";
import CardBill from "./cards/CardBill";
import CardLightManager from "./cards/CardLightManager";
import { SalesLineChart } from "../../chart/sales-line-chart";
import { PortfolioDistributionCard } from "../../chart/portfolio-distribution-chart";
import CardTodayCalendar from "./cards/CardTodayCalendar";
import CardTaskScrum from "./cards/CardTaskScrum";
import CardContribution from "./cards/CardContribution";
import CardResetPassword from "./cards/CardResetPassword";
import CardShareProject from "./cards/CardShareProject";
import CardSubscription from "./cards/CardSubscription";
import CardStatistics from "./cards/CardStatistics";
import CardWeather from "./cards/CardWeather";

function CardContainer() {
  return (
    <div className="w-full bg-background rounded p-4 grid grid-cols-[repeat(auto-fill,minmax(350px,3fr))] gap-4 ">
      <div className="w-full flex flex-col space-y-4">
        <CardResetPassword />
        <SalesLineChart />
        <CardStatistics />
        <CardWeather />
        <CardContribution />
      </div>
      <div className="w-full space-y-4">
        <CardShareProject />
        <CardInviteMembers />
        <CardLightManager />
        <CardBill />
        <CardTaskScrum />
      </div>
      <div className="w-full space-y-4">
        <CardSubscription />
        <PortfolioDistributionCard />
        <CardTodayCalendar />
      </div>
    </div>
  );
}

export default function CardShowcase() {
  return (
    <div className="mt-4">
      <CardContainer />
    </div>
  );
}
