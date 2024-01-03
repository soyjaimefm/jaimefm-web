

export default function Projects() {

  const PROJECTS = [
    {
      title: 'Marisol Sánchez - Psicóloga',
      description: 'Fue mi primer proyecto como freelance. Una buena amiga me pidió ayuda para construir la web del negocio que acababa de iniciar. Nos pusimos manos a la obra y construimos una web con Wordpress como CMS y Divi como constructor de bloques.',
      link: 'https://marisolpsicologa.com/',
      image: '/marisol-psicologa.png',
    },
    {}
  ];

  return (
    
    
    PROJECTS.map((project) => {
        return(
          <article key={project.title}>
            <h3>project.title</h3>
            <p>project.description</p>
            <ul>
  
            </ul>
            <img src={project.image} />
          </article>

        )
      }

      


      )
    

  )


}