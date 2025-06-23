import SettingsProfile from "./containers/settings-profile";
import SettingsAppearance from "./containers/settings-appearance";
import SettingsSecurity from "./containers/settings-security";
import SettingsSessions from "./containers/settings-sessions";
import SettingsEmail from "./containers/settings-email";
import SettingsPush from "./containers/settings-push";
import SettingsSubscriptions from "./containers/settings-subscriptions";
import SettingsPayment from "./containers/settings-payment";
import SettingsAPIAccess from "./containers/settings-apiaccess";
import SettingsDeveloperOptions from "./containers/settings-developer";
interface Props {
  currentSelected: string;
}
export default function SettingsContainerDashboard({ currentSelected }: Props) {
  const components = {
    profile: <SettingsProfile />,
    appearance: <SettingsAppearance />,
    security: <SettingsSecurity />,
    sessions: <SettingsSessions />,
    email: <SettingsEmail />,
    push: <SettingsPush />,
    subscription: <SettingsSubscriptions />,
    payment: <SettingsPayment />,
    api: <SettingsAPIAccess />,
    developer: <SettingsDeveloperOptions />,
  };
  return (
    <div className="w-full p-8 h-[80vh] mb-8 relative overflow-auto">
      {components[currentSelected as keyof typeof components]}
    </div>
  );
}
