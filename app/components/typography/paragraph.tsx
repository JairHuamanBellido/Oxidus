import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
}
export default function TypographyParagraph({ children, className, ...rest }: Props) {
  return (
    <p {...rest} className={cn("leading-7", className)}>
      {children}
    </p>
  );
}
