import React, { useCallback, useState } from 'react';
import { ListItem } from './ListItem';
import { ListSortingDemo } from './ListSortingDemo';

export const IndexKeyList = () => {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([
    {
      count,
      createdAt: new Date(),
    },
  ]);

  const addItem = useCallback(() => {
    setList([{ count: count + 1, createdAt: new Date() }, ...list]);
    setCount(count + 1);
  }, [count, list]);

  return (
    <div className="m-4">
      <h2 className="text-xl font-bold bg-yellow-400">
        Using <span className="text-red-600">index</span> as key
      </h2>
      <div className="mt-2">
        <button className="border p-1 bg-sky-700 text-white" onClick={addItem}>
          Add item to start of the list
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export const IdKeyList = () => {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([
    {
      id: '123',
      count,
      createdAt: new Date(),
    },
  ]);

  const addItem = useCallback(() => {
    const id = +new Date();
    setList([
      { id: 'Foo' + id, count: count + 1, createdAt: new Date() },
      ...list,
    ]);
    setCount(count + 1);
  }, [count, list]);

  return (
    <div className="m-4">
      <h2 className="text-xl font-bold bg-yellow-400">
        Using <span className="text-red-600">id</span> as key
      </h2>
      <div className="mt-2">
        <button className="border p-1 bg-sky-700 text-white" onClick={addItem}>
          Add item to start of the list
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export const List = () => {
  return (
    <main className="flex m-4">
      <section className="border border-slate-500 p-4 m-4 w-1/2 grow">
        <IndexKeyList />
        <IdKeyList />
      </section>
      <ListSortingDemo />
    </main>
  );
};
