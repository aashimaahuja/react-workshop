import React from 'react';

export const TodoListNav = ({ activeTab, fetchTodos, fetchAllTodos }) => {
  return (
    <section>
      <nav className="flex gap-3">
        <button
          className={
            activeTab === 'userTodos'
              ? 'border rounded-xl px-2 bg-slate-200'
              : ''
          }
          onClick={fetchTodos}
        >
          User todos
        </button>
        <button
          className={
            activeTab === 'allTodos'
              ? 'border rounded-xl px-2 bg-slate-200'
              : ''
          }
          onClick={fetchAllTodos}
        >
          All todos
        </button>
      </nav>
    </section>
  );
};
