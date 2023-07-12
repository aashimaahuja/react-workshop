import React from 'react';
import { useState } from 'react';
import { ExpensiveComponent } from '../components/ExpensiveComponent';

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="border-solid border-2 border-black h-80 w-96 flex flex-col items-center justify-center bg-gray-200">
      <div className="border-2 border-pink-500 h-20 w-20 flex items-center justify-center text-4xl bg-white">
        {count}
      </div>
      <button
        className="mt-4 border p-2 rounded-md bg-indigo-600 text-white"
        onClick={incrementCount}
      >
        Increment Count
      </button>
      {children}
    </section>
  );
};

export const Solution3 = () => {
  return (
    <main className="m-4 flex flex-col items-center">
      <Counter>
        <ExpensiveComponent />
      </Counter>
    </main>
  );
};
