import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/client.js';
export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBlogs();
      setBlogs(response);
    };
    fetchData();
  }, []);
  return blogs;
}
