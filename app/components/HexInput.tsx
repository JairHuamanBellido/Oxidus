import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { useEffect, useState } from "react";
import { isHexColor } from "@/lib/colors";
import { Input } from "@/app/components/input";

export function HexInput() {
  const { hex, setHex } = useThemeContext();
  const [value, setValue] = useState(() => hex.replace("#", ""));

  useEffect(() => {
    const hexWithoutHash = hex.replace("#", "");

    setValue(hexWithoutHash);
  }, [hex]);

  function setNewValue(newValue: string) {
    const valueWithHash = `#${newValue}`;
    setValue(newValue);
    if (!isHexColor(valueWithHash)) {
      return;
    }

    setHex(valueWithHash);
  }

  return (
    <label className={"text-3xl"}>
      <span className={"inline-block"}>#</span>

      <Input
        type="text"
        className="inline-block border-none p-0 text-3xl w-32 focus-visible:ring-0 focus-visible:ring-offset-0"
        minLength={0}
        maxLength={6}
        value={value}
        onChange={(e) => setNewValue(e.target.value)}
      />
    </label>
  );
}
