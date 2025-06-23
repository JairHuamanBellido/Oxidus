import { Button } from "@/src/components/shadcn/button";
import { Input } from "@/src/components/shadcn/input";
import { Slider } from "@/src/components/shadcn/slider";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import TypographySmall from "@/src/components/typography/small";
import { Copy, RefreshCcw } from "lucide-react";
import { useState } from "react";

function SliderContainer() {
  const [rateLimit, setRateLimit] = useState(500);

  return (
    <div className="w-1/2 space-y-2">
      <Slider
        min={100}
        max={1000}
        step={100}
        value={[rateLimit]}
        onValueChange={(value) => setRateLimit(value[0])}
      />
      <div className="flex items-center justify-between mt-1">
        <TypographySmall>100</TypographySmall>
        <TypographySmall>1000</TypographySmall>
      </div>

      <TypographyParagraph className="text-foreground ">
        Rate Limit: {rateLimit}
      </TypographyParagraph>
    </div>
  );
}
export default function SettingsAPIAccess() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>API Access</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Manage your API credentials and monitor your integration limits.
        </TypographyParagraph>
      </div>

      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            API Key
          </TypographyParagraph>
          <TypographyMuted>Your private access token.</TypographyMuted>
        </div>
        <div className="relative w-1/2 ">
          <Input
            disabled
            value={window.crypto.randomUUID()}
            className="w-full"
          />
          <Button
            variant={"ghost"}
            className="w-fit h-fit p-1 rounded absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Copy size={16} />
          </Button>
        </div>
      </div>

      <div className="flex relative  items-center">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Regenerate Key
          </TypographyParagraph>
          <TypographyMuted>Invalidate and generate a new key.</TypographyMuted>
        </div>

        <div className="w-1/2">
          <Button variant={"outline"} className="flex items-center space-x-2">
            <RefreshCcw size={16} />
            <span>Regenerate</span>
          </Button>
        </div>
      </div>
      <div className="flex relative ">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            API Rate Limit
          </TypographyParagraph>
          <TypographyMuted>Max requests per minute. </TypographyMuted>
        </div>
        <SliderContainer />
      </div>
    </div>
  );
}
