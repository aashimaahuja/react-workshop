import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div
      style={{
        height: '50px',
        backgroundColor: 'black',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <span style={{ color: 'white', marginLeft: '16px' }}>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
          Home
        </Link>
      </span>

      <span style={{ color: 'white' }}>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
          About
        </Link>
      </span>
    </div>
  );
};
