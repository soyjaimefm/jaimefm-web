import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaJs, FaHtml5, FaRegEnvelope, FaInstagram, FaPhone, FaCss3 } from 'react-icons/fa';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-full">
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">¡Hola! 👋🏻 Soy Jaime FM.</h2>
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Desarrollador de software.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">Estoy especializado en desarrollo web y mi objetivo principal es crear productos digitales adaptados al cliente y al usuario final, poniendo mucha atención en la calidad y simplicidad tanto del diseño como de la solución técnica adoptada.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-100 rounded-md bg-darkblue hover:opacity-70">
              Contacta&nbsp;<span className='hidden md:inline'> conmigo</span>
            </a>
            <a href="/about-me" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Conóceme&nbsp;<span className='hidden lg:inline'>un poco mejor</span>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className='rounded-md' src="/jaime-byn.jpeg" alt="Jaime Fernández Moreno" />
          </div>
        </div>
      </section>
      {/* OLD HERO SECTION <section className="text-gray-600 bg-softblue font-mono">
        <header className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="sm:text-4xl text-3xl mb-4 font-bold text-darkblue">JAIME <span className='text-orange'>FM</span></h2>
            <h1 className="text-1xl mb-4 font-bold text-gray-600">TECNOLOGÍA · ELECTRÓNICA · PROGRAMACIÓN</h1>
            <p className="mb-8 leading-relaxed">Desarrollador de software especializado en desarrollo web.<br /> Me encanta aprender, investigar y comunicar sobre tecnología y programación.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-darkblue border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contacto</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Más sobre mí</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="Jaime FM" src="/jaime-byn.jpeg" />
          </div>
        </header>
      </section> */}

      {/* <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <h2 className="max-w-2xl mb-4 font-bold text-2xl md:text-3xl xl:text-4xl dark:text-white">Tecnologías que utilizo.</h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className='flex items-center'>
              <FaJs className='size-8 text-yellow-300' />
              <h1 class="ml-2 text-xl font-semibold text-gray-800 dark:text-white">JavaScript</h1>
              <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>
            <div>
              <FaHtml5 className='size-8 text-orange' />
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">HTML</h1>
            </div>
            <div>
              <FaCss3 className='size-8 text-blue-600' />
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">CSS</h1>
            </div>
          </div>
        </div>
      </section> */}



      {/* Mi trabajo */}

      <section class="bg-white dark:bg-gray-900">
        {/* <div class="gap-16 item-center pt-2 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-4 lg:px-3"></div>s */}
        <div className="container px-12 py-12 mx-auto">
          <h2 class="text-4xl font-extrabold text-darkblue dark:text-white">Mi trabajo</h2>
          <p className="mt-3 text-gray-600">Aquí tienes una pequeña muestra de proyectos que he realizado.</p>

          <div className="divide-y">
            <div class="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
              <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h3 class="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Marisol Sánchez Psicóloga</h3>
                <p class="mb-4">Una web para una clínica de psicología construida sobre Wordpress como CMS utilizando divi como constructor.</p>
                <p>Cuenta con formulario de contacto, blog, páginas informativas y un formulario para suscribirse a newsletter.</p>
              </div>
              <div class="grid grid-cols-3 gap-4 mt-8">
                <img class="w-full rounded-lg col-span-2" src="/marisol-psicologa.png" alt="web Marisol Psicóloga" />
                <img class="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/marisol-psicologa-mobile.png" alt="web Marisol Psicóloga móvil" />
              </div>
            </div>

            <div class="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
              <div class="grid grid-cols-3 gap-4 mt-8">
                <img class="w-full rounded-lg col-span-2" src="/lapicara-web.png" alt="web La Pícara" />
                {/* <img class="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/marisol-psicologa-mobile.png" alt="web Marisol Psicóloga móvil" /> */}
              </div>

              <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h3 class="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">La Pícara producciones</h3>
                <p class="mb-4">Esta es otra web desarrollada con Wordpress y Divi con un diseño one page.</p>
                <p>En este caso, la implementación de los estilos fue todo un reto ya que partíamos de un diseño hecho con Figma por una diseñadora.</p>
              </div>
            </div>


            <div class="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
              <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h3 class="my-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Adventures in class</h3>
                <p class="mb-4">Para este proyecto utilicé tecnologías similares a los anteriores proyectos. Pero además añadí un e-commerce.</p>
                <p>Por otro lado en este proyecto tenemos también muchos estilos personalizados mediante código CSS para cumplir con un diseño más custom.</p>
              </div>
              <div class="grid grid-cols-3 gap-4 mt-8">
                <img class="w-full rounded-lg col-span-2" src="/adventures-in-class-web.png" alt="web Adventures in class" />
                <img class="mt-4 w-full lg:mt-10 rounded-lg col-span-1" src="/adventures-in-class-web-mobile.png" alt="web Adventures in class móvil" />
              </div>
            </div>


          </div>


        </div>
      </section>





      {/* Contacto */}
      <section className="bg-softblue">
        <div className="container px-12 py-12 mx-auto">
          <div>
            {/* <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p> */}
            <h2 className="text-4xl font-extrabold text-darkblue dark:text-white">Contacta conmigo</h2>
            <p className="mt-3 text-gray-600">Si quieres contactar conmigo para hacerme una consulta sobre cualquiera de los servicios que puedo ofrecer.</p>
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
