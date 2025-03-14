import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { Button } from "../shadcn/button";
import { ThemeService } from "@/src/domain/service/ThemeService";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";
import { Label } from "../shadcn/label";
import { Input } from "../shadcn/input";
import TypographyParagraph from "../typography/paragraph";
import Color from "color";
import { FormEvent, useState } from "react";
import { useThemeStore } from "@/src/store/theme.store";
import { IOxidusThemeIndexDB } from "@/src/infrastructure/interface/OxidusThemeModel";

export default function AddNewThemeButton() {
  const theme = useThemeContext();
  const [themeName, setThemeName] = useState<string>("");
  const [open, setIsOpen] = useState<boolean>(false);
  const { setTheme } = useThemeStore();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTheme: IOxidusThemeIndexDB = {
      name: themeName,
      darkTheme: theme.cssVariables.shadcn.dark,
      lightTheme: theme.cssVariables.shadcn.light,
      mainColorHex: theme.hex,
      createdAt: new Date(),
    };
    const id = await ThemeService.save(newTheme);
    newTheme.id = id;

    setTheme(newTheme);

    setThemeName("");
    setIsOpen(false);
    (window as any).gtag("event", "theme-created");
  };
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className=" h-fit w-fit flex items-center space-x-2 text-foreground"
        >
          Add
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Save Theme</DialogTitle>
        <form onSubmit={onSubmit} className="space-y-4 flex flex-col">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              value={themeName}
              onChange={(e) => setThemeName(e.target.value)}
              name="name"
              required
              placeholder="My awesome theme"
            />
          </div>

          <div className="space-y-1">
            <Label>Main color</Label>
            <TypographyParagraph className="flex items-center  space-x-2 text-muted-foreground">
              <div
                style={{ background: Color(theme.hex).string() }}
                className="w-4 h-4 rounded-sm"
              />
              <span> {Color(theme.mainColor).hex()}</span>
            </TypographyParagraph>
          </div>

          <Button type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
