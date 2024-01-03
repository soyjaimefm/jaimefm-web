import headerNavLinks from "@/data/headerNavLinks";
export default function Header() {
  return (
    <header className='flex justify-center items-center py-5 w-full sticky top-0 bg-darkblue text-gray-50'>
      {/* <img className='rounded-full size-6' src="https://avatars.githubusercontent.com/u/56765613?v=4" /> */}
      <nav className='flex flex-row gap-x-10'>
        {
          headerNavLinks.map((navLink) => <a className="hover:opacity-70" key={navLink.href} href={navLink.href}>{navLink.title}</a>)
        }
      </nav>
    </header>
  )
}