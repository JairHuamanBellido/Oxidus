import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { extractHSLValues } from "@/src/utils/getHSLValues";
import { useEffect } from "react";

export default function ThemeModifier() {
  const {
    cssVariables: {
      shadcn: { light, dark },
    },
    hex,
    theme,
  } = useThemeContext();

  useEffect(() => {
    const themeSelected = theme === "dark" ? dark : light;
    document.body.style.setProperty(
      "--background",
      extractHSLValues(themeSelected.background),
    );
    document.body.style.setProperty(
      "--foreground",
      extractHSLValues(themeSelected.foreground),
    );

    document.body.style.setProperty(
      "--primary",
      extractHSLValues(themeSelected.primary),
    );
    document.body.style.setProperty(
      "--primary-foreground",
      extractHSLValues(themeSelected.primaryForeground),
    );

    document.body.style.setProperty(
      "--card",
      extractHSLValues(themeSelected.card),
    );

    document.body.style.setProperty(
      "--card-foreground",
      extractHSLValues(themeSelected.cardForeground),
    );

    document.body.style.setProperty(
      "--popover",
      extractHSLValues(themeSelected.popover),
    );
    document.body.style.setProperty(
      "--popover-foreground",
      extractHSLValues(themeSelected.popoverForeground),
    );

    document.body.style.setProperty(
      "--secondary",
      extractHSLValues(themeSelected.secondary),
    );

    document.body.style.setProperty(
      "--secondary-foreground",
      extractHSLValues(themeSelected.secondaryForeground),
    );

    document.body.style.setProperty(
      "--muted",
      extractHSLValues(themeSelected.muted),
    );
    document.body.style.setProperty(
      "--muted-foreground",
      extractHSLValues(themeSelected.mutedForeground),
    );

    document.body.style.setProperty(
      "--accent",
      extractHSLValues(themeSelected.accent),
    );

    document.body.style.setProperty(
      "--accent-foreground",
      extractHSLValues(themeSelected.accentForeground),
    );

    document.body.style.setProperty(
      "--border",
      extractHSLValues(themeSelected.border),
    );
    document.body.style.setProperty(
      "--input",
      extractHSLValues(themeSelected.input),
    );
    document.body.style.setProperty(
      "--ring",
      extractHSLValues(themeSelected.ring),
    );
  }, [hex, light, dark, theme]);
  return <></>;
}
