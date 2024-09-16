import Feature from "../Feature";
import Stars from "../icons/Stars";
import Custom from "../icons/Custom";
import Client from "../icons/Client";
import Time from "../icons/Time";
import SectionContainer from "../SectionContainer";
import FMh2 from "../ui/FMh2";

export default function Features() {
  return (
    <SectionContainer>
      <FMh2>¿POR QUÉ ELEGIRME?</FMh2>
      <p>Estos son los valores que guían mi trabajo para asegurar resultados que superen tus expectativas.</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-4">
        <Feature title={'Desarrollo de calidad'} description={'Utilizo las mejores prácticas del sector para garantizar que tu sitio o aplicación sea rápida, segura y escalable.'} icon={<Stars />} />
        <Feature title={'Soluciones Personalizadas'} description={'Cada proyecto es único. Diseño soluciones a medida para cubrir las necesidades específicas de tu negocio.'} icon={<Custom />} />
        <Feature title={'Atención al Cliente'} description={'Estoy comprometido con ofrecer una comunicación clara y un soporte constante durante todo el proceso.'} icon={<Client />} />
        <Feature title={'Entrega a Tiempo'} description={'Cumplo los plazos establecidos sin comprometer la calidad, para que puedas lanzar tu proyecto cuando lo necesites.'} icon={<Time />} />
      </div>
    </SectionContainer>
  )
}
