import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaJs, FaHtml5, FaRegEnvelope, FaInstagram, FaPhone, FaTwitter, FaYoutube, FaGithub, FaCss3, FaCode, FaGlobe, FaHandshake, FaNpm, FaGit, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";

import Projects from '@/components/Projects';
import Socials from '@/components/Socials';
import Underline from '@/components/Underline';

export default function Home() {
  return (
    <main className="min-h-full">
      {/* Hero section */}
      <section className="dark:bg-gray-900 font-normal sm:text-lg">
        <div className="container grid px-6 py-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 md:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-8">
            <h2 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-darkblue dark:text-white">👋🏻 Jaime <span className='text-orange'>FM.</span></h2>
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold leading-none md:text-3xl xl:text-4xl text-darkblue opacity-85 dark:text-white">Desarrollador de software.</h1>
            <p className="max-w-2xl mb-4 text-gray-600 dark:text-gray-300">Trabajo como <strong>desarrollador Frontend</strong> en Paradigma Digital.</p>
            <p className="max-w-2xl mb-6 text-gray-600 lg:mb-8 dark:text-gray-300">Me encanta la programación, especialmente el <strong>desarrollo web</strong>, la electrónica y la tecnología. Por eso disfruto investigando, aprendiendo y creando contenido para redes sociales.</p>
            <a href="#contacto" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-100 rounded-md bg-darkblue hover:opacity-70">
              Contacta&nbsp;<span className='hidden md:inline'> conmigo</span>
            </a>
            <a href="/about-me" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Conóceme&nbsp;<span className='hidden lg:inline'>un poco mejor</span>
            </a>
          </div>
          <div className="hidden lg:mt-0 md:col-span-4 md:flex">
            <img className='rounded-md object-cover' src="/jaime-byn.jpeg" alt="Jaime Fernández Moreno" />
          </div>
        </div>
        <div className='container mx-auto flex justify-center'>
          <span className='px-4 py-4 mb-4'>
            <Socials className='text-darkblue' />
          </span>
        </div>
      </section>

      {/* <hr className="my-12 border-gray-200 dark:border-gray-700" /> */}

      {/* Mi trabajo */}
      <section className="bg-softblue dark:bg-gray-900 text-gray-600 font-normal sm:text-lg dark:text-gray-400">
        <div className="container px-6 py-10 mx-auto">
          <h2 className="text-4xl font-mono font-extrabold text-darkblue dark:text-white">MI TRABAJO</h2>
          <Underline />
          <p className="mt-3">Aquí tienes una pequeña muestra de proyectos que he realizado.</p>
          <div className="divide-y">
            <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
              <div className="">
                <h3 className="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Marisol Sánchez Psicóloga</h3>
                <p className="mb-4">Clínica de Psicología ubicada en Hellín (Albacete). La web está construida sobre <strong>Wordpress</strong> utilizando <strong>Divi</strong> como constructor.</p>
                <p>Cuenta con blog, material descargable, páginas informativas y formularios de contacto y suscripción.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <img className="w-full rounded-lg col-span-2" src="/marisol-psicologa.png" alt="web Marisol Psicóloga" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/marisol-psicologa-mobile.png" alt="web Marisol Psicóloga móvil" />
              </div>
            </div>
            <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
              <div className="grid grid-cols-3 gap-4 mt-8">
                <img className="w-full rounded-lg col-span-2" src="/lapicara-web.png" alt="web La Pícara" />
                {/* <img className="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/marisol-psicologa-mobile.png" alt="web Marisol Psicóloga móvil" /> */}
              </div>
              <div className="font-light sm:text-lg dark:text-gray-400">
                <h3 className="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">La Pícara producciones</h3>
                <p className="mb-4">Productora audiovisual.</p>
                <p>En este caso partía de un diseño en figma. Fue todo un reto a nivel de <strong>CSS</strong> replicar toda esa estética y además poder un Wordpress para gestionar el contenido.</p>
              </div>
            </div>
            <div className="gap-16 items-center py-6 lg:grid lg:grid-cols-2">
              <div className="font-light sm:text-lg dark:text-gray-400">
                <h3 className="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Adventures in class</h3>
                <p className="mb-4">Para este proyecto utilicé tecnologías similares a los anteriores proyectos. Pero además añadí un e-commerce.</p>
                <p>Por otro lado en este proyecto tenemos también muchos estilos personalizados mediante código CSS para cumplir con un diseño más custom.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <img className="w-full rounded-lg col-span-2" src="/adventures-in-class-web.png" alt="web Adventures in className" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/adventures-in-class-web-mobile.png" alt="web Adventures in className móvil" />
              </div>
            </div>
          </div>

          <hr className="my-12 border-gray-200 dark:border-gray-700" />

          <div>
            <p className='font-semibold text-center'>Estas son las tecnologías con las que suelo trabajar:</p>
            <div className='mt-8 flex flex-wrap justify-center items-center gap-4'>
              <p>Frontend: </p>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaJs className='size-6' />JavaScript</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaHtml5 className='size-6' />HTML</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaCss3 className='size-6' />CSS</span>
              
            </div>
            <div className='mt-8 flex flex-wrap justify-center items-center gap-4'>
              <p>Frameworks: </p>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaReact className='size-6' />React</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><TbBrandNextjs className='size-6' />Next.js</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><SiTailwindcss className='size-6' />Tailwind CSS</span>
            </div>

            <div className='mt-8 flex flex-wrap justify-center items-center gap-4'>
              <p>Tools: </p>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><SiVite className='size-6' />Vite</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaNpm className='size-6' />npm</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaGit className='size-6' />git</span>
            </div>
            <div className='mt-8 flex flex-wrap justify-center items-center gap-4'>
              <p>Backend y lenguajes: </p>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaNodeJs className='size-6' />Node.js</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><TbBrandCpp className='size-6' />C/C++</span>
              <span className="bg-gray-100 text-gray-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded flex items-center gap-2"><FaPython className='size-6' />Python</span>
            </div>
            <p className='mt-8 text-center'>Lo más importante es encontrar la adecuada a cada proyecto.</p>
            
          </div>

        </div>
      </section>



      {/* Servicios */}
      <section className="bg-white dark:bg-gray-900 text-gray-600 font-normal sm:text-lg dark:text-gray-400">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 lg:pr-6">
              <div>
                <h2 className="text-4xl font-mono font-extrabold text-darkblue dark:text-white">SERVICIOS</h2>
                <Underline />
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-darkblue bg-softblue rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <FaCode className='size-6' />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Desarrollo de software</h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Puedo participar en proyectos desarrollando software en distintos lenguajes. Creo aplicaciones web utilizando herramientas modernas y actualizadas. Siempre aplicando <strong>buenas prácticas</strong> para conseguir un <strong>producto óptimo y de calidad</strong>. También puedo participar en las etapas iniciales de un nuevo producto aportando mi <strong>punto de vista técnico</strong> en la definición de requisitos y la toma de decisiones de negocio.
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-darkblue bg-softblue rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <FaGlobe className='size-6' />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Creación de páginas web a medida</h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Puedo convertir ideas y diseños en una web completa y funcional. Trabajo con un enfoque mobile first para asegurar que la página sea usable en cualquier dispositivo. Puedo <strong>adaptarme</strong> a las <strong>necesidades del negocio</strong> para añadir las funcionalidades necesarias (CMS, newsletter, formulario de contacto, <strong>e-commerce</strong>, etc.)
                  </p>
                </div>
              </div>
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-darkblue bg-softblue rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <FaHandshake className='size-6' />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Consultoría técnica</h3>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    Si necesitas <strong>ayuda</strong> o <strong>asesoramiento</strong> con tu proyecto o incluso <strong>formación</strong> sobre conceptos técnicos o <strong>programación</strong> podemos agendar una videollamada donde resolveré encantado todas tus dudas.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center px-6">
              <img className="size-[40rem] object-cover rounded-xl" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id='contacto' className="bg-softblue font-normal">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <h2 className="text-4xl font-mono font-extrabold text-darkblue dark:text-white">CONTACTO</h2>
            <Underline />
            <p className="mt-3 text-gray-500">Si quieres contactar conmigo para hacerme una consulta sobre cualquiera de los <strong>servicios</strong> que puedo ofrecer.</p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <Link className='hover:scale-105 transition-transform' href={'mailto:jaimefrm93@gmail.com'}>
              <span className="inline-block p-3 text-darkblue rounded-full bg-gray-100">
                <FaRegEnvelope className='w-6 h-6'></FaRegEnvelope>
              </span>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Email</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Estaré encantado de ayudarte.</p>
              <p className="mt-2 text-cyan-700">jaimefrm93@gmail.com</p>
            </Link>
            <Link className='hover:scale-105 transition-transform' href={'https://www.instagram.com/soyjaimefm/?hl=es'}>
              <span className="inline-block p-3 text-darkblue rounded-full bg-gray-100">
                <FaInstagram className='w-6 h-6'></FaInstagram>
              </span>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Redes sociales</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Escribe un mensaje directo.</p>
              <p className="mt-2 text-cyan-700">@soyjaimefm</p>
            </Link>
            <Link className='hover:scale-105 transition-transform' href={'tel:+34687722498'}>
              <span className="inline-block p-3 text-darkblue rounded-full bg-gray-100">
                <FaPhone className='w-6 h-6'></FaPhone>
              </span>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Teléfono</h3>
              <p className="mt-2 text-gray-500">Puedes llamarme o escribir por Whatsapp.</p>
              <p className="mt-2 text-cyan-700">+34687722498</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}