"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linksSocials = [
  {
    name: "facebook",
    image: "/socials/facebook_logo.svg",
    href: "https://www.facebook.com/Polyphia",
  },
  {
    name: "instagram",
    image: "/socials/instagram_logo.svg",
    href: "https://www.instagram.com/polyphia/",
  },
  {
    name: "youtube",
    image: "/socials/youtube_logo.svg",
    href: "https://www.youtube.com/channel/UCDe08Fs0s0YKJuk5h45csAQ",
  },
  {
    name: "tiktok",
    image: "/socials/tiktok_logo.svg",
    href: "https://www.tiktok.com/@polyphia",
  },
  {
    name: "twitter",
    image: "/socials/twitter_logo.svg",
    href: "https://twitter.com/polyphia",
  },
];

const links = [
  { name: "Listen", href: "/Listen" },
  { name: "Tour", href: "/Tour" },
  { name: "Tabs", href: "/Tabs" },
  { name: "", href: "" } /* blank space for Merch Dropdown Menu */,
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background sticky top-0 z-50 flex justify-between items-center | px-6 py-6 mb-8 | md:px-16 | xl:px-20 | lg:px-16 lg:py-10 ">
      <div className="flex items-center gap-10">
        <Link href="/">
          <div className="relative | h-7 w-36 | md:h-10 md:w-48 | lg:h-12 lg:w-60 ">
            <Image priority src="/logo_menu.png" alt="logo" fill sizes="" />
          </div>
        </Link>
        <div className="gap-10 | hidden | xl:flex ">
          {linksSocials.map((social, i) => (
            <Link key={i} target="_blank" href={social.href}>
              <Image
                src={social.image}
                alt={social.name}
                width={20}
                height={20}
                className="hover:scale-110 transition-transform"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="gap-20 | hidden | xl:flex items-center ">
        {links.map((link, i) => {
          return (
            <div key={i} className="flex items-center">
              {pathname === link.href ? (
                <Link
                  className="font-semibold text-base border-b-4 pb-1"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link className="font-semibold text-base" href={link.href}>
                  {link.name}
                </Link>
              )}
              {/* Render the dropdown menu only for the last item */}
              {i === links.length - 1 && (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center gap-1">
                      <Link className="font-semibold text-base" href="/Merch">
                        Merch
                      </Link>
                      <ChevronDown />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-2 mt-2">
                    <Link href="/Apparel">
                      <DropdownMenuItem>Apparel</DropdownMenuItem>
                    </Link>
                    <Link href="/Accessories">
                      <DropdownMenuItem>Accessories</DropdownMenuItem>
                    </Link>
                    <Link href="/Posters">
                      <DropdownMenuItem>Posters</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          );
        })}
        <button className="bg-gray-800 p-4 rounded-md hover:scale-110 transition-transform">
          <ShoppingBagIcon size={24} color="white" />
        </button>
      </div>

      {/* MOBILE ONLY */}
      <div className="flex gap-4 | xl:hidden | md:gap-5">
        <div className="bg-gray-800 p-2 md:p-3 rounded-md hover:scale-110 transition-transform">
          <ShoppingBagIcon size={16} color="white" className="md:w-6 md:h-6" />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className="bg-gray-800 p-2 md:p-3 rounded-md hover:scale-110 transition-transform">
              <Menu size={16} color="white" className="md:w-6 md:h-6" />
            </div>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between pb-8 pr-8">
            <div className="flex flex-col space-y-6 p-4">
              {/* Navigation Links */}
              <div className="pt-2">
                <p className="text-gray-500 mb-2 md:mb-3 text-xs md:text-lg">
                  Menu
                </p>
                <div className="flex flex-col space-y-4 md:space-y-5">
                  <Link
                    href="/Listen"
                    className="text-sm md:text-xl hover:scale-105 transition-transform"
                  >
                    Listen
                  </Link>
                  <Link
                    href="/Tour"
                    className="text-sm md:text-xl hover:scale-105 transition-transform"
                  >
                    Tour
                  </Link>
                  <Link
                    href="/Tabs"
                    className="text-sm md:text-xl hover:scale-105 transition-transform"
                  >
                    Tabs
                  </Link>
                </div>
              </div>

              {/* Merch Section */}
              <div className="pt-2">
                <p className="text-gray-500 mb-2 md:mb-3 text-xs md:text-lg">
                  Merch
                </p>
                <div className="flex flex-col space-y-4 md:space-y-5 text-sm md:text-xl">
                  <Link
                    href="/Apparel"
                    className="text-sm md:text-xl hover:scale-105 transition-transform"
                  >
                    Apparel
                  </Link>
                  <Link
                    href="/Accessories"
                    className="text-sm md:text-xl hover:scale-105 transition-transform"
                  >
                    Accessories
                  </Link>
                  <Link
                    href="/Posters"
                    className="text-sm md:text-xl hover:scale-105 transition-transform"
                  >
                    Posters
                  </Link>
                </div>
              </div>
            </div>
            <SheetFooter className="flex flex-row justify-end gap-5">
              {linksSocials.map((social, i) => (
                <Link key={i} target="_blank" href={social.href}>
                  <Image
                    src={social.image}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="hover:scale-110 transition-transform"
                    priority
                  />
                </Link>
              ))}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
