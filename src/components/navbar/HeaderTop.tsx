import Image from "next/image";
import Link from "next/link";

import SearchBox from "./SearchBox";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import HeaderMain from "@/components/navbar/HeaderMain";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="mx-auto py-5 flex items-center justify-between gap-4">

        {/* SearchBox */}
        <SearchBox />

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <h1 className="text-4xl font-black font-Morabba text-black">بلک <span className="text-blue-700">شاپ</span></h1>
        </Link>

        {/* RIGHT → Desktop Buttons */}
        <DesktopMenu />

        {/* RIGHT → Mobile Buttons */}
        <MobileMenu />
      </div>

      <HeaderMain />
    </header>
  );
}
