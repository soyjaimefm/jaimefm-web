import Image from 'next/image';
import { FaReact, FaJs } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-full">
      <section className="text-gray-600 bg-softblue font-mono">
        <header className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="sm:text-4xl text-3xl mb-4 font-bold text-darkblue">JAIME <span className='text-orange'>FM</span></h2>
            <h1 className="text-1xl mb-4 font-bold text-gray-600">TECNOLOGÍA · ELECTRÓNICA · PROGRAMACIÓN</h1>
            <p className="mb-8 leading-relaxed">Ingeniero electrónico trabajando como desarrollador web en <span className='text-orange'>Paradigma Digital.</span><br /> Me encanta aprender, investigar y comunicar sobre tecnología y programación.</p>
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

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className=''>
              <FaJs className='text-darkblue w-8 h-8'></FaJs>
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">JavaScript</h1>
            </div>

            <div>
              <div className='w-8 h-8 relative rounded-sm'>
                <Image src={'/javascript-logo.png'} layout='fill' objectFit='cover' alt='JavaScript logo' />
              </div>

              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Fully Responsive Components</h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>

            <div>
              <div className='w-20 h-20 relative rounded-sm'>
                <FaReact></FaReact>
              </div>
              <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">RTL Languages Support</h1>

              <p class="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h2 class="font-mono font-semibold text-2xl text-darkblue lg:text-3xl dark:text-white">Tecnologías con las que trabajo</h2>
          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">

            <div class="lg:flex lg:w-1/2 lg:justify-center">
              <Image className='rounded' src='/setup-desk.jpeg' width={300} height={100} alt='programmer desk' />
            </div>
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div class="space-y-3">
                <div className='w-8 h-8 relative rounded-sm'>
                  <Image src={'/javascript-logo.png'} layout='fill' objectFit='cover' alt='JavaScript logo' />
                </div>
                <h3 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">JavaScript</h3>
              </div>

              <div class="space-y-3">
                <div className='w-8 h-8 relative rounded-sm'>
                  <Image src={'/nodejs-logo.png'} layout='fill' objectFit='cover' alt='NodeJS logo' />
                </div>
                <h3 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Node.js</h3>
              </div>

              <div class="space-y-3">
                <div className='w-8 h-8 relative rounded-sm'>
                  <Image src={'/javascript-logo.png'} layout='fill' objectFit='cover' alt='JavaScript logo' />
                </div>
                <h3 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">JavaScript</h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Empecé a trabajar con este lenguaje hace ya 4 años y nunca paro de aprender cosas nuevas.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                <p class="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum evenietdsafdsasdlfjlñaksdjflkñasjdlkfjasklñdf aslñfjsdlkajfsdlñkjfalñ sdjf lajsdflña sdlñf jasdl j
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>
    </main>
  )
}
