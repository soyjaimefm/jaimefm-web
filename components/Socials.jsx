import { FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa"
import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
export default function Socials({className}) {
    return (
        <div className={'flex gap-4 ' + className}>
            <Link href={socialLinks.instagram} className="transition-colors duration-300 dark:text-gray-300 hover:opacity-70 dark:hover:text-blue-400 hover:scale-110" aria-label="Instagram">
                <FaInstagram className="size-5 md:size-6" />
            </Link>
            <Link href={socialLinks.twitter} className="transition-colors duration-300 dark:text-gray-300 hover:opacity-70 dark:hover:text-blue-400 hover:scale-110" aria-label="Twitter">
                <FaTwitter className="size-5 md:size-6" />
            </Link>
            <Link href={socialLinks.github} className="transition-colors duration-300 dark:text-gray-300 hover:opacity-70 dark:hover:text-blue-400 hover:scale-110" aria-label="Github">
                <FaGithub className="size-5 md:size-6" />
            </Link>
            <Link href={socialLinks.youtube} className="transition-colors duration-300 dark:text-gray-300 hover:opacity-70 dark:hover:text-blue-400 hover:scale-110" aria-label="Youtube">
                <FaYoutube className="size-5 md:size-6" />
            </Link>
        </div>
    )
}