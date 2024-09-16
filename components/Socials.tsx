import { socialLinks } from "@/data/socialLinks";
import Instagram from '@/components/icons/Instagram';
import Youtube from '@/components/icons/Youtube';
import Github from '@/components/icons/Github';
import TikTok from '@/components/icons/Tiktok';
import Link from "next/link";
export default function Socials({ className }) {
    return (
        <div className={'flex gap-4 ' + className}>
            <Link target="_blank" href={socialLinks.instagram} className="transition-colors duration-300 hover:opacity-70  hover:scale-110" aria-label="Instagram">
                <Instagram className="size-5 md:size-6" />
            </Link>
            <Link target="_blank" href={socialLinks.tikTok} className="transition-colors duration-300 dark:text-gray-300 hover:opacity-70  hover:scale-110" aria-label="Twitter">
                <TikTok className="size-5 md:size-6" />
            </Link>
            <Link target="_blank" href={socialLinks.github} className="transition-colors duration-300 dark:text-gray-300 hover:opacity-70  hover:scale-110" aria-label="Github">
                <Github className="size-5 md:size-6" />
            </Link>
            <Link target="_blank" href={socialLinks.youtube} className="transition-colors duration-300 hover:opacity-70  hover:scale-110" aria-label="Youtube">
                <Youtube className="size-5 md:size-6" />
            </Link>
        </div>
    )
}