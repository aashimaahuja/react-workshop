import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EmailList } from './pages/ReactPatterns/PresentationalPattern/exercise/EmailList';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/email-list" element={<EmailList />} />
      </Routes>
    </BrowserRouter>
  );
};
