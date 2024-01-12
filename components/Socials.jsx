import { FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa"
import { socialLinks } from "@/data/socialLinks";
export default function Socials({className}) {
    return (
        <div className={'flex -mx-2 ' + className}>
            <a href={socialLinks.instagram} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-darkblue dark:hover:text-blue-400" aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href={socialLinks.twitter} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-darkblue dark:hover:text-blue-400" aria-label="Twitter">
                <FaTwitter />
            </a>
            <a href={socialLinks.github} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-darkblue dark:hover:text-blue-400" aria-label="Github">
                <FaGithub />
            </a>
            <a href={socialLinks.youtube} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-darkblue dark:hover:text-blue-400" aria-label="Youtube">
                <FaYoutube />
            </a>
        </div>
    )
}