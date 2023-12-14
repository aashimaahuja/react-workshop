import React, { useState } from 'react';
import { MemoedIdKeyItem } from './IdKeyItem';
import { MemoedIndexKeyItem } from './IndexKeyItem';

export const ListSortingDemo = () => {
  const values = [1, 2, 3];
  const idMap = {
    1: 1,
    2: 2,
    3: 3,
  };
  const [list, setList] = useState(values);
  const [sortDirection, setSortDirection] = useState(1);

  const sorList = () => {
    const sortedList = values.sort((a, b) => (a - b) * (sortDirection * -1));
    setSortDirection(-1 * sortDirection);
    setList(sortedList);
  };

  return (
    <section className="border border-slate-500 p-4 m-4 w-1/2">
      <button
        className="border p-1 bg-slate-300 rounded  mb-2 px-4"
        onClick={sorList}
      >
        Sort list
      </button>

      <h3 className="mb-2 font-semibold">List with key as index</h3>
      <ul>
        {list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MemoedIndexKeyItem key={index} item={item} />
        ))}
      </ul>

      <h3 className="mb-2 font-semibold">List with key as Id</h3>

      <ul>
        {list.map((item) => (
          <MemoedIdKeyItem key={idMap[item]} item={item} />
        ))}
      </ul>
    </section>
  );
};
