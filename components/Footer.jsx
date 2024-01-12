import Image from 'next/image';
import headerNavLinks from "@/data/headerNavLinks";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Socials from './Socials';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <a href="#">
                        <Image width={100} height={100} src="/logo-jaime-fm-t.png" alt="" />
                    </a>
                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        {
                            headerNavLinks.map((link) => <a key={link.href} href={link.href} className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit">{link.title}</a>)
                        }
                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Desarrollado con 💙 por Jaime Fernández Moreno</p>
                    <Socials />
                </div>
            </div>
        </footer>
    )
}