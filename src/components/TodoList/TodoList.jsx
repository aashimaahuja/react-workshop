import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from '../hooks/useHttp';
import { AddTodo } from './AddTodo';
import { TodoListNav } from './TodoListNav';

export const TodoList = () => {
  const { isLoading, get } = useHttp('https://jsonplaceholder.typicode.com');
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('userTodos');
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const fetchTodos = useCallback(async () => {
    setActiveTab('userTodos');
    const todos = await get('/user/1/todos/');
    setTodos(todos);
  }, [get]);

  const fetchAllTodos = useCallback(async () => {
    setActiveTab('allTodos');
    const todos = await get('/todos/');
    setTodos(todos);
  }, [get]);

  useEffect(() => {
    fetchAllTodos();
  }, [fetchAllTodos]);

  const addTodo = useCallback(async () => {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: {
        completed: false,
        id: todos.length + 1,
        title: input,
        userId: 1,
      },
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(options.body),
      headers: options.headers,
    });
    const newTodo = await response.json();

    setTodos([...todos, newTodo]);
    setInput('');
  }, [todos, input]);

  return (
    <main className="border rounded-lg border-slate-300 bg-white p-4 mr-4 w-1/2">
      <AddTodo
        addTodo={addTodo}
        inputValue={input}
        handleInputChange={handleInputChange}
      />
      <TodoListNav
        fetchTodos={fetchTodos}
        fetchAllTodos={fetchAllTodos}
        activeTab={activeTab}
      />
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
