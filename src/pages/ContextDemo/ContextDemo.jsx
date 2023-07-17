import React, { useState } from 'react';
import { TodoListContextProvider } from './TodoList/context/TodoListContext';
import TodoApp from './TodoList/TodoApp';

export const ContextDemo = () => {
  const [count, setCount] = useState(1);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <TodoListContextProvider>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        onClick={onClick}
      >
        Click me
      </button>
      <TodoApp />
    </TodoListContextProvider>
  );
};
