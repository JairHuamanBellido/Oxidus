import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
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
      extractHSLValues(themeSelected.background.color),
    );
    document.body.style.setProperty(
      "--foreground",
      extractHSLValues(themeSelected.foreground.color),
    );

    document.body.style.setProperty(
      "--primary",
      extractHSLValues(themeSelected.primary.color),
    );
    document.body.style.setProperty(
      "--primary-foreground",
      extractHSLValues(themeSelected.primaryForeground.color),
    );

    document.body.style.setProperty(
      "--card",
      extractHSLValues(themeSelected.card.color),
    );

    document.body.style.setProperty(
      "--card-foreground",
      extractHSLValues(themeSelected.cardForeground.color),
    );

    document.body.style.setProperty(
      "--popover",
      extractHSLValues(themeSelected.popover.color),
    );
    document.body.style.setProperty(
      "--popover-foreground",
      extractHSLValues(themeSelected.popoverForeground.color),
    );

    document.body.style.setProperty(
      "--secondary",
      extractHSLValues(themeSelected.secondary.color),
    );

    document.body.style.setProperty(
      "--secondary-foreground",
      extractHSLValues(themeSelected.secondaryForeground.color),
    );

    document.body.style.setProperty(
      "--muted",
      extractHSLValues(themeSelected.muted.color),
    );
    document.body.style.setProperty(
      "--muted-foreground",
      extractHSLValues(themeSelected.mutedForeground.color),
    );

    document.body.style.setProperty(
      "--accent",
      extractHSLValues(themeSelected.accent.color),
    );

    document.body.style.setProperty(
      "--accent-foreground",
      extractHSLValues(themeSelected.accentForeground.color),
    );

    document.body.style.setProperty(
      "--border",
      extractHSLValues(themeSelected.border.color),
    );
    document.body.style.setProperty(
      "--input",
      extractHSLValues(themeSelected.input.color),
    );
    document.body.style.setProperty(
      "--ring",
      extractHSLValues(themeSelected.ring.color),
    );
  }, [hex, light, dark, theme]);
  return <></>;
}
