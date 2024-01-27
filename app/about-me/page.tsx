import Timeline from "@/components/Timeline";
import Underline from "@/components/Underline";

export default function AboutMe() {
  return (
    <main className="">
      <section className="dark:bg-gray-800 font-normal sm:text-lg text-gray-600 dark:text-gray-300">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-4xl font-mono font-extrabold text-darkblue dark:text-gray-100">SOBRE MÍ</h1>
          <Underline />
          <p className="mt-8 mb-4">
            Inicié mi experiencia laboral a finales de 2016 en Cojali systems, una empresa de desarrollo de sistemas y accesorios para vehículos industriales. Casi por casualidad me adentré en el mundo de la programación de microcontroladores en lenguaje C.
          </p>
          <p className="mb-4">
            Dos años después recibí la oportunidad de hacer un cambio de rumbo importante en mi carrera profesional. Empecé a trabajar dentro de Airbus Helicopters en un proyecto con tecnologías web. En esta época comencé a aprender javascript, HTML y CSS. Además, el proyecto era full stack por lo que tuve la oportunidad de aprender nodejs, practicar con el ecosistema linux como entorno de desarrollo y de ejecución. Sin duda fue una experiencia muy enriquecedora donde pude adquirir muchos conocimientos propios de un desarrollador full-stack.
          </p>
          <p className="mb-4">
            Con unos conocimientos sobre programación web mucho más sólidos comencé a trabajar en Paradigma Digital. Dentro de un proyecto para una importante empresa de telecomunicaciones realizando tareas de mantenimiento, mejora y desarrollo de nuevas funcionalidades tanto para su web como para su aplicación móvil. En este punto he empezado a trabajar con React.js. A día de hoy continuo formando y mejorando en materia de testing, buenas prácticas, configuración de entornos de desarrollo, integración continua, etc.
          </p>
          <Timeline />
        </div>
      </section>
    </main>
  )
}