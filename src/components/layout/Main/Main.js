import React from 'react';
import { useAbleBlogs } from '../../../hooks/blogs.js';
import BlogCard from '../../BlogCard/BlogCard.js';

export default function Main() {
  const blogs = useAbleBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
