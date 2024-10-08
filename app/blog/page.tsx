import { getAllFilesMetadata } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog'
}

export default function blogPage() {
  const postsData = getAllFilesMetadata();

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <PageTitle>BLOG</PageTitle>
        <div className="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0 md:grid-cols-2 gap-x-8 gap-y-16">
          {
            postsData.map(post => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-start justify-between flex-col w-full">
                <Link href={'/blog/' + post.slug}>
                  <Image width={640} height={430} className="rounded-t-lg object-cover aspect-video" src={post.heroImage} alt={post.title} />
                </Link>
                <div className="px-5 py-2">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                </div>
                <div className="px-5 pb-5 pt-2">
                  {
                    post.tags.map((tag) => <span key={tag} className="bg-blue-bayoux-200 text-FMblue text-sm font-medium me-2 px-2.5 py-0.5 rounded">{tag}</span>)
                  }
                  <p className="my-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-300">{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <Link href={'/blog/' + post.slug} className="inline-flex items-center justify-center px-4 py-2 mr-3 text-base font-medium text-center text-gray-100 rounded-md bg-FMblue hover:opacity-70">
                        Leer más
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}