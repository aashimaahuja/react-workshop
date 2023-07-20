import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './common/components/About';
import { Home } from './common/components/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
