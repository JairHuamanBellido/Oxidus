import {
  Calendar,
  Container,
  Search,
  Settings,
  ChartNoAxesCombined,
  Logs,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/src/components/shadcn/sidebar";

import { useState } from "react";
import { cn } from "@/src/utils/utils";
import DashboardMain from "./dashboard/main";
import TypographyH3 from "../../typography/h3";
import DashboardLogs from "./dashboard/logs";

const items = [
  {
    title: "Dashboard",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Logs",
    icon: Logs,
  },
];

export default function DashboardContainer() {
  const [currentSelected, setCurrentSelected] = useState("Dashboard");

  const components = {
    Dashboard: <DashboardMain />,
    Logs: <DashboardLogs />,
  };
  return (
    <div className="p-4 h-[1000px] relative">
      <div className="border rounded-2xl h-[900px] relative overflow-hidden">
        <SidebarProvider className="min-h-[900px] relative">
          <Sidebar className="max-h-[900px] h-[900px]">
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent hover:text-foreground"
                  >
                    <TypographyH3 className="flex items-center gap-2 text-2xl ">
                      <Container strokeWidth={1} />
                      <span> DockerLogs</span>
                    </TypographyH3>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="rounded-2xl">
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem
                        className={cn("cursor-pointer", {
                          "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                            currentSelected === item.title,
                        })}
                        key={item.title}
                      >
                        <SidebarMenuButton asChild>
                          <li onClick={() => setCurrentSelected(item.title)}>
                            <item.icon />
                            <span>{item.title}</span>
                          </li>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <div className="w-full p-8 h-[900px] mb-8 relative overflow-auto space-y-8">
            {components[currentSelected as keyof typeof components]}
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
