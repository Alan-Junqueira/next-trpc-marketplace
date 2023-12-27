"use client";

import { ComponentProps } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User } from "@/payload-types";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

interface IUserAccountNavProps extends ComponentProps<typeof DropdownMenu> {
  user: User;
}

export const UserAccountNav = ({ user, ...props }: IUserAccountNavProps) => {
  const { signOut } = useAuth();

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          My account
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="text-sm font-medium text-black">{user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/sell">Seller Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
