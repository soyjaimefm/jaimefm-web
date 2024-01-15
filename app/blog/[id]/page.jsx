import { getFileBySlug } from "@/lib/mdx";
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from "@/components/MDXComponents";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import Image from "next/image";

const rehypeOptions = {
    theme: 'one-dark-pro'
}

const mdxOptions = {
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
}


export default async function Post({ params }) {
    const { id } = params;
    const { content, meta } = await getFileBySlug(id);
    const { heroImage, title } = meta;

    return (
        <>
            <article className="prose lg:prose-xl mx-auto pt-6">

                <div class="overflow-hidden mb-8 rounded-lg">
                    {
                        heroImage && (
                            <figure class="w-auto h-auto md:h-[480px] object-cover">
                                <Image
                                    class="rounded-lg transition duration-300 ease-in-out hover:scale-110"
                                    src={heroImage}
                                    alt={title}
                                    width={960}
                                    height={480}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </figure>
                        )
                    }
                </div>

                <MDXRemote source={content} options={{ mdxOptions }} components={MDXComponents}></MDXRemote>
            </article>
        </>
    )
}