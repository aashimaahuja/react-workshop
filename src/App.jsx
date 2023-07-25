import React from 'react';
import { Header } from './common/components/Header';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';
import { adminRoutes } from './routes/adminRoutes';

function App() {
  const router = createBrowserRouter([...publicRoutes, ...adminRoutes]);
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
