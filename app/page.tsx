import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaJs, FaHtml5, FaRegEnvelope, FaInstagram, FaPhone, FaTwitter, FaYoutube, FaGithub, FaCss3, FaCode, FaGlobe, FaHandshake, FaNpm, FaGit, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";

import Socials from '@/components/Socials';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="font-normal sm:text-lg">
        <div className="container grid px-6 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-8">
            <h2 className="max-w-2xl mb-4 text-3xl font-title font-bold md:text-4xl xl:text-5xl text-blue-bayoux-700 dark:text-white text-center">👋🏻 Jaime <span className='text-orange'>FM.</span></h2>
            <h1 className="max-w-2xl mb-4 text-2xl font-title font-bold md:text-3xl xl:text-4xl text-gray-700 dark:text-white text-center">DESARROLLADOR DE SOFTWARE.</h1>
            <p className="max-w-2xl mb-4 text-gray-600 dark:text-gray-300">Trabajo como <strong>desarrollador Frontend</strong> en Paradigma Digital.</p>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-8 dark:text-gray-300">Me encanta la programación, especialmente el <strong>desarrollo web</strong>, la electrónica y la tecnología. Por eso disfruto investigando, aprendiendo y creando contenido para redes sociales.</p>
            <Link href="#contacto" className="inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center text-gray-100 rounded-md bg-hot-cinnamon-500 hover:opacity-70">
              Contacta&nbsp;<span className='hidden md:inline'> conmigo</span>
            </Link>
            <Link href="/about-me" className="inline-flex items-center justify-center px-5 py-3 font-medium text-center text-gray-100 rounded-md bg-blue-bayoux-700 hover:opacity-70">
              Conóceme
            </Link>
          </div>
          <div className="hidden lg:mt-0 md:col-span-4 md:flex">
            <Image priority width={496} height={635} className='rounded-md object-cover' src="/jaime-byn.jpeg" alt="Jaime Fernández Moreno" />
          </div>
        </div>
        <div className='container mx-auto flex justify-center'>
          <span className='px-4 py-4 mb-4'>
            <Socials className='text-blue-bayoux-700' />
          </span>
        </div>
      </section>
      <hr className="my-6 border-blue-bayoux-700 md:my-10 dark:border-blue-bayoux-300" />

      {/* Mi trabajo */}
      <section className="font-normal sm:text-lg">
        <div className="container px-6 py-10 mx-auto">
          <SectionTitle>MIS PROYECTOS</SectionTitle>
          <p className="mt-3">Durante el último año he estado trabajando en proyectos personales en mi tiempo libre. He desarrollado webs y tiendas online para algunos clientes. Por otro lado, he creado mi cuenta <strong>@soyjaimefm</strong> en la que comparto contenido sobre tecnología en redes sociales.</p>
          <div className="divide-y">
            <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
              <div className="">
                <h3 className="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200">Marisol Sánchez Psicóloga</h3>
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
                <h3 className="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200">La Pícara producciones</h3>
                <p className="mb-4">Productora audiovisual.</p>
                <p>En este caso partía de un diseño en figma. Fue todo un reto a nivel de <strong>CSS</strong> replicar toda esa estética y además poder un Wordpress para gestionar el contenido.</p>
              </div>
            </div>
            <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
              <div className="font-light sm:text-lg">
                <h3 className="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200">Adventures in class</h3>
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
          </div>
          <hr className="my-12 border-gray-200 dark:border-gray-700" />

          <div>
            <p className='font-semibold text-center'>Estas son las tecnologías que suelo utilizar:</p>
            <div className='mt-8 grid md:grid-cols-4 gap-y-6 gap-x-2 w-fit mx-auto'>
              <p>Frontend: </p>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaJs className='size-6' />JavaScript</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaHtml5 className='size-6' />HTML</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaCss3 className='size-6' />CSS</span>

              <p>Frameworks: </p>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaReact className='size-6' />React</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><TbBrandNextjs className='size-6' />Next.js</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><SiTailwindcss className='size-6' />Tailwind CSS</span>

              <p>Tools: </p>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><SiVite className='size-6' />Vite</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaNpm className='size-6' />npm</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaGit className='size-6' />git</span>

              <p>Backend y lenguajes: </p>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaNodeJs className='size-6' />Node.js</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><TbBrandCpp className='size-6' />C/C++</span>
              <span className="dark:bg-gray-100 bg-blue-bayoux-200 text-gray-700 text-sm font-medium me-2 px-2.5 py-1 rounded flex items-center gap-2"><FaPython className='size-6' />Python</span>
            </div>
          </div>

        </div>
      </section>
      <hr className="my-6 border-blue-bayoux-700 md:my-10 dark:border-blue-bayoux-300" />

      {/* Servicios */}
      <section className="font-normal sm:text-lg">
        <div className="container px-6 py-12 mx-auto">
          <SectionTitle>SERVICIOS</SectionTitle>
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 lg:pr-6">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-bayoux-700 bg-blue-bayoux-300 rounded-md md:mx-4">
                  <FaCode className='size-6' />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold">Desarrollo de software</h3>
                  <p className="mt-3">
                    Puedo participar en proyectos desarrollando software en distintos lenguajes. Creo aplicaciones web utilizando herramientas modernas y actualizadas. Siempre aplicando <strong>buenas prácticas</strong> para conseguir un <strong>producto óptimo y de calidad</strong>. También puedo participar en las etapas iniciales de un nuevo producto aportando mi <strong>punto de vista técnico</strong> en la definición de requisitos y la toma de decisiones de negocio.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-bayoux-700 bg-blue-bayoux-300 rounded-md md:mx-4">
                  <FaGlobe className='size-6' />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold">Creación de páginas web a medida</h3>
                  <p className="mt-3">
                    Puedo convertir ideas y diseños en una web completa y funcional. Trabajo con un enfoque mobile first para asegurar que la página sea usable en cualquier dispositivo. Puedo <strong>adaptarme</strong> a las <strong>necesidades del negocio</strong> para añadir las funcionalidades necesarias (CMS, newsletter, formulario de contacto, <strong>e-commerce</strong>, etc.)
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-bayoux-700 bg-blue-bayoux-300 rounded-md md:mx-4">
                  <FaHandshake className='size-6' />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold">Consultoría técnica</h3>
                  <p className="mt-3">
                    Si necesitas <strong>ayuda</strong> o <strong>asesoramiento</strong> con tu proyecto o incluso <strong>formación</strong> sobre conceptos técnicos o <strong>programación</strong> podemos agendar una videollamada donde resolveré encantado todas tus dudas.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center px-6">
              <Image width={750} height={960} className="size-[40rem] object-cover rounded-xl" src="/laptop.avif" alt="laptop" />
            </div>
          </div>
        </div>
      </section>
      <hr className="my-6 border-blue-bayoux-700 md:my-10 dark:border-blue-bayoux-300" />

      {/* Contacto */}
      <section id='contacto' className="font-normal sm:text-lg scroll-mt-16">
        <div className="container px-6 py-12 mx-auto">
          <SectionTitle>CONTACTO</SectionTitle>
          <p className="mt-3 ">Si quieres contactar conmigo para hacerme una consulta sobre cualquiera de los <strong>servicios</strong> que puedo ofrecer.</p>
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <Link className='hover:scale-105 transition-transform text-center' href={'mailto:jaimefrm93@gmail.com'}>
              <span className="inline-block p-3 text-blue-bayoux-700 bg-blue-bayoux-300 rounded-full">
                <FaRegEnvelope className='w-6 h-6'></FaRegEnvelope>
              </span>
              <h3 className="mt-4 text-lg font-medium text-blue-bayoux-700 dark:text-blue-bayoux-200">Email</h3>
              <p className="mt-2 text-blue-bayoux-600 dark:text-blue-bayoux-300">jaimefrm93@gmail.com</p>
            </Link>
            <Link className='hover:scale-105 transition-transform text-center' href={'https://www.instagram.com/soyjaimefm/?hl=es'}>
              <span className="inline-block p-3 text-blue-bayoux-700 bg-blue-bayoux-300 rounded-full">
                <FaInstagram className='w-6 h-6'></FaInstagram>
              </span>
              <h3 className="mt-4 text-lg font-medium text-blue-bayoux-700 dark:text-blue-bayoux-200">Redes sociales</h3>
              <p className="mt-2 text-blue-bayoux-600 dark:text-blue-bayoux-300">@soyjaimefm</p>
            </Link>
            <Link className='hover:scale-105 transition-transform text-center' href={'tel:+34687722498'}>
              <span className="inline-block p-3 text-blue-bayoux-700 bg-blue-bayoux-300 rounded-full">
                <FaPhone className='w-6 h-6'></FaPhone>
              </span>
              <h3 className="mt-4 text-lg font-medium text-blue-bayoux-700 dark:text-blue-bayoux-200">Teléfono</h3>
              <p className="mt-2 text-blue-bayoux-600 dark:text-blue-bayoux-300">+34687722498</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}