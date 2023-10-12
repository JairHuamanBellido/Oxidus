import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
}
export default function TypographySmall({
  children,
  className,
  ...rest
}: Props) {
  return (
    <small
      {...rest}
      className={cn("text-sm font-medium leading-none", className)}
    >
      {children}
    </small>
  );
}
