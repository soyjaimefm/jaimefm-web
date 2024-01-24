import Timeline from "@/components/Timeline";
import Underline from "@/components/Underline";

export default function AboutMe() {
  return (
    <main className="">
      <section className="dark:bg-gray-900 font-normal sm:text-lg">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-mono font-extrabold text-darkblue dark:text-white">SOBRE MÍ</h1>
        <Underline />
        <Timeline />
      </div>
      </section>
    </main>
  )
}