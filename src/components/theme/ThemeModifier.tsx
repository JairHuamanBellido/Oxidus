import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { extractHSLValues } from "@/src/utils/extractColorValues";
import { useEffect } from "react";

export default function ThemeModifier() {
  const {
    cssVariables: {
      shadcn: { light, dark },
    },
    hex,
    mode,
  } = useThemeContext();

  useEffect(() => {
    const themeSelected = mode === "dark" ? dark : light;
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
    document.body.style.setProperty(
      "--chart-1",
      extractHSLValues(themeSelected.chart1.color),
    );
    document.body.style.setProperty(
      "--chart-2",
      extractHSLValues(themeSelected.chart2.color),
    );
    document.body.style.setProperty(
      "--chart-3",
      extractHSLValues(themeSelected.chart3.color),
    );
    document.body.style.setProperty(
      "--chart-4",
      extractHSLValues(themeSelected.chart4.color),
    );
    document.body.style.setProperty(
      "--chart-5",
      extractHSLValues(themeSelected.chart5.color),
    );

    document.body.style.setProperty(
      "--sidebar-background",
      extractHSLValues(themeSelected.sidebarBackground.color),
    );
    document.body.style.setProperty(
      "--sidebar-foreground",
      extractHSLValues(themeSelected.sidebarForeground.color),
    );
    document.body.style.setProperty(
      "--sidebar-primary",
      extractHSLValues(themeSelected.sidebarPrimary.color),
    );
    document.body.style.setProperty(
      "--sidebar-primary-foreground",
      extractHSLValues(themeSelected.sidebarPrimaryForeground.color),
    );
    document.body.style.setProperty(
      "--sidebar-accent",
      extractHSLValues(themeSelected.sidebarAccent.color),
    );
    document.body.style.setProperty(
      "--sidebar-accent-foreground",
      extractHSLValues(themeSelected.sidebarAccentForeground.color),
    );
    document.body.style.setProperty(
      "--sidebar-border",
      extractHSLValues(themeSelected.sidebarBorder.color),
    );
    document.body.style.setProperty(
      "--sidebar-ring",
      extractHSLValues(themeSelected.sidebarRing.color),
    );
  }, [hex, light, dark, mode]);
  return <></>;
}
