import React, { useCallback, useEffect, useState } from 'react';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = useCallback(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/user/1/todos/')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong. Please try again later !');
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => fetchTodos(), [fetchTodos]);

  return (
    <main className="border rounded-lg border-slate-300 bg-white p-4 mr-4 w-1/2">
      <section className="grow">
        <h1 className="font-bold">Todos</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="list list-inside list-disc">
            {todos.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};
