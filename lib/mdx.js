import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

const postsPath = path.join(process.cwd(), 'posts')

export const getFiles = () => fs.readdirSync(postsPath);

export const getFileBySlug = async (slug) => {
    const post = getFiles().find((post) => post.replace('.mdx', '') === slug);
    if (!post) {
        notFound();
    }

    const mdxSource = fs.readFileSync(path.join(postsPath, `${slug}.mdx`), 'utf-8');
    const { data, content } = matter(mdxSource);

    if (data.published === false) {
        notFound();
    }

    return {
        content,
        meta: {
            slug,
            ...data
        }
    }
}

export const getAllFilesMetadata = () => {
    const fileNames = getFiles();

    const allPostsData = fileNames.map((fileName) => {
        const mdxSource = fs.readFileSync(path.join(postsPath, fileName), 'utf-8');
        const { data } = matter(mdxSource);
        return {
            slug: fileName.replace('.mdx', ''),
            ...data
        }
    }).filter((post) => post.published === true);

    return allPostsData.sort((a, b) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);

        if (date1 < date2) {
            return 1;
        } else {
            return -1;
        }
    });
}