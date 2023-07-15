import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, deleteItem, updateItem }) => {
  return (
    <ul className="mb-4 mt-4 leading-8 ">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}
    </ul>
  );
};
