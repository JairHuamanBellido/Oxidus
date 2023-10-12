import { ShadcnVariables } from "@/components/contexts/ThemeContext/ThemeContext";
import { extractHSLValues } from "./getHSLValues";

export function generateShadcnCssVariables(theme: ShadcnVariables) {
  return `
--background: ${extractHSLValues(theme.background)};
--foreground: ${extractHSLValues(theme.foreground)};

--primary: ${extractHSLValues(theme.primary)};
--primary-foreground: ${extractHSLValues(theme.primaryForeground)};

--card: ${extractHSLValues(theme.card)};
--card-foreground: ${extractHSLValues(theme.cardForeground)};

--popover: ${extractHSLValues(theme.popover)};
--popover-foreground: ${extractHSLValues(theme.popoverForeground)};

--secondary: ${extractHSLValues(theme.secondary)};
--secondary-foreground: ${extractHSLValues(theme.secondaryForeground)};

--muted: ${extractHSLValues(theme.muted)};
--muted-foreground: ${extractHSLValues(theme.mutedForeground)};
 
--accent: ${extractHSLValues(theme.accent)};
--accent-foreground: ${extractHSLValues(theme.accentForeground)};

--destructive: 0 84.2% 60.2%;
--destructive-foreground: 210 40% 98%;

--border: ${extractHSLValues(theme.border)};
--input: ${extractHSLValues(theme.input)};
--ring: ${extractHSLValues(theme.ring)};

--radius: 0.5rem;
    
    `;
}
