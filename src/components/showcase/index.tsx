import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../shadcn/tabs";
import AuthenticationShowcase from "./layout/auth";
import CardShowcase from "./layout/cards";
import SettingsLayout from "./layout/settings";

export default function ShowCase() {
  return (
    <Tabs defaultValue="cards" className="w-full h-full">
      <TabsList>
        <TabsTrigger value="cards">Cards</TabsTrigger>
        <TabsTrigger value="auth">Authentication</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent className="w-full h-full relative" value="cards">
        <CardShowcase />
      </TabsContent>
      <TabsContent className="w-full h-[calc(100%_-_40px)] overflow-auto relative" value="auth">
        <AuthenticationShowcase />
      </TabsContent>
      <TabsContent className="w-full h-full relative" value="settings">
        <SettingsLayout />
      </TabsContent>
    </Tabs>
  );
}
