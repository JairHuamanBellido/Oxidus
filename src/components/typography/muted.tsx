import { cn } from "@/src/utils/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
}
export default function TypographyMuted({
  children,
  className,
  ...rest
}: Props) {
  return (
    <p {...rest} className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}
