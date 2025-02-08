import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { useThemeStore } from "@/src/store/theme.store";
import _ from "lodash";
import { Button } from "../../shadcn/button";
import { ThemeService } from "@/src/domain/service/ThemeService";
import { ISaveOxidusTheme } from "@/src/domain/interface/OxidusTheme";

export default function SaveChangesMenuItem() {
  const { theme: currentTheme, setTheme: setCurrentTheme } = useThemeStore();
  const {
    cssVariables: {
      shadcn: { dark, light },
    },
    hex,
  } = useThemeContext();

  const isThemeChanged = !_.isEqual(
    [dark, light],
    [currentTheme?.darkTheme, currentTheme?.lightTheme],
  );

  const onClickSaveChanges = async () => {
    if (currentTheme) {
      const updatedTheme: ISaveOxidusTheme = {
        name: currentTheme.name,
        mainColorHex: hex,
        darkTheme: dark,
        lightTheme: light,
        createdAt: currentTheme.createdAt,
      };
      await ThemeService.updateOne(currentTheme.id as string, updatedTheme);

      setCurrentTheme({ ...updatedTheme, id: currentTheme.id! });
    }
  };
  return (
    <>
      {!!currentTheme && (
        <Button
          onClick={onClickSaveChanges}
          variant={"ghost"}
          disabled={!isThemeChanged}
        >
          Save Changes
        </Button>
      )}
    </>
  );
}
