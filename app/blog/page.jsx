import { getAllFilesMetadata } from "@/lib/mdx";
import Link from "next/link";

export default function blogPage() {
  const postsData = getAllFilesMetadata();
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">Página blog</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              postsData.map(post => (
                <div key={post.slug} className="p-4 lg:w-1/3">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <p>{post.date}</p>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{post.title}</h1>
                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <Link href={post.slug} className="text-indigo-500 inline-flex items-center">Learn Moreeeee
                      SVG SPACE
                    </Link>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        SVG SPACE 1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        SVG SPACE6
                      </span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
