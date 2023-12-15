import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaJs, FaHtml5, FaRegEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-full">
      <section className="text-gray-600 bg-softblue font-mono">
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
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className=''>
              <FaJs className='text-darkblue w-8 h-8'></FaJs>
              <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">JavaScript</h2>
            </div>

            <div>
              <div className='w-8 h-8 relative rounded-sm'>
                <Image src={'/javascript-logo.png'} layout='fill' objectFit='cover' alt='JavaScript logo' />
              </div>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Fully Responsive Components</h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>

            <div>

              <FaReact className='text-darkblue w-8 h-8'></FaReact>
              <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">RTL Languages Support</h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <FaHtml5 className='text-darkblue w-8 h-8'></FaHtml5>
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">HTML</h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h2 className="font-mono font-semibold text-2xl text-darkblue lg:text-3xl dark:text-white">Tecnologías que utilizo</h2>
          <p>En cuanto a lenguajes de programación, tecnologías o herramientas, mi opinión es que la clave está en encontrar la más adecuada para cada proyecto. Durante mi experiencia, he tenido la oportunidad de aprender y utilizar las siguientes:</p>
          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">


            <div className="lg:flex lg:w-1/2 lg:justify-center">
              <Image className='rounded' src='/setup-desk.jpeg' width={300} height={100} alt='programmer desk' />
            </div>
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <div className='w-8 h-8 relative rounded-sm'>
                  <Image src={'/javascript-logo.png'} layout='fill' objectFit='cover' alt='JavaScript logo' />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">JavaScript</h3>
              </div>

              <div className="space-y-3">
                <div className='w-8 h-8 relative rounded-sm'>
                  <Image src={'/nodejs-logo.png'} layout='fill' objectFit='cover' alt='NodeJS logo' />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Node.js</h3>
              </div>

              <div className="space-y-3">
                <div className='w-8 h-8 relative rounded-sm'>
                  <Image src={'/javascript-logo.png'} layout='fill' objectFit='cover' alt='JavaScript logo' />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">JavaScript</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Empecé a trabajar con este lenguaje hace ya 4 años y nunca paro de aprender cosas nuevas.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>



              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum evenietdsafdsasdlfjlñaksdjflkñasjdlkfjasklñdf aslñfjsdlkajfsdlñkjfalñ sdjf lajsdflña sdlñf jasdl j
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Mi trabajo */}
      <section className="bg-darkblue">
        <div className="container px-6 py-12 mx-auto">
          <h2 className="mt-2 text-2xl font-semibold  md:text-3xl text-gray-200">Mi trabajo</h2>
          <p className="mt-3 text-gray-300">Si quieres contactar conmigo para hacerme una consulta sobre cualquiera de los servicios que puedo ofrecer.</p>


        </div>


      </section>




      {/* Contacto */}
      <section className="bg-softblue">
        <div className="container px-6 py-12 mx-auto">
          <div>
            {/* <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p> */}
            <h2 className="mt-2 text-2xl font-semibold  md:text-3xl text-darkblue">Contacta conmigo</h2>
            <p className="mt-3 text-gray-600">Si quieres contactar conmigo para hacerme una consulta sobre cualquiera de los servicios que puedo ofrecer.</p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <Link href={'mailto:jaimefrm93@gmail.com'}>
              <span className="inline-block p-3 text-darkblue rounded-full bg-gray-100">
                <FaRegEnvelope className='w-6 h-6'></FaRegEnvelope>
              </span>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Email</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Estaré encantado de ayudarte.</p>
              <p className="mt-2 text-cyan-700">jaimefrm93@gmail.com</p>
            </Link>
            <Link href={'https://www.instagram.com/soyjaimefm/?hl=es'}>
              <span className="inline-block p-3 text-darkblue rounded-full bg-gray-100">
                <FaInstagram className='w-6 h-6'></FaInstagram>
              </span>
              <h3 className="mt-4 text-lg font-medium text-gray-700">Redes sociales</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Escribe un mensaje directo.</p>
              <p className="mt-2 text-cyan-700">@soyjaimefm</p>
            </Link>
            <Link href={'tel:+34687722498'}>
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
