import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsPath = path.join(process.cwd(),'posts')

export const getFiles = () => fs.readdirSync(postsPath);

export const getFileBySlug = async ( slug ) => {
    const mdxSource = fs.readFileSync(path.join(postsPath, `${slug}.mdx`), 'utf-8');
    const { data, content } = matter(mdxSource);

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
    } );

    return allPostsData.sort((a,b) => {
        if(a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}