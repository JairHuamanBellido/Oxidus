import * as React from "react";

import { ClipboardIcon } from "lucide-react";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "../shadcn/tooltip";
import { Button } from "../shadcn/button";

interface CopyButtonProps {
  codeToCopy: string;
}

export default function CopyButton({ codeToCopy }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy).then(
      () => {
        console.log("Text copied to clipboard");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      },
    );
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="ghost" onClick={handleCopy}>
            Copy to Clipboard <ClipboardIcon className="ml-2 h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click to copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
