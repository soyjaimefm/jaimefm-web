import { Podcast } from '@/components/Podcast'
import Image from 'next/image'
// import jaimefmimg from '/jaimefm-1.img'

export default function Home() {
  return (
    <main className="min-h-full">



      {/* <Podcast episode={'2PEkJYqPF5LslPhheXsDGj'} /> */}


      {/* <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div> */}

<section className="text-gray-600 body-font bg-softblue">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">JAIME FM
        <br className="hidden lg:inline-block" />
      </h2>
      <h1 className="title-font text-1xl mb-4 font-bold text-gray-900">TECNOLOGÍA · ELECTRÓNICA · PROGRAMACIÓN</h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="Jaime FM" src="/jaime-byn.jpeg" />
    </div>
  </div>
</section>






      <div className="bg-gray-100">
        <header className="px-32 py-20 flex justify-around gap-8 bg-softblue">
          <div className='flex flex-col justify-around'>
            <h1 className='font-bold font-mono text-darkblue text-7xl text-center'>
              JAIME <span className='text-orange'>FM</span>
            </h1>
            <p className='text-noblack opacity-70 text-center text-lg'>Desarrollador de software</p>
            <p className="font-mono text-3xl opacity-70 text-noblack">
                Ingeniero electrónico trabajando como desarrollador web en <span className='text-orange'>Paradigma Digital.</span><br/> Me encanta aprender, investigar y comunicar sobre tecnología y programación.
            </p>

          </div>
          <div className="">
            <Image className='mx-auto rounded-md' src={'/jaimefm-1.jpeg'} alt='Jaime Fernández' width={600} height={1}></Image>
          </div>
        </header>

        {/* Secciones */}
        <div className="container mx-auto py-8">
          {/* Primera sección */}
          <div className="flex">
            <div className="w-1/2 p-4">
              <p>hola hola hola hola hola hola</p>
            </div>
            <div className="w-1/2 p-4">
              {/* <Image className='mx-auto rounded-md' src={'/jaimefm-1.jpeg'} width={300} height={1}></Image> */}
            </div>
          </div>

          {/* Segunda sección */}
          <div className="flex">
            <div className="w-1/2 p-4">
              {/* <Image className='mx-auto rounded-md' src={'/jaimefm-1.jpeg'} width={300} height={1}></Image> */}
            </div>
            <div className="w-1/2 p-4 items-center">
              <ul>
                <li>uno</li>
                <li>uno</li>
                <li>uno</li>
                <li>uno</li>
                <li>uno</li>
              </ul>
            </div>
          </div>

          {/* Agrega más secciones según sea necesario */}
        </div>
      </div>







    </main>
  )
}
