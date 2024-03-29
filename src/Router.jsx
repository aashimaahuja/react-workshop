import React from 'react';
import { Routes, Route } from 'react-router';
import About from './pages/About';
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};
