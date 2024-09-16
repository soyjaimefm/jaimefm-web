import FMh2 from '@/components/ui/FMh2';
import SectionContainer from '../SectionContainer';
import ProjectCard from '../ProjectCard';

export default function ProjectsSection() {
  return (
    <SectionContainer sectionId='proyectos-destacados' className='bg-FMsoftBlue dark:bg-slate-700 scroll-m-14'>
      <FMh2>PROYECTOS DESTACADOS</FMh2>
      <p className="my-4">Estos son algunos de los trabajos que he realizado, que reflejan mi pasión por el desarrollo y la creación de productos digitales.</p>
      <div className='mt-8 flex flex-col gap-y-16'>
        <ProjectCard
          title='Marisol Sánchez Psicóloga'
          description={
            <>
              <p>Clínica de Psicología ubicada en Hellín (Albacete). La web está creada sobre <strong>Wordpress</strong> utilizando <strong>Divi</strong> como constructor.</p>
              <p>Cuenta con blog, material descargable, páginas informativas y formularios de contacto y suscripción.</p>
            </>
          }
          imgSrc='/marisol-psicologa.jpeg'
          projectUrl='https://marisolpsicologa.com'
        />

        <ProjectCard
          title='La Pícara producciones'
          description={
            <>
              <p className="mb-4">Productora audiovisual.</p>
              <p>En este caso partía de un diseño en figma. Fue todo un reto a nivel de <strong>CSS</strong> replicar toda esa estética y a la vez configurar un Wordpress para gestionar el contenido.</p>
            </>
          }
          imgSrc='/lapicara-web.jpeg'
          projectUrl='https://lapicaraproducciones.com'
        />
        <ProjectCard
          title='Adventures in class'
          description={
            <>
              <p className="mb-4">Para este proyecto utilicé tecnologías similares a los anteriores proyectos. Pero además añadí un e-commerce y una plataforma de cursos.</p>
              <p>Por otro lado en este proyecto tenemos también muchos estilos personalizados mediante código CSS para cumplir con un diseño más custom.</p>
            </>
          }
          imgSrc='/adventures-in-class-web.jpeg'
          projectUrl='https://adventuresinclass.com'
        />

      </div>
      {/* <div className="divide-y">
        <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
          <div className="">
            <FMh3>Marisol Sánchez Psicóloga</FMh3>
            <p className="mb-4">Clínica de Psicología ubicada en Hellín (Albacete). La web está creada sobre <strong>Wordpress</strong> utilizando <strong>Divi</strong> como constructor.</p>
            <p>Cuenta con blog, material descargable, páginas informativas y formularios de contacto y suscripción.</p>
          </div>
          <Link target='_blank' href={'https://marisolpsicologa.com'}>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Image width={1200} height={600} className="w-full rounded-lg col-span-2" src="/marisol-psicologa.jpeg" alt="web Marisol Psicóloga" />
              <Image width={700} height={1200} className="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/marisol-psicologa-mobile.jpeg" alt="web Marisol Psicóloga móvil" />
            </div>
          </Link>
        </div>
        <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
          <Link target='_blank' href={'https://lapicaraproducciones.com'}>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Image width={900} height={900} className="w-full rounded-lg col-span-2" src="/lapicara-web.jpeg" alt="web La Pícara" />
            </div>
          </Link>
          <div className="font-light sm:text-lg">
            <FMh3>La Pícara producciones</FMh3>
            <p className="mb-4">Productora audiovisual.</p>
            <p>En este caso partía de un diseño en figma. Fue todo un reto a nivel de <strong>CSS</strong> replicar toda esa estética y además poder un Wordpress para gestionar el contenido.</p>
          </div>
        </div>
        <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
          <div className="font-light sm:text-lg">
            <FMh3>Adventures in class</FMh3>
            <p className="mb-4">Para este proyecto utilicé tecnologías similares a los anteriores proyectos. Pero además añadí un e-commerce.</p>
            <p>Por otro lado en este proyecto tenemos también muchos estilos personalizados mediante código CSS para cumplir con un diseño más custom.</p>
          </div>
          <Link target='_blank' href={'https://adventuresinclass.com'}>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Image width={1074} height={871} className="w-full rounded-lg col-span-2" src="/adventures-in-class-web.jpeg" alt="web Adventures in class" />
              <Image width={386} height={806} className="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/adventures-in-class-web-mobile.jpeg" alt="web Adventures in class móvil" />
            </div>
          </Link>
        </div>
      </div> */}
      {/* <hr className="my-12 border-gray-200 dark:border-gray-700" /> */}
      {/* <div>
        <p className='font-semibold text-center'>Estas son las tecnologías que suelo utilizar:</p>
        <div className='mt-8 grid md:grid-cols-4 gap-y-6 gap-x-2 w-fit mx-auto'>
          <p>Frontend: </p>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaJs className='size-6' />JavaScript</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaHtml5 className='size-6' />HTML</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaCss3 className='size-6' />CSS</span>
          <p>Frameworks: </p>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaReact className='size-6' />React</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><TbBrandNextjs className='size-6' />Next.js</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><SiTailwindcss className='size-6' />Tailwind CSS</span>
          <p>Tools: </p>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><SiVite className='size-6' />Vite</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaNpm className='size-6' />npm</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaGit className='size-6' />git</span>
          <p>Backend y lenguajes: </p>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaNodeJs className='size-6' />Node.js</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><TbBrandCpp className='size-6' />C/C++</span>
          <span className="bg-FMblue text-FMwhite text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaPython className='size-6' />Python</span>
        </div>
      </div> */}
    </SectionContainer>
  )
}
