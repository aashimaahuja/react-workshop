import React, { useCallback, useState } from 'react';
import { useHttp } from '../hooks/useHttp';
import { AddTodo } from './AddTodo';
import { TodoListNav } from './TodoListNav';

export const TodoList = () => {
  const { isLoading, get, post } = useHttp(
    'https://jsonplaceholder.typicode.com/user/1/todos/',
  );
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState('userTodos');
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const fetchTodos = useCallback(async () => {
    setActiveTab('userTodos');
    const todos = await get(
      'https://jsonplaceholder.typicode.com/user/1/todos/',
    );
    setTodos(todos);
  }, [get]);

  const fetchAllTodos = useCallback(async () => {
    setActiveTab('allTodos');
    const todos = await get('https://jsonplaceholder.typicode.com/todos/');
    setTodos(todos);
  }, [get]);

  const addTodo = useCallback(async () => {
    const newTodo = await post(
      `https://jsonplaceholder.typicode.com/todos`,
      new Headers({
        'Content-Type': 'application/json',
      }),
      {
        completed: false,
        id: todos.length + 1,
        title: input,
        userId: 1,
      },
    );

    setTodos([...todos, newTodo]);
    setInput('');
  }, [post, todos, input]);

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
