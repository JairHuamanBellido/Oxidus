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
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import CopyButton from "../CopyCodeButton";
import { Code } from "lucide-react";

export default function ShowCodeMenuItem() {
  const {
    cssVariables: {
      shadcn: { dark, light },
    },
  } = useThemeContext();
  const [activeTab, setActiveTab] = useState("light-code");

  const lightCssPalette = generateShadcnCssVariables(light);
  const darkCssPalette = generateShadcnCssVariables(dark);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
        className="w-9 px-0"
          onClick={() => {
            (window as any).gtag("event", "show-css-code");
          }}
          variant="ghost"
        >
          <Code strokeWidth={1.5} size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>CSS Variables</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your application
            theme
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Tabs defaultValue="light-code" onValueChange={handleTabChange}>
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
                {/* SHOW CODE BUTTON BASED ON THE ACTIVE TAB */}
                {activeTab === "dark-code" ? (
                  <CopyButton codeToCopy={darkCssPalette} />
                ) : (
                  <CopyButton codeToCopy={lightCssPalette} />
                )}
              </div>
            </header>
            <TabsContent value="light-code">
              <SyntaxHighlighter
                style={{ "hljs-number": { color: "white" } }}
                customStyle={{
                  background: "black",
                  color: "#c3c3c3",
                  height: "400px",
                  overflowY: "auto",
                  fontSize: "0.875rem",
                  paddingInline: "12px",
                  borderRadius: "8px",
                }}
                language="css"
              >
                {lightCssPalette}
              </SyntaxHighlighter>
            </TabsContent>
            <TabsContent value="dark-code">
              <SyntaxHighlighter
                style={{ "hljs-number": { color: "white" } }}
                customStyle={{
                  background: "black",
                  color: "#c3c3c3",
                  height: "400px",
                  overflowY: "auto",
                  fontSize: "0.875rem",
                  paddingInline: "12px",
                  borderRadius: "8px",
                  position: "relative",
                }}
                language="css"
              >
                {darkCssPalette}
              </SyntaxHighlighter>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
