import React from 'react';
import { Router } from './Router';
import { Header } from './common/components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
