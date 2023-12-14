import React from 'react';

export const ListItem = ({ item }) => {
  const { count, createdAt } = item;

  return (
    <li className="text-lg">
      <div className="flex gap-1 mt-4">
        <div>{count}</div>
        <input className="border" type="text" />
        <div>{createdAt.toTimeString().split(' ')[0]}</div>
      </div>
    </li>
  );
};

export const MemoedListItem = React.memo(ListItem);
