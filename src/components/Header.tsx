import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between p-3 md:px-5 md:pt-5 md:pb-3 text-gray-800 sticky">
        <div className="flex items-center gap-0 md:gap-6 w-full md:w-fit">
          {/* logo */}
          <Link href="/">
            <div className="hidden md:flex items-center gap-1">
              <Image src="/images/logo.png" width="32" height="32" alt="Logo-1" />
              <Image src="/images/logo_2.png" width="200" height="120" alt="Logo-2" />
            </div>
          </Link>

          <div className="flex items-center gap-2 px-4 w-full bg-[#f0f0f0] rounded-lg">
            <Icon className="text-xl text-gray-500 " icon="solar:magnifer-outline" />
            <input type="text" className="py-3 w-full md:w-[35rem] focus:outline-none shadow-xs placeholder:text-xs" placeholder="جستجو در دنیایی از کالاها..." />
          </div>

          {/* mobile mode */}
          <div className="md:hidden bg-sky-100/90 shadow-inner p-3.5 rounded-lg mr-2">
            <Icon className="text-2xl text-sky-500" icon="solar:phone-calling-rounded-outline" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {/* login and signup */}
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 duration-200">
            <Icon className="rotate-180 text-xl" icon="solar:login-2-linear" />
            <span className="text-sm relative bottom-0.5">ورود | ثبت‌نام</span>
          </button>

          {/* Cart badge */}
          <button className="relative">
            <div className="p-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 duration-200">
              <Icon className="text-2xl" icon="solar:cart-4-outline" />
            </div>
            <span className="absolute shadow rounded-full bg-sky-500 text-white w-5 h-5 -right-2 -top-1 text-sm">0</span>
          </button>
        </div>
      </header>
    </>
  )
}
