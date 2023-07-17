import React, { memo } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul className="mb-4 mt-4 leading-8 ">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const MemoedTodoList = memo(TodoList);

export default MemoedTodoList;
