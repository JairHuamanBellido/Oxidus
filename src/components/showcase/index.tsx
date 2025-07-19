import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../shadcn/tabs";
import AuthenticationShowcase from "./layout/auth";
import CardShowcase from "./layout/cards";
import SettingsLayout from "./layout/settings";
import DashboardContainer from "./layout/dashboard";
import AIChatContainer from "./layout/ai";
export default function ShowCase() {
  return (
    <Tabs
      defaultValue="cards"
      className="w-full h-full max-w-[1440px] mx-auto"
      onValueChange={(val) => {
        (window as any).gtag("event", "change-tab", {
          tabName: val,
        });
      }}
    >
      <TabsList>
        <TabsTrigger className="data-[state=active]:shadow-none" value="cards">
          Cards
        </TabsTrigger>
        <TabsTrigger className="data-[state=active]:shadow-none" value="auth">
          Authentication
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:shadow-none"
          value="settings"
        >
          Settings
        </TabsTrigger>
        <TabsTrigger className="data-[state=active]:shadow-none" value="ai">
          AI Chat
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:shadow-none"
          value="dashboard"
        >
          Dashboard
        </TabsTrigger>
      </TabsList>
      <TabsContent className="w-full h-full relative" value="cards">
        <CardShowcase />
      </TabsContent>
      <TabsContent
        className="w-full h-[calc(100%_-_40px)] relative"
        value="auth"
      >
        <AuthenticationShowcase />
      </TabsContent>
      <TabsContent className="w-full h-full relative" value="settings">
        <SettingsLayout />
      </TabsContent>
      <TabsContent
        className="w-full h-[calc(100%_-_40px)] overflow-auto relative"
        value="ai"
      >
        <AIChatContainer />
      </TabsContent>
      <TabsContent
        className="w-full h-[calc(100%_-_40px)] py-4 relative"
        value="dashboard"
      >
        <DashboardContainer />
      </TabsContent>
    </Tabs>
  );
}
