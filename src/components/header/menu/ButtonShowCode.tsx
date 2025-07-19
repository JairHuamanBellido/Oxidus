"use client";

import { useState } from "react";
import { useThemeContext } from "@/src/contexts/ThemeContext/ThemeContext";
import { Button } from "@/src/components/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/shadcn/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/shadcn/tabs";
import { generateShadcnCssVariables } from "@/src/utils/generateShadcnCssVariables";

import CopyButton from "../CopyCodeButton";
import { Code } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/select";
import { generateSyntaxHighlighter } from "@/src/utils/generateSyntaxHighlighter";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../shadcn/tooltip";

export default function ShowCodeMenuItem() {
  const {
    cssVariables: {
      shadcn: { dark, light },
    },
  } = useThemeContext();
  const [selectedFormat, setSelectedFormat] = useState<
    "hsl" | "oklch" | "hsl-no-prefix" | "oklch-no-prefix"
  >("hsl");

  const lightCssPalette = generateShadcnCssVariables(light, selectedFormat);
  const darkCssPalette = generateShadcnCssVariables(dark, selectedFormat);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-8 px-0 h-8"
          onClick={() => {
            (window as any).gtag("event", "show-css-code");
          }}
          variant="ghost"
        >
          <Tooltip>
            <TooltipTrigger>
              <Code strokeWidth={1.5} size={20} />
            </TooltipTrigger>
            <TooltipContent>
              <p>CSS Variables</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit w-fit">
        <DialogHeader>
          <DialogTitle>CSS Variables</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your application
            theme
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Tabs defaultValue="light-code">
            <header className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger
                  onClick={() => {
                    (window as any).gtag("event", "show-css-code-light");
                  }}
                  value="light-code"
                >
                  Light
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => {
                    (window as any).gtag("event", "show-css-code-dark");
                  }}
                  value="dark-code"
                >
                  Dark
                </TabsTrigger>
              </TabsList>
              <div>
                <Select
                  onValueChange={(value) => {
                    setSelectedFormat(value as "hsl" | "oklch");
                    (window as any).gtag("event", "change-prefix-css-code", {
                      prefix: value,
                    });
                  }}
                  defaultValue={selectedFormat}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hsl">HSL</SelectItem>
                    <SelectItem value="hsl-no-prefix">
                      HSL (no prefix)
                    </SelectItem>
                    <SelectItem value="oklch">OKLCH</SelectItem>
                    <SelectItem value="oklch-no-prefix">
                      OKLCH (no prefix)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </header>
            <TabsContent className="relative" value="light-code">
              <div className="absolute right-2 top-2 z-[1]">
                <CopyButton codeToCopy={lightCssPalette} />
              </div>
              <pre className="h-[400px] overflow-auto text-muted-foreground">
                <code className="flex flex-col gap-y-1" lang="css">
                  {generateSyntaxHighlighter(lightCssPalette)
                    .split("<br />")
                    .map((line, index) => (
                      <div
                        className="block h-[20px]"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                </code>
              </pre>
            </TabsContent>
            <TabsContent className="relative" value="dark-code">
              <div className="absolute right-2 z-[1] top-2">
                <CopyButton codeToCopy={darkCssPalette} />
              </div>
              <pre className="h-[400px] overflow-auto text-muted-foreground">
                <code className="flex flex-col gap-y-1" lang="css">
                  {generateSyntaxHighlighter(darkCssPalette)
                    .split("<br />")
                    .map((line, index) => (
                      <div
                        className="block h-[20px]"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                </code>
              </pre>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
