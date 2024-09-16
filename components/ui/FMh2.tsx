import Underline from "./Underline"

export default function FMh2({children}) {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-medium font-subTitle text-FMblue dark:text-FMsoftBlue">{children}</h2>
      <Underline />
    </>
  )
}