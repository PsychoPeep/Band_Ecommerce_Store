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
    <div className="flex flex-col lg:mx-20">
      <div className="lg:flex lg:flex-row">
        <div className="relative aspect-square lg:w-[600px] lg:h-[600px]">
          <Image
            src={urlFor(data.image).url()}
            alt={data.name}
            fill
            className="p-8 rounded-md -mt-8 md:p-32 md:-mt-32 lg:p-0 lg:mt-0"
          />
        </div>
        <div className="mx-8 | md:-mt-48 md:mx-20 | lg:mt-0 lg:mx-8 lg:flex lg:flex-col lg:justify-between lg:max-w-96">
          {/* ALL SONGS */}
          <div>
            <div className="text-wrap gap-2">
              <p className="font-semibold text-md">{data.name}</p>
              <p className="text-xs">${data.price.toFixed(2)}</p>
            </div>
            <h1 className="text-sm mt-4 mb-2">{data.description}</h1>
            <div className="text-[12px] font-light">
              {data.allTabs?.map((tab: string, i: number) => (
                <ol key={i}>
                  <li>{`${i + 1}. ${tab}`}</li>
                </ol>
              ))}
            </div>
          </div>

          {/* ADD CART */}
          <div>
            <button className="w-full mt-8 py-2 rounded-md text-black font-semibold bg-white md:py-5 | lg:mx-0">
              Add to Cart
            </button>
            <p className="font-light text-gray-400 mt-3 text-2xs">
              *DISCLAIMER: This is not a physical product. Digital downloads
              will expire so please store them on your computer for future use.
              BECAUSE THIS IS A DIGITAL PRODUCT, WE ARE UNABLE TO ISSUE REFUNDS
            </p>
          </div>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="mx-8 my-6 | lg:mx-0 lg:my-16">
        <p className="font-semibold text-md">YOU MAY ALSO LIKE</p>
        <div className="flex overflow-x-scroll gap-5 mt-5 | md:gap-6 | lg:pl-0">
          {nextTabs?.map((tab: FullTab, i: number) => (
            <div key={i} className="text-xs font-light last:pr-8">
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
              <p className="mb-1 mt-2 text-[12px]">{tab.name}</p>
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
