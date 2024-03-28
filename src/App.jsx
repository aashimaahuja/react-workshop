import React from 'react';
import { Header } from './common/components/Header';
import './App.css';
import { TodoApp } from './pages/OptimisingRerenders/TodoList/TodoApp';

function App() {
  return (
    <div>
      <Header />
      <TodoApp />
    </div>
  );
}

export default App;
