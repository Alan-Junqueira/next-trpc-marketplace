"use client";

import { Product } from "@/payload-types";
import Link from "next/link";
import { ComponentProps, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn, formatPrice } from "@/lib/utils";
import { PRODUCT_CATEGORIES } from "@/config";

interface IProductListingProps extends ComponentProps<typeof Link> {
  product: Product | null;
  index: number;
}

export const ProductListing = ({
  product,
  index,
  className,
  ...props
}: IProductListingProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  if (!product || !isVisible) return <ProductPlaceholder />;

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category,
  )?.label;

  if (isVisible && product) {
    return (
      <Link
        {...props}
        className={cn(
          "group/main invisible h-full w-full cursor-pointer",
          {
            "visible animate-in fade-in-5": isVisible,
          },
          className,
        )}
      >
        <div className="flex w-full flex-col">
          <h3 className="mt-4 text-sm font-medium text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{label}</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }
  return <div>ProductListing</div>;
};

const ProductPlaceholder = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-4 h-4 w-2/3 rounded-lg" />
      <Skeleton className="mt-2 h-4 w-16 rounded-lg" />
      <Skeleton className="mt-2 h-4 w-12 rounded-lg" />
    </div>
  );
};
