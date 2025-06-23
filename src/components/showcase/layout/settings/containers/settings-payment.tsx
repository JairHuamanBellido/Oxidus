import { Button } from "@/src/components/shadcn/button";
import { Switch } from "@/src/components/shadcn/switch";
import TypographyH2 from "@/src/components/typography/h2";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { Cpu } from "lucide-react";

export default function SettingsPayment() {
  return (
    <div className="w-full h-full space-y-8">
      <div className="flex flex-col space-y-2 mb-8">
        <TypographyH2>Payment Methods</TypographyH2>
        <TypographyParagraph className="text-foreground/80">
          Add, remove, or update the payment methods linked to your account.
        </TypographyParagraph>
      </div>

      <div className="flex  space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Default Payment Method
          </TypographyParagraph>
          <TypographyMuted>Used for all transactions.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <div className="max-w-[400px] w-full h-[200px] flex flex-col justify-between bg-gradient-to-br from-[#2e28a0]  to-[#0f07a1] rounded-2xl px-6 py-4 text-white">
            <div className="w-full flex items-center justify-between">
              <Cpu strokeWidth={1.5} size={24} />
              <TypographyParagraph className="italic">
                Wallet
              </TypographyParagraph>
            </div>
            <div>
              <TypographyParagraph className="text-3xl">
                **** **** **** 0209
              </TypographyParagraph>
            </div>
            <div className="flex items-center justify-between space-x-12">
              <div className="flex flex-col space-y-1">
                <TypographyParagraph className="text-white/80 text-xs">
                  Card Holder Name
                </TypographyParagraph>
                <TypographyParagraph className="text-sm font-semibold">
                  Jair Huaman
                </TypographyParagraph>
              </div>
              <div className="flex flex-col space-y-1">
                <TypographyParagraph className="text-white/80 text-xs">
                  Expiry Date
                </TypographyParagraph>
                <TypographyParagraph className="text-sm font-semibold">
                  11/31
                </TypographyParagraph>
              </div>
              <div>
                <TypographyParagraph className="italic font-semibold text-2xl">
                  VISA
                </TypographyParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Add New Card
          </TypographyParagraph>
          <TypographyMuted>Add another credit or debit card.</TypographyMuted>
        </div>
        <div className="w-1/2">
          <Button variant={"outline"}> New Card</Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-[400px]">
          <TypographyParagraph className="text-foreground/80 text-lg font-semibold ">
            Billing Address
          </TypographyParagraph>
          <TypographyMuted>Address associated with your card.</TypographyMuted>
        </div>
        <div className="w-1/2 ">
          <div className="border rounded-2xl p-4">
            <div className="flex flex-col space-y-2">
                <TypographyParagraph>109 King Rd, Rocky Point</TypographyParagraph>
                <TypographyMuted>11778, New York, NY, USA</TypographyMuted>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
