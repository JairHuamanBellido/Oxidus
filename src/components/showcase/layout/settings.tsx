import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../shadcn/tabs";
import ActivityLogsSettings from "./settings/activity";
import PreferencesSettings from "./settings/preferences";
import PrivacySettings from "./settings/privacy";
import ProfileSettings from "./settings/profile";
import StorageSettings from "./settings/storage";

export default function SettingsLayout() {
  return (
    <div className="p-4">
      <Tabs defaultValue="profile">
        <TabsList className="bg-transparent">
          <TabsTrigger
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            value="profile"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            value="preferences"
          >
            Preferences
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            value="privacy"
          >
            Privacy and security
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            value="activity"
          >
            Activity
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            value="storage"
          >
            Storage
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>
        <TabsContent value="preferences">
          <PreferencesSettings />
        </TabsContent>
        <TabsContent value="privacy">
          <PrivacySettings />
        </TabsContent>
        <TabsContent value="activity">
          <ActivityLogsSettings />
        </TabsContent>
        <TabsContent value="storage">
          <StorageSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
