import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";

import Link from "next/link";

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"]`;
  const data = await client.fetch(query);
  return data;
}

export const CategoryPage = async ({
  params,
}: {
  params: { category: string };
}) => {
  const data: SimplifiedProduct[] = await getData(params.category);

  return (
    <div className="mx-6 mb-8 | md:mx-16 | xl:mx-20">
      <h1 className="text-2xl my-0 mb-4 | xl:text-4xl xl:my-8 font-semibold">
        {params.category}
      </h1>
      <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-7 xl:gap-8">
        {data.map((product: SimplifiedProduct, i: number) => (
          <div key={i} className="flex flex-col items-center">
            <div className="border w-full aspect-square relative rounded-md border-transparent border-white hover:border-4 transition-all">
              <Link href={`/${params.category}/${product.slug.current}`}>
                <Image
                  src={urlFor(product.images[0].asset._ref).url()}
                  alt={product.name}
                  fill
                  objectFit="contain"
                  className="p-3 md:p-4 lg:p-5 xl:p-6"
                  priority
                />
              </Link>
            </div>
            <span className="flex justify-between w-full mt-2.5 md:mt-3 lg:mt-4">
              <p className="text-sm md:text-md lg:text-lg font-semibold pr-3 md:pr-4">
                {product.name}
              </p>
              <p className="text-xs md:text-sm lg:text-md">
                ${product.price.toFixed(2)}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

interface SimplifiedProduct {
  _id: string;
  images: any;
  price: number;
  slug: any;
  name: string;
}
