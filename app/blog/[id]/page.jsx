import { getFileBySlug } from "@/lib/mdx";
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from "@/components/MDXComponents";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const rehypeOptions = {
    theme: 'one-dark-pro'
}

const mdxOptions = {
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
}


export default async function Post({ params }) {
    const { id } = params;
    const { content } = await getFileBySlug(id);

    return (
        <>
            <article className="prose lg:prose-xl mx-auto pt-6">
                <MDXRemote source={content} options={{ mdxOptions }} components={MDXComponents}></MDXRemote>
            </article>
        </>
    )
}