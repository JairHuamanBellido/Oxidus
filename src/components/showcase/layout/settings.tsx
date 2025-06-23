import {
  BellRing,
  Code,
  CreditCard,
  DoorOpen,
  Key,
  Mail,
  Palette,
  Rss,
  Shield,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "../../shadcn/sidebar";

import SettingsContainerDashboard from "./settings/settings-container-dashboard";
import { useState } from "react";
import { cn } from "@/src/utils/utils";

export default function SettingsLayout() {
  const [currentSelected, setCurrentSelected] = useState("profile");
  return (
    <div className="p-4 h-[900px] relative">
      <div className="border rounded-2xl h-[80vh] relative overflow-hidden">
        <SidebarProvider className="min-h-[80vh]">
          <Sidebar className="max-h-[80vh] h-[80vh]">
            <SidebarContent className="rounded-2xl">
              <SidebarGroup>
                <SidebarGroupLabel>General</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "profile",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("profile")}>
                          <User />
                          <span>Profile</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "appearance",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("appearance")}>
                          <Palette />
                          <span>Appearance</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Account</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "security",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("security")}>
                          <Shield />
                          <span>Security</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "sessions",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("sessions")}>
                          <DoorOpen />
                          <span>Sessions</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Notifications</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "email",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("email")}>
                          <Mail />
                          <span>Email</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "push",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("push")}>
                          <BellRing />
                          <span>Push</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Billing</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "subscription",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("subscription")}>
                          <Rss />
                          <span>Subscription</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "payment",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("payment")}>
                          <CreditCard />
                          <span>Payment Methods</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Advanced</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "api",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("api")}>
                          <Key />
                          <span>API Access</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem
                      className={cn("cursor-pointer", {
                        "bg-sidebar-primary text-sidebar-primary-foreground rounded-md ":
                          currentSelected === "developer",
                      })}
                    >
                      <SidebarMenuButton asChild>
                        <li onClick={() => setCurrentSelected("developer")}>
                          <Code />
                          <span>Developer Options</span>
                        </li>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SettingsContainerDashboard currentSelected={currentSelected} />
        </SidebarProvider>
      </div>
    </div>
  );
}
