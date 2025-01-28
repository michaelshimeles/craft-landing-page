import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Section, Container } from "@/components/craft";  // Layout components
import { Card, CardContent } from "@/components/ui/card";

// Function to read blog posts from Markdown files
async function getPosts() {
  const files = fs.readdirSync(path.join('content/blog'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('content/blog', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.replace('.md', ''),
    };
  });

  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Section>
      <Container>
        <h2 className="text-4xl font-bold mb-6 text-center">Our Blog</h2>
        
        <div className="flex flex-col items-center gap-8"> {/* Changed to flex-col for vertical alignment */}
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow w-full max-w-xl"> {/* Centered and adjusted width */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{post.frontMatter.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.frontMatter.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded">Read More</button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
