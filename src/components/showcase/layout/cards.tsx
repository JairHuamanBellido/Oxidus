import CardInviteMembers from "./cards/CardInviteMembers";
import CardScore from "./cards/CardScore";
import CardBill from "./cards/CardBill";
import CardLightManager from "./cards/CardLightManager";
import { SalesLineChart } from "../../chart/sales-line-chart";
import SidebarShowCase from "../../sidebar/SidebarShowcase";
import { PortfolioDistributionCard } from "../../chart/portfolio-distribution-chart";
import CardDailySummary from "./cards/CardDailySummary";
import CardAIChat from "./cards/CardAIChat";
import CardTodayCalendar from "./cards/CardTodayCalendar";
import CardTaskScrum from "./cards/CardTaskScrum";
import CardContribution from "./cards/CardContribution";
import CardKeyboard from "./cards/CardKeyboard";

function CardContainer() {
  return (
    <div className="w-full bg-background rounded p-4 grid grid-cols-[repeat(auto-fill,minmax(500px,4fr))] gap-4">
      <CardScore />
      <CardInviteMembers />
      <CardBill />
      <CardLightManager />
      <SalesLineChart />
      <SidebarShowCase />
      <PortfolioDistributionCard />
      <CardTodayCalendar />
      <CardDailySummary />
      <CardTaskScrum />
      <CardKeyboard />
      <CardContribution />
      <CardAIChat />
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
