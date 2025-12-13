import Image from "next/image";
import Link from "next/link";

import SearchBox from "./SearchBox";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="mx-auto px-3 py-3 flex items-center justify-between gap-4">

        {/* LEFT → Logo + SearchBox (always visible) */}
        <div className="flex items-center gap-3 lg:gap-6 flex-1">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_2.png"
              width={160}
              height={80}
              alt="Logo"
              className="w-24 sm:w-32 lg:w-38 h-auto"
            />
          </Link>

          {/* SearchBox */}
          <SearchBox />
        </div>

        {/* RIGHT → Desktop Buttons */}
        <DesktopMenu />

        {/* RIGHT → Mobile Buttons */}
        <MobileMenu />

      </div>
    </header>
  );
}
