import { Trash } from "lucide-react";
import { ThemeService } from "@/src/domain/service/ThemeService";
import { Button } from "../../shadcn/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../shadcn/popover";
import { useLiveQuery } from "dexie-react-hooks";
import { IOxidusThemeIndexDB } from "@/src/infrastructure/interface/OxidusThemeModel";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import TypographyParagraph from "../../typography/paragraph";
import TypographyMuted from "../../typography/muted";
import { useThemeStore } from "@/src/store/theme.store";
import AddNewThemeButton from "../../theme/AddNewThemeButton";

export default function ThemesMenuItem() {
  const savedThemes = useLiveQuery(() => ThemeService.getAll());

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"ghost"}>Themes</Button>
        </PopoverTrigger>
        <PopoverContent className="space-y-1 w-[360px] max-h-[400px] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-border pb-1">
            <TypographyParagraph>My Themes</TypographyParagraph>
            <AddNewThemeButton />
          </div>
          {savedThemes && (
            <>
              {savedThemes.length < 1 ? (
                <div className="py-4">
                  <TypographyMuted className="text-center ">
                    No themes saved.
                  </TypographyMuted>
                  <TypographyMuted className="text-center">
                    Click on "Add" button to save the current one
                  </TypographyMuted>
                </div>
              ) : (
                <SavedThemesListContainer themes={savedThemes} />
              )}
            </>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
}

const SavedThemesListContainer = ({
  themes,
}: {
  themes: IOxidusThemeIndexDB[];
}) => {
  const { setTheme: selectCurrentTheme, theme: currentTheme } = useThemeStore();
  const { setCssVariables, setHex, setTheme, applyCustomTheme, ...rest } =
    useThemeContext();
  const onSelectTheme = (theme: IOxidusThemeIndexDB) => {
    applyCustomTheme(true);
    selectCurrentTheme(theme);
    setTheme({
      ...rest,
      hex: theme.mainColorHex,
      cssVariables: {
        shadcn: { dark: theme.darkTheme, light: theme.lightTheme },
      },
    });
  };

  return (
    <>
      {themes.map((theme) => (
        <div key={theme.id} className="flex justify-between items-center">
          <div
            className="p-2 cursor-pointer space-y-1"
            onClick={() => onSelectTheme(theme)}
          >
            <TypographyParagraph>{theme.name} </TypographyParagraph>
            <TypographyMuted className="flex items-center space-x-2">
              <div
                style={{ background: theme.mainColorHex }}
                className="w-4 h-4 rounded"
              />
              <span>{theme.mainColorHex}</span>
            </TypographyMuted>
          </div>
          <div className="flex items-center space-x-2 ">
            {currentTheme?.id === theme.id && (
              <TypographyParagraph className="bg-primary/10 text-primary rounded py-1 px-2">
                Current
              </TypographyParagraph>
            )}
            <Button
              className="p-1 h-fit"
              variant={"ghost"}
              onClick={async () => ThemeService.deleteOne(theme.id!)}
            >
              <Trash className="text-foreground " size={16} />
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};
