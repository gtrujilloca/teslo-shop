'use client';

import Link from "next/link";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5"

import { sibebarLinks } from "@/contants";
import { useUiStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {

  const isSidebarOpen = useUiStore(state => state.isSidebarOpen);
  const toggleSidebar = useUiStore(state => state.toggleSidebar);

  return (
    <aside>
      {
        isSidebarOpen &&
        (
          <>
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/50 pointer-events-none" />
            <div
              className="fixed top-0 left-0 w-screen h-screen z-10 bakground-filter backdrop-blur-sm"
              onClick={() => toggleSidebar()}
            />
          </>
        )
      }

      <nav className={
        clsx(
          "fixed top-0 right-0 w-[300px] h-screen bg-white p-5 z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSidebarOpen
          }
        )
      }>
        <IoCloseOutline
          className="absolute top-5 left-5 cursor-pointer"
          onClick={() => toggleSidebar()}
          size={30}
        />

        <div className="relative mt-14">
          <IoSearchOutline
            className="absolute top-2 left-2 cursor-pointer"
            onClick={() => { }}
            size={20}
          />
          <input
            className="w-full bg-gray-50 rounded px-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-300"
            type="text"
            placeholder="search"
          />
        </div>
        {
          sibebarLinks.map(({ href, title, icon, includeSeparator }) => (
            <>
              <Link
                className="flex items-center mt-4 p-2 hover:bg-gray-100 rounded transition-all"
                key={title}
                href={href}
              >
                {icon}
                <span className="ml-3 text-base">{title}</span>
              </Link>
              {includeSeparator && <hr className="w-full h-px bg-gray-200 my-10" />}
            </>
          ))
        }

      </nav>
    </aside>
  );
}