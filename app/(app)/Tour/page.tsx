import { client } from "@/app/lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'ticket']";
  const data = await client.fetch(query);
  return data;
}

async function Tour() {
  const data = await getData();
  return (
    <div className="mx-6 mb-8 | md:mx-16 | xl:mx-20">
      <h1 className="text-2xl my-0 mb-4 | xl:text-4xl xl:my-8 font-semibold ">
        Tour
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 | gap-3 xl:gap-4">
        {data.map((ticket: SimplifiedTicket, i: number) => (
          /* Component */
          <Link href={`/Tour/${ticket._id}`} target="_blank" key={i}>
            <div
              key={i}
              className=" border rounded-md p-5 xl:p-6 flex justify-between items-center"
            >
              <div>
                <p className="text-sm xl:text-lg font-semibold">
                  {ticket.date}
                </p>
                <p className="text-wrap text-xs xl:text-sm truncate pr-2 text-gray-200">{`${ticket.location} | ${ticket.place}`}</p>
              </div>
              <button className="text-sm xl:text-sm | px-4 xl:px-6 | py-1.5 xl:py-2 | h-min bg-white text-black font-semibold hover:scale-105 transition-transform rounded-md">
                Tickets
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface SimplifiedTicket {
  _id: string;
  place: string;
  location: string;
  date: any;
}

export default Tour;
