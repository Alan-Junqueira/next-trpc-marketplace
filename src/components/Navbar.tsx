import Link from "next/link";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { ComponentProps } from "react";
import { NavItems } from "./NavItems";
import { cn } from "@/lib/utils";

interface INavbarProps extends ComponentProps<"div"> {}

export const Navbar = ({ className, ...props }: INavbarProps) => {
  return (
    <div
      className={cn("sticky inset-x-0 top-0 z-50 h-16 bg-white", className)}
      {...props}
    >
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="borer-gray-200 border-b">
            <div className="flex h-16 items-center">
              {/* // TODO: Mobile nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
