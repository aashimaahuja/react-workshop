import React from 'react';

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
      <span style={{ color: 'white', marginLeft: '16px' }}>Home</span>

      <span style={{ color: 'white' }}>About</span>
    </div>
  );
};
