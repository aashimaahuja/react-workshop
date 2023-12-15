import React from 'react';
import { useTodoList } from '../hooks/useTodoList';
import { AddTodo } from './AddTodo';
import { TodoListNav } from './TodoListNav';

export const TodoList = () => {
  const {
    addTodo,
    input,
    handleInputChange,
    fetchTodos,
    fetchAllTodos,
    activeTab,
    isLoading,
    todos,
  } = useTodoList();

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
