import React from 'react';
import { TodoListNav } from './TodoListNav';
import { AddTodo } from './AddTodo';
import { useTodoList } from '../hooks/useTodoList';

export const TodoList = () => {
  const {
    todos,
    addTodo,
    onInputChange,
    input,
    fetchAllTodos,
    fetchTodos,
    activeTab,
    isLoading,
  } = useTodoList();

  return (
    <main className="border rounded-lg border-slate-300 bg-white p-4 mr-4 w-1/2">
      <AddTodo
        addTodo={addTodo}
        handleInputChange={onInputChange}
        inputValue={input}
      />
      <TodoListNav
        fetchAllTodos={fetchAllTodos}
        fetchTodos={fetchTodos}
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
