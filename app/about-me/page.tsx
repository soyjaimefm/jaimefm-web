import PageTitle from "@/components/ui/PageTitle";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FMh2 from "@/components/ui/FMh2";

export const metadata: Metadata = {
  title: 'Sobre mí - Jaime FM'
}

export default function AboutMe() {
  return (
    <section className="font-normal sm:text-lg">
      <div className="container px-6 py-10 mx-auto">
        <PageTitle>JAIME FERNÁNDEZ MORENO</PageTitle>
        <div className="md:flex gap-12">
          <div className="md:w-1/3">
            <Image alt="Jaime Fernández Moreno" className="rounded-md" width={600} height={800} src={'/jaimefm-3.jpeg'}></Image>
          </div>
          <div className="mt-8 md:mt-0 md:w-2/3">
            <p className="mb-4">
              Aquí te cuento un breve resumen de mi trayectoria profesional.
            </p>
            <h2 className="font-subTitle text-3xl my-6">Inicios en el software embebido</h2>
            <p className="mb-4">
              Inicié mi experiencia laboral a finales de 2016 en Cojali systems, una empresa de desarrollo de sistemas y accesorios para vehículos industriales. Casi por casualidad me adentré en el mundo de la programación de microcontroladores en lenguaje C.
            </p>
            <h2 className="font-subTitle text-3xl my-6">Cambio al desarrollo web</h2>
            <p className="mb-4">
              Dos años después recibí la oportunidad de hacer un cambio de rumbo importante en mi carrera profesional. Empecé a trabajar dentro de Airbus Helicopters en un proyecto con tecnologías web. En esta época comencé a aprender javascript, HTML y CSS. Además, el proyecto era full stack por lo que tuve la oportunidad de aprender nodejs, practicar con el ecosistema linux como entorno de desarrollo y de ejecución. Sin duda fue una experiencia muy enriquecedora donde pude adquirir muchos conocimientos propios de un desarrollador full-stack.
            </p>
            <p className="mb-4">
              Con unos conocimientos sobre programación web mucho más sólidos comencé a trabajar en Paradigma Digital. Dentro de un proyecto para una importante empresa de telecomunicaciones realizando tareas de mantenimiento, mejora y desarrollo de nuevas funcionalidades tanto para su web como para su aplicación móvil. En este punto he empezado a trabajar con React.js. A día de hoy continuo formándome y mejorando en materia de testing, buenas prácticas, configuración de entornos de desarrollo, integración continua, etc.
            </p>
            <h2 className="font-subTitle text-3xl my-6">Trabajando como freelance actualmente</h2>
            <p className="mb-4">
              Hace unos años empecé a trabajar como freelance para algunos clientes. He realizado distintos proyectos en los que he ayudado a negocios a crear y administrar sus propios productos digitales en forma de webs, tiendas online, academias, landing pages, etc.
            </p>
            <div className="text-center mt-8">
              <Link target="_blank" href="/Jaime Fernández Moreno.pdf" className="inline-flex items-center justify-center px-5 py-3 font-medium text-center rounded-md text-FMwhite bg-FMorange hover:opacity-70">
                Descargar CV
              </Link>
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    </section>
  )
}