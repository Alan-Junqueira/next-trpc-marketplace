import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { ProductReel } from "@/components/ProductReel";
import { PRODUCT_CATEGORIES } from "@/config";

type TParam = string | string[] | undefined;

interface IProductsPageProps {
  searchParams: { [key: string]: TParam };
}

const parse = (param: TParam) => {
  return typeof param === "string" ? param : undefined;
};

export default function ProductsPage({ searchParams }: IProductsPageProps) {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  const label = PRODUCT_CATEGORIES.find(({ value }) => value === category)
    ?.label;

  return (
    <MaxWidthWrapper>
      <ProductReel
        title={label ?? "Brose high-quality assets"}
        query={{
          category,
          limit: 40,
          sort: sort === "desc" || sort === "asc" ? sort : undefined,
        }}
      />
    </MaxWidthWrapper>
  );
}
