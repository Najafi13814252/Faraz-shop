import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

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

          {/* SearchBox (always visible) */}
          <div className="w-full sm:w-[20rem] md:w-[30rem] lg:w-[35rem] hidden sm:block">
            <div className="flex items-center gap-2 flex-1 px-3 py-2 bg-gray-100 rounded-lg">
              <Icon className="text-xl text-gray-500" icon="solar:magnifer-outline" />
              <input
                type="text"
                className="w-full bg-transparent focus:outline-none placeholder:text-sm"
                placeholder="جستجو..."
              />
            </div>
          </div>
        </div>

        {/* RIGHT → Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-5">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer">
            <Icon className="rotate-180 text-xl" icon="solar:login-2-linear" />
            <span className="text-sm relative bottom-0.5">ورود | ثبت‌نام</span>
          </button>

          <button className="relative">
            <div className="p-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition cursor-pointer">
              <Icon className="text-2xl" icon="solar:cart-4-outline" />
            </div>
            <span className="absolute -right-2 -top-1 bg-sky-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
              0
            </span>
          </button>
        </div>

        {/* RIGHT → Mobile Buttons */}
        <div className="flex sm:hidden items-center gap-3">
          <button className="bg-gray-100 p-2 rounded-full shadow-inner cursor-pointer">
            <Icon className="text-xl text-gray-700" icon="solar:magnifer-outline" />
          </button>

          <button className="bg-sky-100 p-2 rounded-full shadow-inner cursor-pointer">
            <Icon className="text-xl text-sky-500" icon="solar:phone-calling-rounded-outline" />
          </button>
        </div>

      </div>
    </header>
  );
}
