"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const linksListen = [
  {
    name: "spotify",
    image: "/listen_logos/spotify_logo.svg",
    href: "https://open.spotify.com/intl-pt/album/1BJtoy1VgHMMvotBwvylJ5?go=1&nd=1&dlsi=f1eec4a224974eba",
  },
  {
    name: "apple music",
    image: "/listen_logos/apple_music_logo.svg",
    href: "https://music.apple.com/pt/album/remember-that-you-will-die/1651577210?at=1000lGfd&ct=LFV_1e1827c5746dfbd06c7827933dbb630f&itsct=catchall_p3&itscg=30440&ls=1",
  },
  {
    name: "youtube",
    image: "/listen_logos/youtube_logo.svg",
    href: "https://www.youtube.com/playlist?list=PLN0q19AZLbSf-2Q4-2jKzmhs6whjnITud",
  },
  {
    name: "soundcloud",
    image: "/listen_logos/soundcloud_logo.svg",
    href: "https://soundcloud.com/polyphia",
  },
  {
    name: "amazon music",
    image: "/listen_logos/amazon_logo.svg",
    href: "https://www.amazon.com/dp/B0BLHVYBRF?linkCode=osi&th=1&psc=1&tag=linkfiregen&ie=UTF8&ascsubtag=1e1827c5746dfbd06c7827933dbb630f&ref=dmm_acq_soc_pt_u_lfire_lp_x_1e1827c5746dfbd06c7827933dbb630f",
  },
  {
    name: "tidal",
    image: "/listen_logos/tidal_logo.svg",
    href: "https://tidal.com/browse/album/255834904",
  },
];

function Listen() {
  return (
    <div className="mt-8 flex justify-center items-center | lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 md:gap-6 mb-4">
        {linksListen.map((link, i) => (
          <TooltipProvider key={i} delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={link.href} target="_blank">
                  <div className="relative w-14 h-14 md:w-24 md:h-24 flex">
                    <Image
                      src={link.image}
                      alt={link.name}
                      height={80}
                      width={80}
                      className="p-2"
                    />
                    <TooltipContent onClick={() => link.href}>
                      <p className="font-semibold">{link.name}</p>
                    </TooltipContent>
                  </div>
                </Link>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}

export default Listen;
