import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/user/1/posts/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong. Please try again later !');
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => fetchPosts(), [fetchPosts]);

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
