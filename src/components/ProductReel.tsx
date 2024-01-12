import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

interface IProductReelProps extends ComponentProps<"section"> {
  title: string;
  subtitle?: string;
  href?: string;
}

export const ProductReel = ({
  title,
  subtitle,
  href,
  className,
  ...props
}: IProductReelProps) => {
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
    </section>
  );
};
