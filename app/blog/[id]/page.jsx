import { getFileBySlug, getAllFilesMetadata } from "@/lib/mdx";
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

export async function generateStaticParams() {
    const postsData = getAllFilesMetadata();
    return postsData.map((post) => ({
        id: post.slug,
    }));
}

export default async function Post({ params }) {
    const { id } = params;
    const { content, meta } = await getFileBySlug(id);
    const { heroImage, title } = meta;

    return (
        <>
            <article className="prose dark:prose-invert lg:prose-xl mx-auto px-4 py-12">
                <div className="overflow-hidden mb-8 rounded-lg">
                    {
                        heroImage && (
                            <figure className="w-auto h-auto md:h-[480px] object-cover">
                                <Image
                                    className="rounded-lg"
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