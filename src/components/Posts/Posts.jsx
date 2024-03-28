import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useHttp } from '../hooks/useHttp';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { isLoading, get } = useHttp('https://jsonplaceholder.typicode.com/');

  const fetchPosts = useCallback(async () => {
    const posts = await get('/user/1/posts');
    setPosts(posts);
  }, [get]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <section className="border rounded-lg border-slate-300 bg-white p-4 mr-4 grow">
      <h1 className="font-bold">Posts</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="list list-inside list-disc">
          {posts.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
