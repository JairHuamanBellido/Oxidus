import { Switch } from "@/src/components/shadcn/switch";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import TypographySmall from "@/src/components/typography/small";

export default function SettingsSubscriptions() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Subscription Details</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          View and manage your current subscription plan and billing options.
        </TypographyParagraph>
      </div>

      <div className="flex items-start space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Plan Type
          </TypographyParagraph>
          <TypographyMuted>Your current subscription plan.</TypographyMuted>
        </div>
        <div className="w-1/2 flex flex-col space-y-4 ">
          <div className="border cursor-pointer rounded-2xl flex p-4 border-primary space-x-8">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
                  Starter
                </TypographyParagraph>
                <TypographySmall className="bg-primary text-primary-foreground rounded p-2">
                  Current
                </TypographySmall>
              </div>

              <TypographyMuted>
                Ideal for individuals or small teams just getting started.
                Includes core features with limited usage.
              </TypographyMuted>
            </div>

            <div className="">
              <TypographyParagraph className="font-medium text-sm text-right flex items-end">
                <span className="text-2xl"> Free </span>
              </TypographyParagraph>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Upgrade
          </TypographyParagraph>
          <TypographyMuted>Change your plan level.</TypographyMuted>
        </div>
        <div className="w-1/2 flex flex-col space-y-4 ">
          <div className="border cursor-pointer rounded-2xl flex p-4 space-x-8">
            <div className="flex flex-col">
              <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
                Pro
              </TypographyParagraph>
              <TypographyMuted>
                Perfect for growing teams that need more power, flexibility, and
                advanced integrations.
              </TypographyMuted>
            </div>
            <div className="">
              <TypographyParagraph className="font-medium text-sm text-right flex items-end">
                <span className="text-2xl"> $19 </span>
                <span className="mb-1 text-muted-foreground">/month</span>
              </TypographyParagraph>
            </div>
          </div>
          <div className="border cursor-pointer rounded-2xl flex p-4 space-x-8">
            <div className="flex flex-col">
              <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
                Premium
              </TypographyParagraph>
              <TypographyMuted>
                Custom-tailored for large organizations with high demands,
                priority support, and enterprise-level features.
              </TypographyMuted>
            </div>
            <div className="">
              <TypographyParagraph className="font-medium text-sm text-right flex items-end">
                <span className="text-2xl"> $59 </span>
                <span className="mb-1 text-muted-foreground">/month</span>
              </TypographyParagraph>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Auto-renewal
          </TypographyParagraph>
          <TypographyMuted>Automatically renew subscription.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
}
