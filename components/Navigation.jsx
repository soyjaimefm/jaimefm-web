import headerNavLinks from "@/data/headerNavLinks";
import MenuLink from "./MenuLink";
import Link from "next/link";

export default function Navigation() {

  return (
    <nav className="bg-white border-gray-200 dark:bg-darkblue">



      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img src="logo-jaime-fm-t.png" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jaime FM</span>
        </Link>



        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            {
              headerNavLinks.map((headerNavLink) => {
                return (
                  <MenuLink key={headerNavLink.href} {...headerNavLink} />
                )
              })
            }
          </ul>
        </div>

      </div>
    </nav>
  )
}