import Image from 'next/image';
import Socials from '@/components/Socials';
import Link from 'next/link';
import SectionContainer from '../SectionContainer';

export default function HeroSection() {
  return (
    <SectionContainer>
     
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2 flex flex-col justify-center">
            <h2 className="max-w-2xl mb-4 text-3xl font-title font-bold md:text-4xl xl:text-5xl text-FMblue dark:text-white text-center">👋🏻 Jaime <span className='text-FMorange'>FM</span></h2>
            <h1 className="max-w-2xl mb-4 text-2xl font-title font-bold md:text-3xl xl:text-4xl text-center">DESARROLLO WEB A MEDIDA</h1>
            <p className="mb-2">Soluciones digitales <strong>innovadoras</strong> para hacer crecer tu negocio.</p>
            <p className="mb-6">Diseño y desarrollo <strong>personalizado</strong> con enfoque en <strong>calidad y rendimiento</strong>.</p>
            <div>
              <Link href="#contacto" className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center text-FMwhite rounded-md bg-FMorange hover:opacity-70">
                Contacta&nbsp;<span className='hidden md:inline'> conmigo</span>
              </Link>
              <Link href="#proyectos-destacados" className="inline-flex items-center justify-center px-5 py-3 font-medium text-center text-FMwhite rounded-md bg-FMblue hover:opacity-70">
                Explora mi trabajo
              </Link>

            </div>
          </div>
          <div className="hidden lg:mt-0 md:col-span-1 md:flex">
            <Image priority width={496} height={635} className='rounded-md object-cover' src="/jaime-byn.jpeg" alt="Jaime Fernández Moreno" />
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <Socials className='text-FMblue dark:text-FMwhite' />
        </div>   
    </SectionContainer>
  )
}

