"use client";

import { cn } from "@/lib/utils";
import { TQueryValidator } from "@/lib/validators/query-validator";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import { ComponentProps } from "react";

interface IProductReelProps extends ComponentProps<"section"> {
  title: string;
  subtitle?: string;
  href?: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4;

export const ProductReel = ({
  title,
  subtitle,
  href,
  query,
  className,
  ...props
}: IProductReelProps) => {
  const { data } = trpc.getInfiniteProducts.useInfiniteQuery(
    {
      limit: query.limit ?? FALLBACK_LIMIT,
      query,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  );

  console.log("data", data);

  return (
    <section className={cn("py-12", className)} {...props}>
      <div className="mb-4 md:flex md:items-center md:justify-between">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h1>
          {title ? (
            <p className="mt-2 text-sm text-muted-foreground">{title}</p>
          ) : null}
        </div>
        {href ? (
          <Link
            href={href}
            className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
          >
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className="relative">
        <div className="mt-6 flex w-full items-center">
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8"></div>
        </div>
      </div>
    </section>
  );
};
