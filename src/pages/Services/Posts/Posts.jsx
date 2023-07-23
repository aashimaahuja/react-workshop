import React from 'react';
import { useHttp } from '../hooks/useHttp';

export const Posts = () => {
  const { data: posts, isLoading } = useHttp(
    'https://jsonplaceholder.typicode.com/user/1/posts/',
  );

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
