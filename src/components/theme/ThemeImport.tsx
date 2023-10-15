import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "../shadcn/input";
import { Label } from "../shadcn/label";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { Button } from "../shadcn/button";

export default function ThemeImport() {
  const { setTheme } = useThemeContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string);
          setTheme(json);
        } catch (error) {
          alert("Invalid format!. Check your JSON fiLE");
        } finally {
          e.target.value = "";
        }
      };

      reader.readAsText(file, "UTF-8");
    }
  };
  return (
    <div className="flex items-center text-center">
      <Button variant={"outline"}>
        <Label htmlFor="theme-file">Submit file</Label>
      </Button>
      <Input
        onChange={onChange}
        id="theme-file"
        type="file"
        className="invisible"
        placeholder="Submit file"
      />
    </div>
  );
}
