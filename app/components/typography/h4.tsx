import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
}
export default function TypographyH4({ children, className, ...rest }: Props) {
  return (
    <h4
      {...rest}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
}
