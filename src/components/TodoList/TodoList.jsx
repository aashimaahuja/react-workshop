import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from '../hooks/useHttp';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const { isLoading, get } = useHttp('https://jsonplaceholder.typicode.com');

  const fetchAllTodos = useCallback(async () => {
    const todos = await get('/todos/');
    setTodos(todos);
  }, [get]);

  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);

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
