import React from 'react';

const IndexKeyItem = ({ item }) => {
  console.log(`index key ${item} rerendered`);
  return (
    <li className="border p-1 w-full mb-2 bg-red-200 text-center">{item}</li>
  );
};

export const MemoedIndexKeyItem = React.memo(IndexKeyItem);
