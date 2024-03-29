import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "tabs" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

async function getNextTabs(currentSlug: string) {
  const query = `*[_type == 'tabs' && slug.current != "${currentSlug}"]`;
  const nextTabs = await client.fetch(query);
  return nextTabs;
}

const TabProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: FullTab = await getData(params.slug);
  const nextTabs: FullTab[] = await getNextTabs(params.slug);

  return (
    <div className="flex flex-col xl:mx-20">
      <div className="xl:flex xl:flex-row w-full xl:justify-center">
        <div className="relative aspect-square xl:w-[600px] xl:h-[600px]">
          <Image
            src={urlFor(data.image).url()}
            alt={data.name}
            fill
            className="p-8 rounded-md -mt-8 md:p-32 md:-mt-32 xl:p-0 xl:mt-0"
          />
        </div>
        <div className="mx-8 -mt-10 | md:-mt-56 md:mx-20 | xl:mt-0 xl:mx-8 xl:flex xl:flex-col xl:justify-between xl:max-w-96">
          {/* ALL SONGS */}
          <div>
            <div className="text-wrap gap-2">
              <p className="font-semibold text-md | md:text-2xl | lg:text-3xl">
                {data.name}
              </p>
              <p className="text-xs | md:text-base | | lg:text-2xl">
                ${data.price.toFixed(2)}
              </p>
            </div>
            <h1 className="mt-4 mb-2 text-sm | md:text-lg | lg:text-2xl">
              {data.description}
            </h1>
            <div className="font-light text-[12px] | md:text-base | lg:text-xl">
              {data.allTabs?.map((tab: string, i: number) => (
                <ol key={i}>
                  <li>{`${i + 1}. ${tab}`}</li>
                </ol>
              ))}
            </div>
          </div>

          {/* ADD CART */}
          <div>
            <button className="hover:scale-[1.02] transition-transform w-full mt-6 py-2 rounded-md text-black font-semibold bg-white md:py-5 md:text-lg | lg:text-2xl lg:py-6 | xl:mx-0 xl:py-4 xl:text-xl">
              Add to Cart
            </button>
            <p className="font-light text-gray-400 mt-3 text-[10px] | md:text-sm | lg:text-xl | xl:text-base">
              *DISCLAIMER: This is not a physical product. Digital downloads
              will expire so please store them on your computer for future use.
              BECAUSE THIS IS A DIGITAL PRODUCT, WE ARE UNABLE TO ISSUE REFUNDS
            </p>
          </div>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="mx-8 my-8 | xl:mx-0 xl:my-16">
        <p className="font-semibold text-md | md:text-lg md:mt-10 | lg:text-2xl lg:mt-12 | xl:mt-6 2xl:mt-6">
          YOU MAY ALSO LIKE
        </p>
        <div className="flex overflow-x-scroll gap-4 mt-3 | md:gap-6 | lg:mt-5 | xl:pl-0 scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-800">
          {nextTabs?.map((tab: FullTab, i: number) => (
            <div key={i} className="text-xs font-light last:pr-8 ">
              <div className="relative aspect-square w-32 md:w-80">
                <Link href={`/Tabs/${tab.slug.current}`}>
                  <Image
                    src={urlFor(tab.image).url()}
                    alt={tab.name}
                    fill
                    priority
                    className="rounded-md"
                  />
                </Link>
              </div>
              <p className="mb-1 mt-2 text-[12px] | md:text-base | lg:text-xl">
                {tab.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabProductPage;

interface FullTab {
  _id: string;
  name: string;
  price: number;
  description: string;
  allTabs: [string];
  image: any;
  slug: any;
}
