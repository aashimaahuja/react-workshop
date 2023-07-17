import React from 'react';

const SearchTodo = () => {
  return (
    <div className="flex mb-2">
      <input
        type="text"
        className="border rounded-md mr-2 w-2/5"
        onChange={() => {}}
      />
      <button className="bg-slate-200 p-1 px-2 rounded-sm">Search</button>
    </div>
  );
};

const MemoedSearchTodo = React.memo(SearchTodo);
export default MemoedSearchTodo;
