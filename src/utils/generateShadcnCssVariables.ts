import { ShadcnVariables } from "@/components/contexts/ThemeContext/ThemeContext";
import { extractHSLValues } from "./getHSLValues";

export function generateShadcnCssVariables(theme: ShadcnVariables) {
  return `
--background: ${extractHSLValues(theme.background.color)};
--foreground: ${extractHSLValues(theme.foreground.color)};

--primary: ${extractHSLValues(theme.primary.color)};
--primary-foreground: ${extractHSLValues(theme.primaryForeground.color)};

--card: ${extractHSLValues(theme.card.color)};
--card-foreground: ${extractHSLValues(theme.cardForeground.color)};

--popover: ${extractHSLValues(theme.popover.color)};
--popover-foreground: ${extractHSLValues(theme.popoverForeground.color)};

--secondary: ${extractHSLValues(theme.secondary.color)};
--secondary-foreground: ${extractHSLValues(theme.secondaryForeground.color)};

--muted: ${extractHSLValues(theme.muted.color)};
--muted-foreground: ${extractHSLValues(theme.mutedForeground.color)};
 
--accent: ${extractHSLValues(theme.accent.color)};
--accent-foreground: ${extractHSLValues(theme.accentForeground.color)};

--destructive: 0 84.2% 60.2%;
--destructive-foreground: 210 40% 98%;

--border: ${extractHSLValues(theme.border.color)};
--input: ${extractHSLValues(theme.input.color)};
--ring: ${extractHSLValues(theme.ring.color)};

--radius: 0.5rem;
    `;
}
