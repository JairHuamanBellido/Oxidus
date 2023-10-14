import { cn } from "@/src/utils/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
}
export default function TypographyLead({
  children,
  className,
  ...rest
}: Props) {
  return (
    <p {...rest} className={cn("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
}
