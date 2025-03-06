import { useThemeStore } from "@/src/store/theme.store";
import TypographyMuted from "../typography/muted";
import TypographyParagraph from "../typography/paragraph";
import _ from "lodash";
export default function CurrentThemeIndicatorContainer() {
  const { theme: currentTheme } = useThemeStore();

  return (
    <>
      {!!currentTheme && (
        <div className="flex flex-col items-center justify-center">
          <TypographyMuted>Current Theme </TypographyMuted>
          <div className="flex items-center space-x-2">
            <TypographyParagraph className="">
              {currentTheme.name}
            </TypographyParagraph>
            <TypographyMuted className="flex items-center space-x-2">
              <div
                style={{ background: currentTheme.mainColorHex }}
                className="w-4 h-4 rounded"
              />
              <span>{currentTheme.mainColorHex}</span>
            </TypographyMuted>
          </div>
        </div>
      )}
    </>
  );
}
