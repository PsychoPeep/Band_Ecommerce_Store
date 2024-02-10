"use client";

import { usePathname } from "next/navigation";

const Merch = () => {
  const pathname = usePathname();

  const formattedPath = pathname.split("/").filter(Boolean).join(" -> ");

  return (
    <div className="m-16">
      <h1 className="text-4xl">{formattedPath}</h1>
    </div>
  );
};

export default Merch;
