import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs.js';

export function useAbleBlogs() {
  const [blogs, listBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogs();
      listBlogs(res);
    };
    fetchData();
  }, []);
  return blogs;
}
