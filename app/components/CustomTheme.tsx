import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import { useEffect, useRef } from "react";
import ComponentsShowCase from "./ComponentsShowCase";

import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { extractHSLValues } from "@/src/utils/getHSLValues";
import { generateShadcnCssVariables } from "@/src/utils/generateShadcnCssVariables";
import DefaultTheme from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.supportedLanguages;
export default function CustomTheme() {
  const {
    cssVariables: {
      shadcn: { dark, light },
    },
    hex,
  } = useThemeContext();
  const lightRef = useRef<HTMLDivElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lightRef) {
      return;
    }

    lightRef.current?.style.setProperty(
      "--background",
      extractHSLValues(light.background),
    );
    lightRef.current?.style.setProperty(
      "--foreground",
      extractHSLValues(light.foreground),
    );

    lightRef.current?.style.setProperty(
      "--primary",
      extractHSLValues(light.primary),
    );
    lightRef.current?.style.setProperty(
      "--primary-foreground",
      extractHSLValues(light.primaryForeground),
    );

    lightRef.current?.style.setProperty("--card", extractHSLValues(light.card));

    lightRef.current?.style.setProperty(
      "--card-foreground",
      extractHSLValues(light.cardForeground),
    );

    lightRef.current?.style.setProperty(
      "--popover",
      extractHSLValues(light.popover),
    );
    lightRef.current?.style.setProperty(
      "--popover-foreground",
      extractHSLValues(light.popoverForeground),
    );

    lightRef.current?.style.setProperty(
      "--secondary",
      extractHSLValues(light.secondary),
    );

    lightRef.current?.style.setProperty(
      "--secondary-foreground",
      extractHSLValues(light.secondaryForeground),
    );

    lightRef.current?.style.setProperty(
      "--muted",
      extractHSLValues(light.muted),
    );
    lightRef.current?.style.setProperty(
      "--muted-foreground",
      extractHSLValues(light.mutedForeground),
    );

    lightRef.current?.style.setProperty(
      "--accent",
      extractHSLValues(light.accent),
    );

    lightRef.current?.style.setProperty(
      "--accent-foreground",
      extractHSLValues(light.accentForeground),
    );

    lightRef.current?.style.setProperty(
      "--border",
      extractHSLValues(light.border),
    );
    lightRef.current?.style.setProperty(
      "--input",
      extractHSLValues(light.input),
    );
    lightRef.current?.style.setProperty("--ring", extractHSLValues(light.ring));

    /**Dark settings */
    darkRef.current?.style.setProperty(
      "--background",
      extractHSLValues(dark.background),
    );
    darkRef.current?.style.setProperty(
      "--foreground",
      extractHSLValues(dark.foreground),
    );

    darkRef.current?.style.setProperty(
      "--primary",
      extractHSLValues(dark.primary),
    );
    darkRef.current?.style.setProperty(
      "--primary-foreground",
      extractHSLValues(dark.primaryForeground),
    );

    darkRef.current?.style.setProperty("--card", extractHSLValues(dark.card));

    darkRef.current?.style.setProperty(
      "--card-foreground",
      extractHSLValues(dark.cardForeground),
    );

    darkRef.current?.style.setProperty(
      "--popover",
      extractHSLValues(dark.popover),
    );
    darkRef.current?.style.setProperty(
      "--popover-foreground",
      extractHSLValues(dark.popoverForeground),
    );

    darkRef.current?.style.setProperty(
      "--secondary",
      extractHSLValues(dark.secondary),
    );

    darkRef.current?.style.setProperty(
      "--secondary-foreground",
      extractHSLValues(dark.secondaryForeground),
    );

    darkRef.current?.style.setProperty("--muted", extractHSLValues(dark.muted));
    darkRef.current?.style.setProperty(
      "--muted-foreground",
      extractHSLValues(dark.mutedForeground),
    );

    darkRef.current?.style.setProperty(
      "--accent",
      extractHSLValues(dark.accent),
    );

    darkRef.current?.style.setProperty(
      "--accent-foreground",
      extractHSLValues(dark.accentForeground),
    );

    darkRef.current?.style.setProperty(
      "--border",
      extractHSLValues(dark.border),
    );
    darkRef.current?.style.setProperty("--input", extractHSLValues(dark.input));
    darkRef.current?.style.setProperty("--ring", extractHSLValues(dark.ring));
  }, [hex, dark, light]);

  const lightCssPalette = generateShadcnCssVariables(light);
  const darkCssPalette = generateShadcnCssVariables(dark);

  return (
    <>
      <div className="flex space-x-4">
        <div>
          <h2 className="text-xl">Light variables</h2>
          <SyntaxHighlighter
            style={{ "hljs-number": { color: "black" } }}
            customStyle={{
              background: "white",
              color: "black",

              borderRadius: "8px",
              padding: "24px",
            }}
            language="css"
          >
            {lightCssPalette}
          </SyntaxHighlighter>
        </div>
        <div>
          <h2 className="text-xl">Dark variables</h2>
          <SyntaxHighlighter
            style={{ "hljs-number": { color: "white" } }}
            customStyle={{
              background: "black",
              color: "white",
              padding: "24px",
            }}
            language="css"
          >
            {darkCssPalette}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="flex space-x-4">
        <div
          className="w-full rounded p-4 flex bg-background text-foreground flex-col space-y-4"
          ref={lightRef}
        >
          <p>{extractHSLValues(hex)}</p>
          <ComponentsShowCase />
        </div>
        <div
          className="w-full rounded p-4 flex bg-background text-foreground flex-col space-y-4"
          ref={darkRef}
        >
          <p>{extractHSLValues(hex)}</p>
          <ComponentsShowCase />
        </div>
      </div>
    </>
  );
}
