import { ChangeEvent } from "react";
import { Input } from "../shadcn/input";
import { Label } from "../shadcn/label";
import { Button } from "../shadcn/button";
import useThemeImport from "@/src/hooks/useThemeImport";

export default function ThemeImport() {
  const { submit } = useThemeImport();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    submit(file, e);
    (window as any).gtag("event", "import-theme");
  };
  return (
    <div className="flex items-center">
      <Button variant={"outline"}>
        <Label htmlFor="theme-file">Import theme</Label>
      </Button>
      <Input
        onChange={onChange}
        id="theme-file"
        type="file"
        className="invisible w-0 h-0 p-0 m-0"
        placeholder="Import theme"
      />
    </div>
  );
}
