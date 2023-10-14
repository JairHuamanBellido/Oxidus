import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function SidebarThemeBlock({ children }: Props) {
  return <div className="flex flex-col space-y-2">{children}</div>;
}
