"use client";

import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";

type TCategory = (typeof PRODUCT_CATEGORIES)[number];

interface INavItemProps extends ComponentProps<"div"> {
  category: TCategory;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

export const NavItem = ({
  category,
  handleOpen,
  isOpen,
  isAnyOpen,
  className,
  ...props
}: INavItemProps) => {
  return (
    <div className={cn("flex", className)} {...props}>
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 text-muted-foreground transition-all", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
    </div>
  );
};
