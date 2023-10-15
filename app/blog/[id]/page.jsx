import { getFileBySlug } from "@/lib/mdx";
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXComponents from "@/components/MDXComponents";

export default async function Post ({params}) {
    const {id} = params;
    const {content, meta} = await getFileBySlug(id);

    return (
        <>
            <MDXRemote source={content} components={MDXComponents}></MDXRemote>
        </> 
    )
}