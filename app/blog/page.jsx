import { getAllFilesMetadata } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function blogPage() {
  const postsData = getAllFilesMetadata();

  return (
    <main className="">
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <PageTitle>Blog</PageTitle>
          <div className="mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 lg:max-w-none lg:mx-0 md:grid-cols-2 gap-x-8 gap-y-16">
            {
              postsData.map(post => (
                <article key={post.slug} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-start justify-between flex-col w-full">
                  <Link href={'/blog/' + post.slug}>
                    <Image width={400} height={300} className="rounded-t-lg object-cover h-auto w-full aspect-video" src={post.heroImage} alt={post.title} />
                  </Link>
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    {
                      post.tags.map((tag) => <span key={tag} className="bg-blue-bayoux-200 text-blue-bayoux-600 text-sm font-medium me-2 px-2.5 py-0.5 rounded">{tag}</span>)
                    }
                    <p className="my-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Link href={'/blog/' + post.slug} className="inline-flex items-center justify-center px-4 py-2 mr-3 text-base font-medium text-center text-gray-100 rounded-md bg-blue-bayoux-700 hover:opacity-70">
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
    </main>
  )
}