import { cn } from "@/src/utils/utils";
import { Palette, Settings, User, LineChart, Bell } from "lucide-react";
import { useState } from "react";
import TypographyParagraph from "../typography/paragraph";
import TypographyH2 from "../typography/h2";

export const data = [
  {
    label: "Profile",
    key: "profile",
    icon: <User size={20} />,
  },
  {
    label: "Chart",
    key: "chart",
    icon: <LineChart size={20} />,
  },
  {
    label: "Notifications",
    key: "notifications",
    icon: <Bell size={20} />,
  },
  {
    label: "Theme",
    key: "theme",
    icon: <Palette size={20} />,
  },
  {
    label: "Settings",
    key: "configuration",
    icon: <Settings size={20} />,
  },
];

export default function SidebarShowCase() {
  const [currentSelected, setCurrentSelected] = useState("profile");
  return (
    <div className="flex flex-col">
      <TypographyH2 className="border-none text-xl mb-2">Sidebar</TypographyH2>
      <nav>
        <ul className="space-y-1">
          {data.map((val) => (
            <li
              key={val.key}
              className={cn(
                "py-2 px-4 cursor-pointer text-sm  font-regular rounded-lg",
                {
                  "bg-primary text-primary-foreground ":
                    currentSelected === val.key,
                  "text-foreground/60 hover:bg-muted/40":
                    currentSelected !== val.key,
                },
              )}
              onClick={() => {
                setCurrentSelected(val.key);
              }}
            >
              <TypographyParagraph className="flex items-center  space-x-2">
                {val.icon} <span>{val.label}</span>
              </TypographyParagraph>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
