import React from 'react';
import { Posts } from './Posts/Posts';
import { TodoList } from './TodoList/TodoList';

export const Services = () => {
  return (
    <div className="flex m-4 justify-between">
      <TodoList />
      <Posts />
    </div>
  );
};
