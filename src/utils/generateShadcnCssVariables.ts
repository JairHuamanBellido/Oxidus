import { ShadcnVariables } from "@/src/contexts/ThemeContext/ThemeContext";
import { extractHSLValues, extractOklchValues } from "./extractColorValues";

export function generateShadcnCssVariables(
  theme: ShadcnVariables,
  mode: "hsl" | "oklch" | "hsl-no-prefix" | "oklch-no-prefix",
) {
  const withPrefix = !mode.includes("no-prefix");

  return `
--background: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.background.color, withPrefix)
      : extractOklchValues(theme.background.color, withPrefix)
  };
--foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.foreground.color, withPrefix)
      : extractOklchValues(theme.foreground.color, withPrefix)
  };

--primary: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.primary.color, withPrefix)
      : extractOklchValues(theme.primary.color, withPrefix)
  };
--primary-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.primaryForeground.color, withPrefix)
      : extractOklchValues(theme.primaryForeground.color, withPrefix)
  };

--card: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.card.color, withPrefix)
      : extractOklchValues(theme.card.color, withPrefix)
  };
--card-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.cardForeground.color, withPrefix)
      : extractOklchValues(theme.cardForeground.color, withPrefix)
  };

--popover: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.popover.color, withPrefix)
      : extractOklchValues(theme.popover.color, withPrefix)
  };
--popover-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.popoverForeground.color, withPrefix)
      : extractOklchValues(theme.popoverForeground.color, withPrefix)
  };

--secondary: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.secondary.color, withPrefix)
      : extractOklchValues(theme.secondary.color, withPrefix)
  };
--secondary-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.secondaryForeground.color, withPrefix)
      : extractOklchValues(theme.secondaryForeground.color, withPrefix)
  };

--muted: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.muted.color, withPrefix)
      : extractOklchValues(theme.muted.color, withPrefix)
  };
--muted-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.mutedForeground.color, withPrefix)
      : extractOklchValues(theme.mutedForeground.color, withPrefix)
  };

--accent: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.accent.color, withPrefix)
      : extractOklchValues(theme.accent.color, withPrefix)
  };
--accent-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.accentForeground.color, withPrefix)
      : extractOklchValues(theme.accentForeground.color, withPrefix)
  };

--destructive: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues("#ef4444", withPrefix)
      : extractOklchValues("#ef4444", withPrefix)
  };
--destructive-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues("#f8fafc", withPrefix)
      : extractOklchValues("#f8fafc", withPrefix)
  };

--border: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.border.color, withPrefix)
      : extractOklchValues(theme.border.color, withPrefix)
  };

--input: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.input.color, withPrefix)
      : extractOklchValues(theme.input.color, withPrefix)
  };

--ring: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.ring.color, withPrefix)
      : extractOklchValues(theme.ring.color, withPrefix)
  };

--chart-1: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.chart1.color, withPrefix)
      : extractOklchValues(theme.chart1.color, withPrefix)
  };
--chart-2: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.chart2.color, withPrefix)
      : extractOklchValues(theme.chart2.color, withPrefix)
  };
--chart-3: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.chart3.color, withPrefix)
      : extractOklchValues(theme.chart3.color, withPrefix)
  };
--chart-4: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.chart4.color, withPrefix)
      : extractOklchValues(theme.chart4.color, withPrefix)
  };
--chart-5: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.chart5.color, withPrefix)
      : extractOklchValues(theme.chart5.color, withPrefix)
  };

--sidebar: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarBackground.color, withPrefix)
      : extractOklchValues(theme.sidebarBackground.color, withPrefix)
  };
--sidebar-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarForeground.color, withPrefix)
      : extractOklchValues(theme.sidebarForeground.color, withPrefix)
  };
--sidebar-primary: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarPrimary.color, withPrefix)
      : extractOklchValues(theme.sidebarPrimary.color, withPrefix)
  };  
--sidebar-primary-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarPrimaryForeground.color, withPrefix)
      : extractOklchValues(theme.sidebarPrimaryForeground.color, withPrefix)
  };
--sidebar-accent: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarAccent.color, withPrefix)
      : extractOklchValues(theme.sidebarAccent.color, withPrefix)
  };
--sidebar-accent-foreground: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarAccentForeground.color, withPrefix)
      : extractOklchValues(theme.sidebarAccentForeground.color, withPrefix)
  };  
--sidebar-border: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarBorder.color, withPrefix)
      : extractOklchValues(theme.sidebarBorder.color, withPrefix)
  };
--sidebar-ring: ${
    mode === "hsl" || mode === "hsl-no-prefix"
      ? extractHSLValues(theme.sidebarRing.color, withPrefix)
      : extractOklchValues(theme.sidebarRing.color, withPrefix)
  };

--radius: 0.5rem;
    `;
}
