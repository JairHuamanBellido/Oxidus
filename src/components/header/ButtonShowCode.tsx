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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/shadcn/tabs";
import { generateShadcnCssVariables } from "@/src/utils/generateShadcnCssVariables";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export default function ButtonShowCode() {
  const {
    cssVariables: {
      shadcn: { dark, light },
    },
  } = useThemeContext();
  const lightCssPalette = generateShadcnCssVariables(light);
  const darkCssPalette = generateShadcnCssVariables(dark);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show code</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Css Variables</DialogTitle>
          <DialogDescription>
            You can use the following code to start integrating your application
            theme
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Tabs defaultValue="light-code" >
            <TabsList>
              <TabsTrigger value="light-code">Light</TabsTrigger>
              <TabsTrigger value="dark-code">Dark</TabsTrigger>
            </TabsList>
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
