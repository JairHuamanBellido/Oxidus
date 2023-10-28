import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs, TabsList, TabsTrigger } from "../shadcn/tabs";
import AuthenticationShowcase from "./layout/auth";
import CardShowcase from "./layout/cards";
import SettingsLayout from "./layout/settings";

export default function ShowCase() {
  return (
    <Tabs defaultValue="auth" className="w-full h-full">
      <TabsList>
        <TabsTrigger value="auth">Authentication</TabsTrigger>
        <TabsTrigger value="cards">Cards</TabsTrigger>
        <TabsTrigger value="settings">Setttings</TabsTrigger>
      </TabsList>
      <TabsContent className="w-full h-full relative" value="auth">
        <AuthenticationShowcase />
      </TabsContent>
      <TabsContent className="w-full h-full relative" value="cards">
        <CardShowcase />
      </TabsContent>
      <TabsContent className="w-full h-full relative" value="settings">
        <SettingsLayout />
      </TabsContent>
      
    </Tabs>
  );
}
