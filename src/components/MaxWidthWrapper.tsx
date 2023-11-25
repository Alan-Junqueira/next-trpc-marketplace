import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface IMaxWidthWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export const MaxWidthWrapper = ({
  children,
  className,
  ...props
}: IMaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
