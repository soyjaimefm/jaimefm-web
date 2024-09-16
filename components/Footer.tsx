import Image from 'next/image';
import headerNavLinks from "@/data/headerNavLinks";
import Socials from './Socials';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-FMblue text-FMwhite font-title">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <Link href="/">
                        <Image width={100} height={100} src="/logo-jaime-fm-t.png" alt="Jaime FM logo" />
                    </Link>
                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        {
                            headerNavLinks.map((link) => <Link key={link.href} href={link.href} className="mx-4 text-lg transition-colors duration-300 hover:opacity-70" aria-label={link.title}>{link.title}</Link>)
                        }
                    </div>
                </div>
                <hr className="my-6 md:my-10 border-FMsoftBlue" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-lg mb-6 sm:mb-0">Desarrollado por Jaime Fernández Moreno 🚀</p>
                    {/* <Socials className='mb-6 sm:mb-0' /> */}
                </div>
            </div>
        </footer>
    )
}