import { useCallback, useState } from 'react';
import React from 'react';
import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';
import SearchTodo from './components/SearchTodo';

const getInitialList = () => [
  {
    id: 1,
    name: 'Wash clothes',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Buy groceries',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'Complete training',
    isCompleted: false,
  },
  {
    id: 4,
    name: 'House Cleaning',
    isCompleted: true,
  },
  {
    id: 5,
    name: 'Watering plants',
    isCompleted: true,
  },
];

export const TodoApp = () => {
  const [todos, setTodos] = useState(() => getInitialList());

  const addItem = useCallback((name) => {
    setTodos((prevTodos) => [
      { id: prevTodos.length + 1, name: name, isCompleted: false },
      ...prevTodos,
    ]);
  }, []);

  const deleteItem = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }, []);

  const updateItem = useCallback((id, value) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) => {
        if (item.id === id) return { ...item, ...value };
        return item;
      }),
    );
  }, []);

  const incompleteTodos = todos.filter((item) => !item.isCompleted);
  const completeTodos = todos.filter((item) => item.isCompleted);

  return (
    <main className="mt-8 flex flex-col items-center h-full">
      <section className="border-2 rounded-lg p-6 w-1/2 bg-white border-indigo-600 h-2/3">
        <AddTodoItem addItem={addItem} />
        <SearchTodo />
        <TodoList
          todos={incompleteTodos}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
        <hr />
        <TodoList
          todos={completeTodos}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      </section>
    </main>
  );
};
