import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Application as Counter } from './pages/OptimisingRerenders/Counter/Application';
import { CardDemo } from './pages/ReactPatterns/CompoundPattern/CardDemo';
import { EmailList } from './pages/ReactPatterns/HooksPattern/exercise/EmailList';

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
      </Routes>
    </BrowserRouter>
  );
};
