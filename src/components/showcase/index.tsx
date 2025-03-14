import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../shadcn/tabs";
import AuthenticationShowcase from "./layout/auth";
import CardShowcase from "./layout/cards";
import SettingsLayout from "./layout/settings";
import GraphContainer from "./layout/graph";
import SidebarContainer from "./layout/sidebar";
export default function ShowCase() {
  return (
    <Tabs
      defaultValue="cards"
      className="w-full h-full"
      onValueChange={(val) => {
        (window as any).gtag("event", "change-tab", {
          tabName: val,
        });
      }}
    >
      <TabsList>
        <TabsTrigger value="cards">Cards</TabsTrigger>
        <TabsTrigger value="auth">Authentication</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="graph">Graph</TabsTrigger>
        <TabsTrigger value="sidebar">Sidebar</TabsTrigger>
      </TabsList>
      <TabsContent className="w-full h-full relative" value="cards">
        <CardShowcase />
      </TabsContent>
      <TabsContent
        className="w-full h-[calc(100%_-_40px)] overflow-auto relative"
        value="auth"
      >
        <AuthenticationShowcase />
      </TabsContent>
      <TabsContent className="w-full h-full relative" value="settings">
        <SettingsLayout />
      </TabsContent>
      <TabsContent
        className="w-full h-[calc(100%_-_40px)] overflow-auto relative"
        value="graph"
      >
        <GraphContainer />
      </TabsContent>
      <TabsContent
        className="w-full h-[calc(100%_-_40px)] py-4 relative"
        value="sidebar"
      >
        <SidebarContainer />
      </TabsContent>
    </Tabs>
  );
}
