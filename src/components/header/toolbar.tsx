import { Separator } from "../shadcn/separator";
import { Menu } from "./menu";

export default function Toolbar() {
  return (
    <div className="w-full py-2 pr-8 flex items-center justify-end space-x-2">
      <Menu.ThemeGeneratorMethod />
      <Menu.ShowCode />
      <Separator orientation="vertical" className="h-8" />
      <Menu.Themes />
      <Menu.SaveChanges />
      <Menu.ColorPicker />
    </div>
  );
}
