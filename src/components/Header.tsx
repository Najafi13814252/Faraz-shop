import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between px-5 pt-5 pb-3 text-gray-800">
        <div className="flex items-center gap-8 w-full md:w-fit">
          {/* logo */}
          <Link href="/">
            <img className="hidden md:block w-full h-12" src="/images/logo.webp" alt="Logo" />
          </Link>

          <div className="flex items-center gap-2 px-4 w-full bg-gray-200 rounded-lg">
            <Icon className="text-lg text-gray-500" icon="solar:magnifer-outline" />
            <input type="text" className="py-3 w-full md:w-[35rem] focus:outline-none shadow-xs placeholder:text-sm" placeholder="جستجو در دنیایی از کالاها..." />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {/* login and signup */}
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 duration-200">
            <Icon className="rotate-180 text-2xl" icon="solar:login-2-linear" />
            <span>ورود | ثبت‌نام</span>
          </button>

          {/* Cart badge */}
          <button className="relative">
            <div className="p-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 duration-200">
              <Icon className="text-3xl" icon="solar:cart-4-outline" />
            </div>
            <span className="absolute shadow rounded-full bg-sky-500 text-white w-5 h-5 -right-2 -top-1 text-sm">0</span>
          </button>
        </div>
      </header>
    </>
  )
}
