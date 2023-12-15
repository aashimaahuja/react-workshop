import React from 'react';

export const AddTodo = ({ addTodo, handleInputChange, inputValue }) => {
  return (
    <section className="flex mb-2">
      <input
        className="border px-2 rounded-md"
        value={inputValue}
        placeholder="Add a todo title"
        onChange={handleInputChange}
      />
      <button
        className="flex mx-2 rounded-md px-2 py-1 bg-slate-200 hover:bg-slate-300"
        onClick={addTodo}
      >
        Add todo
      </button>
    </section>
  );
};
