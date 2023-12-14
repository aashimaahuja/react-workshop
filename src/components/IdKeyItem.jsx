import React from 'react';

const IdKeyItem = ({ item }) => {
  console.log(`Id key ${item} rerendered`);
  return (
    <li className="border p-1 w-full mb-2 bg-green-300 text-center">{item}</li>
  );
};

export const MemoedIdKeyItem = React.memo(IdKeyItem);
