import { ReactNode } from "react";
import FMh3 from "./ui/FMh3";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: ReactNode;
  imgSrc: string;
  projectUrl: string;
}
export default function ProjectCard({ title, description, imgSrc, projectUrl }: ProjectCardProps) {
  return (
    <article className="flex flex-col md:flex-row md:gap-x-12 items-center">
      <div className="md:w-1/3">
        <Image width={1200} height={600} className="w-full rounded-lg aspect-video object-cover" src={imgSrc} alt="web Marisol Psicóloga" />
      </div>
      <div className="md:w-2/3">
        <FMh3>{title}</FMh3>
        <div>
          {description}
        </div>
        <Link href={projectUrl} className="mt-4 inline-flex items-center justify-center px-5 py-3 font-medium text-center text-FMwhite rounded-md bg-FMblue hover:opacity-70">
          Visitar web
        </Link>
      </div>
    </article>
  )
}
