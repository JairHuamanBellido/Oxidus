import { cn } from "@/src/utils/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
}
export default function TypographyParagraph({ children, className, ...rest }: Props) {
  return (
    <p {...rest} className={cn( className)}>
      {children}
    </p>
  );
}
