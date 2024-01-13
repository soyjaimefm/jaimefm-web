import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";
export default function Header() {
  return (
    <header className='flex justify-center items-center py-5 w-full sticky top-0 bg-darkblue text-gray-50'>
      {/* <img className='rounded-full size-6' src="https://avatars.githubusercontent.com/u/56765613?v=4" /> */}
      <nav className='flex flex-row gap-x-10'>
        {
          headerNavLinks.map((navLink) => <Link className="font-mono text-lg hover:opacity-70" key={navLink.href} href={navLink.href}>{navLink.title}</Link>)
        }
      </nav>
    </header>
  )
}