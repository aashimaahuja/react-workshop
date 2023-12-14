import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CounterApp } from './CounterApp';
import { CounterPerformanceExercise } from './exercise/CounterPerformanceExercise';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CounterApp />} />
      <Route path="/counterExercise" element={<CounterPerformanceExercise />} />
    </Routes>
  );
};
