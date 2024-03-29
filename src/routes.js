import React from 'react';
import { Home } from './pages/Home';
import About from './pages/About';
export const routes = [
  {
    path: '/home',
    element: React.createElement(Home),
  },
  {
    path: '/about',
    element: React.createElement(About),
  },
];
