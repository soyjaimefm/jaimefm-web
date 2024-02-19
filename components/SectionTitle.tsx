import Underline from "./Underline"

export default function SectionTitle({children}) {
  return (
    <>
      <h2 className="text-5xl font-subTitle text-blue-bayoux-700 dark:text-blue-bayoux-200">{children}</h2>
      <Underline />
    </>
  )
}