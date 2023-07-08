import React from 'react';
import { Header } from './common/components/Header';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const router = createBrowserRouter(routes);
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
