export default function Timeline() {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - Hoy</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Desarrollador Frontend</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Paradigma Digital</p>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2019 - 2021</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ingeniero de Software</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Airbus Helicopters</p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016 - 2018</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Desarrollador de software embebido</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Cojali Systems</p>
      </li>
    </ol>
  )
}