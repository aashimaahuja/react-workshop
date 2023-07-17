import React from 'react';
import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';
import SearchTodo from './components/SearchTodo';
import { useTodoListContext } from './hooks/useTodoListActionsContext';

const TodoApp = () => {
  const todos = useTodoListContext();

  const incompleteTodos = todos.filter((item) => !item.isCompleted);
  const completeTodos = todos.filter((item) => item.isCompleted);

  return (
    <main className="mt-8 flex flex-col items-center h-full">
      <section className="border-2 rounded-lg p-6 w-1/2 bg-white border-indigo-600 h-2/3">
        <AddTodoItem />
        <SearchTodo />
        <TodoList todos={incompleteTodos} />
        <hr />
        <TodoList todos={completeTodos} />
      </section>
    </main>
  );
};
const MemoedTodoApp = React.memo(TodoApp);
export default MemoedTodoApp;
