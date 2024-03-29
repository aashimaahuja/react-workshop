import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Header } from './common/components/Header';
// import { Router } from './Router';
import { routes } from './routes';
import { Layout } from './common/components/Layout';

function App() {
  const router = createBrowserRouter([
    { element: <Layout />, children: [...routes] },
  ]);
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
  // return (
  //   <BrowserRouter>
  //     <Header />
  //     <Router />
  //   </BrowserRouter>
  // );
}

export default App;
