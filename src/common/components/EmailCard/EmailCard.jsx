import React from 'react';
import './EmailCard.css';

export const EmailCard = ({ name, email, subject, description }) => {
  return (
    <div className="flex m-8 border border-gray-300 rounded-md p-2">
      <div className="rounded-full ml-2 mr-4 bg-rose-600 w-12 h-12 leading-12 text-center text-white text-xl">
        F
      </div>
      <div className="email-details">
        <div>
          <label>From: </label>
          <span>
            <strong>{name} </strong>
          </span>
          <span>
            <strong>{`<${email}>`}</strong>
          </span>
        </div>
        <div className="mb-2">
          <label>Subject: </label>
          <span>
            <strong>{subject}</strong>
          </span>
        </div>
        <div>{description}</div>
        <div className="footer"></div>
      </div>
    </div>
  );
};
