import FMh2 from "@/components/ui/FMh2";
import Image from "next/image";
import SectionContainer from "../SectionContainer";
import Web from '@/components/icons/Web';
import Tools from '@/components/icons/Tools';
import Brush from '@/components/icons/Brush';
import Consulting from '@/components/icons/Consulting';
import Search from '@/components/icons/Search';
import SmartPhone from '@/components/icons/SmartPhone';
import Shop from '@/components/icons/Shop';
import School from '@/components/icons/School';


export default function ServicesSection() {
  return (
    <SectionContainer>
      <FMh2>SERVICIOS</FMh2>
      <div className="lg:flex lg:items-start">
        <div className="w-full space-y-12 lg:w-2/3 lg:pr-6">
          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <Web />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Desarrollo web.</h3>
              <p className="mt-3">
                Desde la idea inicial hasta el despliegue, te ofrezco un servicio de desarrollo full-stack para crear sitios web optimizados y funcionales.
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <Brush />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Diseño UX/UI.</h3>
              <p className="mt-3">
                Trabajo junto a diseñadores y expertos en UX para lograr diseños intuitivos y atractivos, enfocados en la experiencia del usuario para mejorar la usabilidad y conversión.
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <Search />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Optimización SEO.</h3>
              <p className="mt-3">
                Me encargo de optimizar tu sitio para motores de búsqueda, mejorando su visibilidad y asegurando tráfico orgánico.
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <SmartPhone />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Desarrollo de Aplicaciones.</h3>
              <p className="mt-3">
                Aplicaciones web interactivas que combinan un rendimiento eficiente con una experiencia de usuario fluida.
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <Shop />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Tiendas Online.</h3>
              <p className="mt-3">
                Desarrollo de tiendas virtuales completamente funcionales, con integración de pasarelas de pago y una experiencia de compra optimizada.
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <School />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Academias Online.</h3>
              <p className="mt-3">
                Plataformas educativas a medida con gestión de cursos, usuarios y contenidos para ofrecer una experiencia de aprendizaje efectiva y atractiva.
              </p>
            </div>
          </div>

          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <Consulting />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Consultoría técnica</h3>
              <p className="mt-3">
                Si necesitas <strong>ayuda</strong> o <strong>asesoramiento</strong> con tu proyecto o incluso <strong>formación</strong> sobre conceptos técnicos o <strong>programación</strong> podemos agendar una videollamada donde resolveré encantado todas tus dudas.
              </p>
            </div>
          </div>

          {/* <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <Web />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Desarrollo de software</h3>
              <p className="mt-3">
                Puedo participar en proyectos desarrollando software en distintos lenguajes. Creo aplicaciones web utilizando herramientas modernas y actualizadas. Siempre aplicando <strong>buenas prácticas</strong> para conseguir un <strong>producto óptimo y de calidad</strong>. También puedo participar en las etapas iniciales de un nuevo producto aportando mi <strong>punto de vista técnico</strong> en la definición de requisitos y la toma de decisiones de negocio.
              </p>
            </div>
          </div> */}


          {/* <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-FMblue bg-FMsoftBlue rounded-md md:mx-4">
              <Tools />
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h3 className="text-xl font-semibold">Creación de páginas web a medida</h3>
              <p className="mt-3">
                Puedo convertir ideas y diseños en una web completa y funcional. Trabajo con un enfoque mobile first para asegurar que la página sea usable en cualquier dispositivo. Puedo <strong>adaptarme</strong> a las <strong>necesidades del negocio</strong> para añadir las funcionalidades necesarias (CMS, newsletter, formulario de contacto, <strong>e-commerce</strong>, etc.)
              </p>
            </div>
          </div> */}


          


        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-6 lg:w-1/3 px-6">
          <Image width={750} height={960} className="object-cover rounded-xl" src="/laptop.avif" alt="laptop" />
          <Image width={750} height={960} className="object-cover rounded-xl" src="/telework.jpeg" alt="telework" />
        </div>
      </div>
    </SectionContainer>

  )
}
