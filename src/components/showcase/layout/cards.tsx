import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import Color from "color";

import { Nunito } from "next/font/google";

import CardInviteMembers from "./cards/CardInviteMembers";
import CardScore from "./cards/CardScore";
import CardBill from "./cards/CardBill";
import CardLightManager from "./cards/CardLightManager";

const font = Nunito({ subsets: ["latin"] });

function CardContainer() {
  const {
    cssVariables: { shadcn },
    mode,
  } = useThemeContext();

  const background = shadcn[mode].background.color;

  const mixBackground = mode === "dark" ? "white" : "black";
  return (
    <div
      className="w-full rounded p-4 grid grid-cols-[repeat(auto-fill,minmax(500px,4fr))] gap-4"
      style={{
        background: Color(background).mix(Color(mixBackground), 0.03).hex(),
      }}
    >
      <CardScore />
      <CardInviteMembers />
      <CardBill />
      <CardLightManager />
    </div>
  );
}

export default function CardShowcase() {
  return (
    <div className={`mt-4 ${font.className}`}>
      <CardContainer />
    </div>
  );
}
