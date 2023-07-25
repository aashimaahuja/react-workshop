import React from 'react';
import { Home } from '../common/components/Home';
import { About } from '../common/components/About';

export const publicRoutes = [
  { path: '/home', element: React.createElement(Home) },
  { path: '/about', element: React.createElement(About) },
];
