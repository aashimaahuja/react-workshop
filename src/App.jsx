import React from 'react';
import { Router } from './Router';
import { Header } from './common/components/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
