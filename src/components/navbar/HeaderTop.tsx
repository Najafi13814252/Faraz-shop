import Link from "next/link";

import SearchBox from "./SearchBox";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import HeaderMain from "@/components/navbar/HeaderMain";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white px-4 lg:px-20">
      <div className="mx-auto pt-4 md:pt-8 md:pb-8  flex items-center justify-between gap-4">

        {/* SearchBox */}
        <SearchBox />

        {/* Logo */}
        <Link href="/" className="hidden md:block text-center absolute left-1/2 -translate-x-1/2 flex items-center">
          <h1 className="text-4xl font-black font-Morabba text-blue-700">فراز <span className="text-black">شاپ</span></h1>
          <p className="text-sm text-gray-500 mt-1">فروشگاه لوازم دیجیتال</p>
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
