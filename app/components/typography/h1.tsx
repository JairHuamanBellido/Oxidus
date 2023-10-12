import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
}
export default function TypographyH1({ children, className, ...rest }: Props) {
  return (
    <h1
      {...rest}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
