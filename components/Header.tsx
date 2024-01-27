"use client"

import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";
import { FaHamburger, FaMoon } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState } from "react";
export default function Header() {


  const [openMenu, setOpenMenu] = useState('close');



  return (
    <header className='flex justify-center items-center py-5 w-full sticky top-0 bg-darkblue text-gray-50'>
      {/* <img className='rounded-full size-6' src="https://avatars.githubusercontent.com/u/56765613?v=4" /> */}
      {/* <nav className='flex flex-row container px-6 justify-between items-center gap-x-10'>
        <Link className="shrink-0 font-semibold text-xl" href='/'>JFM.</Link>
        <ul className="flex items-center gap-10">
          {
            headerNavLinks.map((navLink) => <Link className="font-mono text-lg hover:opacity-70" key={navLink.href} href={navLink.href}>{navLink.title}</Link>)
          }
        </ul>
        <ThemeSwitcher />
      </nav> */}


      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
            <ThemeSwitcher />
            <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => { setOpenMenu((currentState) => currentState == 'close' ? 'open' : 'close') }}>
              <span className="sr-only">Open main menu</span>
              <FaHamburger className="size-8 text-darkblue" />
            </button>
          </div>
          <div
            className={`items-center ${openMenu == 'close' ? 'hidden' : ''} justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {
                headerNavLinks.map((navLink) => <li><Link className="block py-2 px-3 text-gray-900 rounded font-mono text-lg hover:opacity-70" key={navLink.href} href={navLink.href}>{navLink.title}</Link></li>)
              }
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}