import { useContext } from 'react';
import { TodoListActionsContext } from '../context/TodoListContext';

export const useTodoListActionsContext = () => {
  const context = useContext(TodoListActionsContext);
  if (context == null) {
    throw new Error(
      'useTodoListActionsContext must be wrapped inside TodoListActionsContextProvider',
    );
  }
  return context;
};
