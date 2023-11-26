"use client";

import { ComponentProps } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

      {isOpen && (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "slide-from-top-5 animate-in fade-in-10": isAnyOpen,
            },
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map(({ href, imageSrc, name }) => (
                    <div
                      key={name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                          alt="product category image"
                          src={imageSrc}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <Link
                        href={href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        {name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
