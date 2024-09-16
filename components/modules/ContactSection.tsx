import FMh2 from "@/components/ui/FMh2";
import SectionContainer from "../SectionContainer";
import Link from "next/link";
import Phone from '../icons/Phone';
import Mail from '../icons/Mail'
import Instagram from "../icons/Instagram";

export default function ContactSection() {
  return (
    <SectionContainer sectionId='contacto' className='scroll-m-14'>
      <FMh2>¿LISTO PARA EMPEZAR?</FMh2>
      <p className="mt-3 ">Si tienes un proyecto en mente o necesitas más información, no dudes en ponerte en contacto. Estoy aquí para ayudarte a convertir tu visión en realidad.</p>
      <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <Link className='hover:scale-105 transition-transform text-center' href={'mailto:jaimefrm93@gmail.com'}>
          <span className="inline-block p-3 text-FMblue bg-FMsoftBlue rounded-full">
            <Mail />
          </span>
          <p className="mt-2 text-FMblue dark:text-FMsoftBlue">jaimefrm93@gmail.com</p>
        </Link>
        <Link className='hover:scale-105 transition-transform text-center' href={'https://www.instagram.com/soyjaimefm/?hl=es'}>
          <span className="inline-block p-3 text-FMblue bg-FMsoftBlue rounded-full">
            <Instagram />
          </span>
          <p className="mt-2 text-FMblue dark:text-FMsoftBlue">@soyjaimefm</p>
        </Link>
        <Link className='hover:scale-105 transition-transform text-center' href={'tel:+34687722498'}>
          <span className="inline-block p-3 text-FMblue bg-FMsoftBlue rounded-full">
            <Phone />
          </span>
          <p className="mt-2 text-FMblue dark:text-FMsoftBlue">+34687722498</p>
        </Link>
      </div>
    </SectionContainer>
  )
}
