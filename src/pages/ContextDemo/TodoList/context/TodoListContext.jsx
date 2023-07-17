import React from 'react';
import { useState } from 'react';
import { getInitialList } from '../lib/utils';

export const TodoListContext = React.createContext(null);
export const TodoListActionsContext = React.createContext(null);

export const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => getInitialList());

  //   const memoedValue = useMemo(() => {
  //     return { todos, setTodos };
  //   }, [todos]);

  return (
    <TodoListActionsContext.Provider value={setTodos}>
      <TodoListContext.Provider value={todos}>
        {children}
      </TodoListContext.Provider>
    </TodoListActionsContext.Provider>
  );
};
