import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'tabs']";
  const data = await client.fetch(query);
  return data;
}

async function Tabs() {
  const data = await getData();

  return (
    <div className="mx-6 mb-8 | md:mx-16 | xl:mx-20">
      <h1 className="text-2xl my-0 mb-4 | xl:text-4xl xl:my-8 font-semibold">
        Tabs
      </h1>
      <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-7 xl:gap-8">
        {data.map((tab: SimplifiedTab, i: number) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-full aspect-square relative">
              <Link href={`/Tabs/${tab.slug.current}`}>
                <Image
                  src={urlFor(tab.image).url()}
                  alt={tab.name}
                  fill
                  className="rounded-md border-2 border-transparent hover:border-white hover:border-4 transition-all"
                />
              </Link>
            </div>
            <span className="flex justify-between w-full mt-2.5 md:mt-3 lg:mt-4">
              <p className="text-sm md:text-md lg:text-lg font-semibold pr-3 md:pr-4">
                {tab.name}
              </p>
              <p className="text-xs md:text-sm lg:text-md">
                ${tab.price.toFixed(2)}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;

interface SimplifiedTab {
  _id: string;
  name: string;
  price: number;
  image: any;
  slug: any;
}
