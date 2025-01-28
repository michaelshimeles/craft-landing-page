import Link from 'next/link';
import React from 'react';

// Mock data for blog posts (you could replace this with data from a CMS or API)
const blogPosts = [
  { id: '1', title: 'Aloo Gobi Recipe', description: 'A delicious cauliflower and potato dish.' },
  { id: '2', title: 'Butter Chicken Recipe', description: 'Rich and creamy butter chicken.' },
  { id: '3', title: 'Palak Paneer Recipe', description: 'Spinach and cottage cheese curry.' },
  { id: '4', title: 'Rogan Josh Recipe', description: 'Aromatic lamb curry from Kashmir.' },
];

const BlogPage: React.FC = () => {
  return (
    <div className="blog-container">
      <h1>Our Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Link href={`/blog/${post.id}`}>{'$1'}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
