import { Separator } from "../shadcn/separator";
import { Menu } from "./menu";

export default function Toolbar() {
  return (
    <div className="w-fit py-2 pr-8 flex items-center justify-end space-x-2 fixed right-0 bg-background/50 backdrop-blur-xl z-50 rounded-lg">
      <Menu.ThemeGeneratorMethod />
      <Menu.ShowCode />
      <Separator orientation="vertical" className="h-8" />
      <Menu.Themes />
      <Menu.SaveChanges />
      <Menu.ColorPicker />
    </div>
  );
}
