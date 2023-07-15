import { useState } from 'react';
import React from 'react';
import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';
import SearchTodo from './components/SearchTodo';
import { getInitialList } from './lib/utils';

export const TodoApp = () => {
  const [todos, setTodos] = useState(() => getInitialList());

  const incompleteTodos = todos.filter((item) => !item.isCompleted);
  const completeTodos = todos.filter((item) => item.isCompleted);

  return (
    <main className="mt-8 flex flex-col items-center h-full">
      <section className="border-2 rounded-lg p-6 w-1/2 bg-white border-indigo-600 h-2/3">
        <AddTodoItem setTodos={setTodos} />
        <SearchTodo />
        <TodoList todos={incompleteTodos} setTodos={setTodos} />
        <hr />
        <TodoList todos={completeTodos} setTodos={setTodos} />
      </section>
    </main>
  );
};
