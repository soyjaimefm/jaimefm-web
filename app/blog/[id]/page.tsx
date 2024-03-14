import { getFileBySlug, getAllFilesMetadata } from "@/lib/mdx";
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from "@/components/MDXComponents";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

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

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const { id } = params;
    const { meta } = await getFileBySlug(id);

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.tags,
        openGraph: {
            title: meta.title,
            description: meta.description
        },
    }
}


export default async function Post({ params }: Props) {
    const { id } = params;
    const { content, meta } = await getFileBySlug(id);
    const { heroImage, title } = meta;

    return (
        <>
            <article className="prose dark:prose-invert lg:prose-xl mx-auto px-4 py-12">
                <div className="overflow-hidden mb-2">
                    {
                        heroImage && (
                            <figure className="max-w-xl w-auto h-auto object-cover mx-auto">
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