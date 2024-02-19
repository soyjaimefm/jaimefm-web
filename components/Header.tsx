"use client"

import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='flex justify-center items-center py-5 w-full sticky top-0 bg-blue-bayoux-500 text-gray-50 min-h-16'>
      <nav className="fixed w-full z-1 top-0 start-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-2">
          <Link className="font-semibold text-hot-cinnamon-500 text-2xl w-12" href='/'>JFM.</Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
            <ThemeSwitcher />
            <button type="button" className="flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden" onClick={() => { setOpenMenu((currentState) => !currentState) }}>
              <span className="sr-only">Abrir menú</span>
              {openMenu ? <GrClose className="size-8 text-gray-100" /> : <FaHamburger className="size-8 text-gray-100" />}
            </button>
          </div>
          <div className={`items-center ${openMenu ? '' : 'hidden'} justify-between w-full md:flex md:w-auto md:order-1 `} >
            <ul className="flex flex-col p-4 md:p-0 mt-5 md:space-x-8 md:flex-row md:mt-0 md:border-0   bg-blue-bayoux-500 rounded-lg">
              {
                headerNavLinks.map((navLink) => <li key={navLink.title}><Link className="py-2 px-3 font-title text-xl hover:opacity-70 block" key={navLink.href} href={navLink.href}>{navLink.title}</Link></li>)
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}