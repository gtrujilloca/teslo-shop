'use client';

import { montserrat } from "@/config/fonts";
import { menuLInks } from "@/contants";
import { useUiStore } from "@/store";
import Link from "next/link";
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";

export  const TopMenu = () => {
  const toggleSidebar = useUiStore(state => state.toggleSidebar);

  return (
    <nav className="flex justify-between items-center w-full px-8 py-4">
      <div>
        <Link href="/">
          <span className={`${montserrat.className} antialiased font-bold`}>Teslo </span>
          <span>| shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        {
          menuLInks.map(({href, title}) => (
            <Link
              className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
              key={title}
              href={href}
            >
                {title}
            </Link>
          ))
        }
      </div>

      <div className="flex items-center gap-x-4">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart">
          <div className="relative">
            <span className="absolute -top-2 -right-2 text-xs bg-blue-300 text-white rounded-full px-1">3</span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={() => toggleSidebar()}>
          <IoMenuOutline className="w-5 h-5 " />
        </div>
      </div>
    </nav>
  );
};