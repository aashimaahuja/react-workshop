import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextDemo } from './pages/ContextDemo/ContextDemo';
import { Application as Counter } from './pages/OptimisingRerenders/Counter/Application';
import { TodoApp } from './pages/OptimisingRerenders/TodoList/solution2/TodoApp';
import { CardDemo } from './pages/ReactPatterns/CompoundPattern/CardDemo';
import { EmailList } from './pages/ReactPatterns/HooksPattern/exercise/EmailList';
import { Services } from './pages/Services/Services';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/email-list" element={<EmailList />} />
        <Route path="/card" element={<CardDemo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todoApp" element={<TodoApp />} />
        <Route path="/contextDemo" element={<ContextDemo />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
};
