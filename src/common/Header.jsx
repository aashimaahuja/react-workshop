import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="flex w-full h-10 bg-black items-center justify-between">
      <Link to="/">
        <button className="px-4 py-1 text-white font-semibold">
          Counter App
        </button>
      </Link>
      <Link to="/counterExercise">
        <button className="px-4 py-1 bg-yellow-500 text-black font-semibold">
          Go to exercise
        </button>
      </Link>
    </div>
  );
};
