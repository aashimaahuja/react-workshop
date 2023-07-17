import React from 'react';
import { useState } from 'react';
import { useTodoListActionsContext } from '../hooks/useTodoListContext';
import { addItem } from '../lib/utils';

export const AddTodoItem = () => {
  const setTodos = useTodoListActionsContext();
  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = () => {
    setTodos((prevTodos) => addItem(prevTodos, newTodo));
    setNewTodo('');
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="border rounded-md mr-2 w-1/3"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="bg-indigo-500 p-1 px-2 text-white rounded-sm"
        onClick={addNewTodo}
      >
        Add Todo
      </button>
      <hr className="mb-4" />
    </div>
  );
};

const MemoedAddTodoItem = React.memo(AddTodoItem);
export default MemoedAddTodoItem;
