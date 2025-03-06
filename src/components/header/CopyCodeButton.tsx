import * as React from "react";

import { ClipboardIcon } from "lucide-react";
import { Button } from "../shadcn/button";
import { useToast } from "@/src/components/shadcn/use-toast";

interface CopyButtonProps {
  codeToCopy: string;
}

export default function CopyButton({ codeToCopy }: CopyButtonProps) {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        toast({
          title: "CSS variables copied to clipboard",
        });
      },
      (err) => {
        console.error("Failed to copy text: ", err);
        toast({
          title: "Failed to copy CSS variables",
        });
      },
    );
  };

  return (
    <Button
      className="p-2 text-foreground h-fit w-fit"
      variant="ghost"
      onClick={handleCopy}
    >
      <ClipboardIcon className=" h-4 w-4" />
    </Button>
  );
}
