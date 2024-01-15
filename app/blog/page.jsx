import Underline from "@/components/Underline";
import { getAllFilesMetadata } from "@/lib/mdx";
import Link from "next/link";

export default function blogPage() {
  const postsData = getAllFilesMetadata();
  return (



    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-mono font-extrabold text-darkblue dark:text-white">BLOG</h1>
        <Underline />
        <div className="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0 md:grid-cols-2 gap-x-8 gap-y-16">
          {
            postsData.map(post => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-start justify-between flex-col w-full">
                <a href={'/blog/' + post.slug}>
                  <img className="rounded-t-lg object-cover h-auto w-full aspect-video" src={post.heroImage} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                  <a href={'/blog/' + post.slug} className="inline-flex items-center justify-center px-4 py-2 mr-3 text-base font-medium text-center text-gray-100 rounded-md bg-darkblue hover:opacity-70">
                    Leer más
                  </a>
                </div>
              </article>
            ))
          }
        </div>


      </div>
    </section>





  )
}
