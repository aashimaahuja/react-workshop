import { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export const useTodoListContext = () => {
  const context = useContext(TodoListContext);
  if (context == null) {
    throw new Error(
      'useTodoListContext must be wrapped inside TodoListContextProvider',
    );
  }
  return context;
};
