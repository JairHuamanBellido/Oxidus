import { useThemeContext } from "@/components/contexts/ThemeContext/ThemeContext";
import Color from "color";
import { useEffect, useRef } from "react";
import ComponentsShowCase from "./ComponentsShowCase";

import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

function extractHSLValues(color: string) {
  const hue = {
    h: Color(color).hsl().hue().toFixed(2).toString(),
    s: Color(color).hsl().saturationl().toFixed(2).toString(),
    l: Color(color).hsl().lightness().toFixed(2).toString(),
  };

  return `${hue.h} ${hue.s}% ${hue.l}%`;
}
export default function CustomTheme() {
  const { hex, darkColors, lightColors } = useThemeContext();
  const lightRef = useRef<HTMLDivElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lightRef) {
      return;
    }

    lightRef.current?.style.setProperty(
      "--background",
      extractHSLValues(lightColors[lightColors.length - 1]),
    );
    lightRef.current?.style.setProperty(
      "--foreground",
      extractHSLValues(Color(hex).mix(Color("black"), 0.9).hsl().string()),
    );

    lightRef.current?.style.setProperty("--primary", extractHSLValues(hex));
    lightRef.current?.style.setProperty(
      "--primary-foreground",
      extractHSLValues(Color("#ffffff").hex()),
    );

    lightRef.current?.style.setProperty(
      "--card",
      extractHSLValues(lightColors[lightColors.length - 1]),
    );

    lightRef.current?.style.setProperty(
      "--card-foreground",
      extractHSLValues(Color(hex).mix(Color("black"), 0.9).hsl().string()),
    );

    lightRef.current?.style.setProperty(
      "--popover",
      extractHSLValues(Color("#ffffff").hsl().hex()),
    );
    lightRef.current?.style.setProperty(
      "--popover-foreground",
      extractHSLValues(Color(hex).mix(Color("black"), 0.9).hsl().string()),
    );

    lightRef.current?.style.setProperty(
      "--secondary",
      extractHSLValues(Color(hex).mix(Color("white"), 0.85).rgb().string()),
    );

    lightRef.current?.style.setProperty(
      "--secondary-foreground",
      extractHSLValues(darkColors[0]),
    );

    lightRef.current?.style.setProperty(
      "--muted",
      extractHSLValues(Color(hex).mix(Color("white"), 0.95).rgb().string()),
    );
    lightRef.current?.style.setProperty(
      "--muted-foreground",
      extractHSLValues(Color("#ffffff").hsl().darken(0.5).hex()),
    );

    lightRef.current?.style.setProperty(
      "--accent",
      extractHSLValues(Color(hex).mix(Color("white"), 0.95).rgb().string()),
    );

    lightRef.current?.style.setProperty(
      "--accent-foreground",
      extractHSLValues(hex),
    );

    lightRef.current?.style.setProperty(
      "--border",
      extractHSLValues(Color("#ffffff").hsl().darken(0.1).hex()),
    );
    lightRef.current?.style.setProperty(
      "--input",
      extractHSLValues(Color("#ffffff").hsl().darken(0.1).hex()),
    );
    lightRef.current?.style.setProperty("--ring", extractHSLValues(hex));

    /**Dark settings */

    darkRef.current?.style.setProperty(
      "--background",
      extractHSLValues(darkColors[0]),
    );
    darkRef.current?.style.setProperty(
      "--foreground",
      extractHSLValues(Color(hex).mix(Color("white"), 0.85).hsl().string()),
    );

    darkRef.current?.style.setProperty("--primary", extractHSLValues(hex));
    darkRef.current?.style.setProperty(
      "--primary-foreground",
      extractHSLValues(Color("#ffffff").hex()),
    );

    darkRef.current?.style.setProperty(
      "--card",
      extractHSLValues(darkColors[0]),
    );

    darkRef.current?.style.setProperty(
      "--card-foreground",
      extractHSLValues(Color(hex).mix(Color("white"), 0.85).hsl().string()),
    );

    darkRef.current?.style.setProperty(
      "--popover",
      extractHSLValues(Color(darkColors[0]).hsl().hex()),
    );
    darkRef.current?.style.setProperty(
      "--popover-foreground",
      extractHSLValues(Color(hex).mix(Color("white"), 0.85).hsl().string()),
    );

    darkRef.current?.style.setProperty(
      "--secondary",
      extractHSLValues(Color("black").mix(Color(hex), 0.35).rgb().string()),
    );

    darkRef.current?.style.setProperty(
      "--secondary-foreground",
      extractHSLValues(Color("#ffffff").hex()),
    );

    darkRef.current?.style.setProperty(
      "--muted",
      extractHSLValues(
        Color(darkColors[0]).mix(Color("white"), 0.1).rgb().string(),
      ),
    );
    darkRef.current?.style.setProperty(
      "--muted-foreground",
      extractHSLValues(
        Color(darkColors[0]).mix(Color("white"), 0.3).rgb().string(),
      ),
    );

    darkRef.current?.style.setProperty(
      "--accent",
      extractHSLValues(Color("black").mix(Color(hex), 0.35).rgb().string()),
    );

    darkRef.current?.style.setProperty(
      "--accent-foreground",
      extractHSLValues(Color(hex).mix(Color("white"), 0.85).hsl().string()),
    );

    darkRef.current?.style.setProperty(
      "--border",
      extractHSLValues(Color("black").mix(Color("white"), 0.15).rgb().string()),
    );
    darkRef.current?.style.setProperty(
      "--input",
      extractHSLValues(Color("black").mix(Color("white"), 0.15).rgb().string()),
    );

    darkRef.current?.style.setProperty("--ring", extractHSLValues(hex));
  }, [hex, darkColors, lightColors]);

  const lightCssPalette = `
    --background: ${extractHSLValues(lightColors[lightColors.length - 1])};
    --foreground: ${extractHSLValues(
      Color(hex).mix(Color("black"), 0.9).hsl().string(),
    )};

    --primary: ${extractHSLValues(hex)};
    --primary-foreground: ${extractHSLValues(Color("#ffffff").hex())};

    --card: ${extractHSLValues(lightColors[lightColors.length - 1])};
    --card-foreground: ${extractHSLValues(
      Color(hex).mix(Color("black"), 0.9).hsl().string(),
    )};

    --popover: ${extractHSLValues(Color("#ffffff").hsl().hex())};
    --popover-foreground: ${extractHSLValues(
      Color(hex).mix(Color("black"), 0.9).hsl().string(),
    )};

    --secondary: ${extractHSLValues(
      Color(hex).mix(Color("white"), 0.85).rgb().string(),
    )};
    --secondary-foreground: ${extractHSLValues(darkColors[0])};

    --muted: ${extractHSLValues(
      Color(hex).mix(Color("white"), 0.95).rgb().string(),
    )};
    --muted-foreground: ${extractHSLValues(
      Color("#ffffff").hsl().darken(0.5).hex(),
    )};
 
    --accent: ${extractHSLValues(
      Color(hex).mix(Color("white"), 0.95).rgb().string(),
    )};
    --accent-foreground: ${extractHSLValues(hex)};

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: ${extractHSLValues(Color("#ffffff").hsl().darken(0.1).hex())};
    --input: ${extractHSLValues(Color("#ffffff").hsl().darken(0.1).hex())};
    --ring: ${extractHSLValues(hex)};

    --radius: 0.5rem;
  `;
  const darkCssPalette = `
    --background: ${extractHSLValues(darkColors[0])};
    --foreground: ${extractHSLValues(
      Color(hex).mix(Color("white"), 0.85).hsl().string(),
    )};

    --primary: ${extractHSLValues(hex)};
    --primary-foreground: ${extractHSLValues(Color("#ffffff").hex())};

    --card: ${extractHSLValues(darkColors[0])};
    --card-foreground: ${extractHSLValues(
      Color(hex).mix(Color("white"), 0.85).hsl().string(),
    )};

    --popover: ${extractHSLValues(Color(darkColors[0]).hsl().hex())};
    --popover-foreground: ${extractHSLValues(
      Color(hex).mix(Color("white"), 0.85).hsl().string(),
    )};

    --secondary: ${extractHSLValues(
      Color("black").mix(Color(hex), 0.35).rgb().string(),
    )};
    --secondary-foreground: ${extractHSLValues(Color("#ffffff").hex())};

    --muted: ${extractHSLValues(
      Color(darkColors[0]).mix(Color("white"), 0.1).rgb().string(),
    )};
    --muted-foreground: ${extractHSLValues(
      Color(darkColors[0]).mix(Color("white"), 0.3).rgb().string(),
    )};
 
    --accent: ${extractHSLValues(
      Color("black").mix(Color(hex), 0.35).rgb().string(),
    )};
    --accent-foreground: ${extractHSLValues(
      Color(hex).mix(Color("white"), 0.85).hsl().string(),
    )};

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: ${extractHSLValues(
      Color("black").mix(Color("white"), 0.15).rgb().string(),
    )};
    --input: ${extractHSLValues(
      Color("black").mix(Color("white"), 0.15).rgb().string(),
    )};
    --ring: ${extractHSLValues(hex)};

    --radius: 0.5rem;
  `;

  return (
    <>
      <div className="flex ">
        <div>
          <h2 className="text-xl">Light variables</h2>
          <SyntaxHighlighter style={oneLight} language="css">
            {lightCssPalette}
          </SyntaxHighlighter>
        </div>
        <div>
          <h2 className="text-xl">Dark variables</h2>
          <SyntaxHighlighter style={oneDark} language="css">
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
