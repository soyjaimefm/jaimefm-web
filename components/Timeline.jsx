export default function Timeline() {
  return (
    <ol className="border-s border-gray-400 my-8 px-0.5">
      <li className="mb-10 ms-4">
        <div className="w-3 h-3 bg-blue-bayoux-500 rounded-full mt-1.5 -ml-6 -start-1.5"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - Hoy</time>
        <h3 className="text-xl font-semibold text-blue-bayoux-700  dark:text-gray-100">Desarrollador Frontend</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Paradigma Digital</p>
        <ul>
          <li>Desarrollo Front-end utilizando JavaScript y React.</li>
          <li>Configuración de proyectos para aplicaciones React con Vite.</li>
          <li>Implementación de test unitarios con Vitest y React Testing Library.</li>
          <li>Gestión de dependencias y monorepositorios con npm.</li>
        </ul>
      </li>
      <li className="mb-10 ms-4">
        <div className="w-3 h-3 bg-blue-bayoux-500 rounded-full mt-1.5 -ml-6 -start-1.5"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2021</time>
        <h3 className="text-xl font-semibold text-blue-bayoux-700 dark:text-white">Ingeniero de Software</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Airbus Helicopters</p>
        <ul>
          <li>Desarrollo Front-end de aplicaciones web con HTML, CSS y JavaScript.</li>
          <li>Implementación de scripts con NodeJS en el back-end.</li>
          <li>Creación de web components con funcionalidad táctil custom.</li>
          <li>Animación de elementos SVG y uso de MQTT, websocket y telnet.</li>
        </ul>
      </li>
      <li className="ms-4">
        <div className="w-3 h-3 bg-blue-bayoux-500 rounded-full mt-1.5 -ml-6 -start-1.5"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016 - 2018</time>
        <h3 className="text-xl font-semibold text-blue-bayoux-700 dark:text-white">Desarrollador de software embebido</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Cojali Systems</p>
        <ul>
          <li>Desarrollo de firmware en lenguaje C para microcontroladores.</li>
          <li>Desarrollo bajo un sistema operativo en tiempo real (SafeRTOS).</li>
          <li>Tareas de integración entre software de alto nivel y firmware.</li>
          <li>Manejo de Lauterbach osciloscopio, multímetro, etc.</li>
        </ul>
      </li>
    </ol>
  )
}