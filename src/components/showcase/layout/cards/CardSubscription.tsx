import { Button } from "@/src/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/card";
import { Checkbox } from "@/src/components/shadcn/checkbox";
import { Input } from "@/src/components/shadcn/input";
import { Label } from "@/src/components/shadcn/label";
import TypographyMuted from "@/src/components/typography/muted";
import TypographyParagraph from "@/src/components/typography/paragraph";
import { cn } from "@/src/utils/utils";

import { useState } from "react";

const plans = [
  {
    title: "Total Chill Plan",
    description: "A relaxed plan for slow, stress-free exploring.",
    price: "$10",
  },
  {
    title: "Turbo Mode",
    description: "Fast access to premium features, early content, and support.",
    price: "$20",
  },
  {
    title: "Mystery Mode",
    description: "Unlock mysterious perks and surprise content monthly.",
    price: "$50",
  },
];
export default function CardSubscription() {
  const [currentPlan, setCurrentPlan] = useState("");
  return (
    <Card>
      <CardHeader className="p-4 space-y-0">
        <CardTitle className="text-base pb-0">Subscriptions</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-0">
          Do more with subscriptions
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 mt-4 ">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label className="font-medium text-sm">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="font-medium text-sm">Credit Card</Label>
            <Input
              type="text"
              placeholder="4242 4242 4242 4242"
              className="bg-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col space-y-2">
              <Label className="font-medium text-sm">Expiration</Label>
              <Input type="text" placeholder="MM/YY" className="bg-none" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="font-medium text-sm">CCV</Label>
              <Input type="text" placeholder="123" className="bg-none" />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label className="font-medium text-sm">Choose your plan</Label>
            <div className="flex flex-col space-y-4">
              {plans.map((plan) => (
                <div
                  className={cn(
                    "flex items-start justify-between space-x-2 cursor-pointer border rounded-lg p-2 px-4 w-full",
                    currentPlan === plan.title &&
                      "bg-primary/10 border-primary",
                  )}
                  key={plan.title}
                  onClick={() => {
                    setCurrentPlan(plan.title);
                  }}
                >
                  <Checkbox
                    className="mt-1"
                    checked={currentPlan === plan.title}
                  />
                  <div className="flex flex-col">
                    <TypographyParagraph className="font-medium text-sm">
                      {plan.title}
                    </TypographyParagraph>
                    <TypographyMuted className="text-sm text-card-foreground/60">
                      {plan.description}
                    </TypographyMuted>
                  </div>
                  <div className="flex justify-end">
                    <TypographyParagraph className="font-medium text-sm text-right flex items-end">
                      <span className="text-2xl"> {plan.price} </span>
                      <span className="mb-1 text-muted-foreground">/month</span>
                    </TypographyParagraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button className="w-full">Subscribe</Button>
        </div>
      </CardContent>
    </Card>
  );
}
