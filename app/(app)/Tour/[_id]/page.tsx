"use client";

import { client } from "@/app/lib/sanity";

async function getData(id: string) {
  const query = `*[_type == "ticket" && _id == "${id}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const TicketSalesPage = async ({ params }: { params: { _id: string } }) => {
  const data = await getData(params._id);
  return (
    <div className="mx-8 flex flex-col gap-4 p-8 bg-gray-800 rounded-xl absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
      <h1 className="font-semibold text-2xl text-gray-400">
        This is your Fake Ticket
      </h1>
      <p>
        <span className="font-bold text-md md:text-lg">{`Price: `}</span>
        <span className="text-md md:text-lg">{`$${data.price.toFixed(
          2
        )}`}</span>
      </p>
      <p>
        <span className="font-bold text-md md:text-lg">{`Location: `}</span>
        <span className="text-md md:text-lg">{`${data.place} | ${data.location}`}</span>
      </p>
      <p>
        <span className="font-bold text-md md:text-lg">{`Date: `}</span>
        <span className="text-md md:text-lg">{`${data.date}`}</span>
      </p>
      <p>
        <span className="font-bold text-md md:text-lg">{`Your Ticket ID: `}</span>
        <span className="text-md md:text-lg">{`${data._id}`}</span>
      </p>
      <p className="transition-transform mt-6 rounded-lg text-lg font-semibold">
        You Can Close The Tab
      </p>
    </div>
  );
};

export default TicketSalesPage;

interface FullTicket {
  _id: string;
  price: number;
  place: string;
  location: string;
  date: any;
}
