import { getAllFilesMetadata } from "@/lib/mdx";
import Link from "next/link";

export default function blogPage() {
    const postsData = getAllFilesMetadata();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Página blog</h1>
            {
                postsData.map(post => (
                    <Link key={post.slug} href={'/blog/' + post.slug}>
                        <h2>{post.title}</h2>
                        <p>{post.date}</p>
                    </Link>
                ))
            }
        </div>
    )
}
