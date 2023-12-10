import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';
import { adminRoutes } from './routes/adminRoutes';
import { Layout } from './common/components/Layout';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...publicRoutes, ...adminRoutes],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
