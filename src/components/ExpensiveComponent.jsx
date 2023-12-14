import React from 'react';
import { block } from '../lib/sleep';

export const ExpensiveComponent = () => {
  block(500);
  return (
    <div className="mt-2 bg-yellow-300 w-80 text-center text-lg p-2 font-semibold">
      🔥 I am expensive 🔥
    </div>
  );
};
