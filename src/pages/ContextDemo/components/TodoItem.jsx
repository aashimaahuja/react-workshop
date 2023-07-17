import React from 'react';
import { useState } from 'react';
import { deleteItem, updateItem } from '../lib/utils';

export const TodoItem = ({ item, setTodos }) => {
  const isCompleted = item.isCompleted;
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li key={item.id}>
      <div className="flex">
        <input
          type="checkbox"
          className={`mr-2 ${isCompleted && 'accent-slate-500'}`}
          checked={isCompleted}
        />
        {isCompleted ? (
          <label className="text-slate-300">
            <s>{item.name}</s>
          </label>
        ) : isEditing ? (
          <input
            className="border rounded"
            value={item.name}
            onChange={(e) =>
              setTodos((prevTodos) =>
                updateItem(prevTodos, item.id, { name: e.target.value }),
              )
            }
          />
        ) : (
          <label>{item.name}</label>
        )}
        <div className="flex gap-2 ml-3">
          <button
            className="text-sm text-gray-500"
            aria-label={`Edit "${item.name}"`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? '💾 Save' : '✏️ Edit'}
          </button>
          <button
            className="text-sm text-gray-500"
            aria-label={`Remove "${item.name}"`}
            onClick={() =>
              setTodos((prevTodos) => deleteItem(prevTodos, item.id))
            }
          >
            ❌ Delete
          </button>
        </div>
      </div>
    </li>
  );
};

const MemoedTodoItem = React.memo(TodoItem);
export default MemoedTodoItem;
