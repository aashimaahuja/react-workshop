import React from 'react';

export const CardHeader = ({ title, subtitle }) => {
  return (
    <header>
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{subtitle}</p>
      <hr className="my-4" />
    </header>
  );
};

export const CardBody = ({ children }) => {
  return <p className="mb-4">{children}</p>;
};

export const CardFooter = ({ primary, secondary }) => {
  return (
    <footer>
      <div className="flex justify-end gap-1">
        <button className="border rounded-md p-2 px-4 bg-slate-300">
          {secondary}
        </button>
        <button className="border rounded-md p-2 px-4 bg-sky-700 text-white">
          {primary}
        </button>
      </div>
    </footer>
  );
};

export const Card = ({ children }) => {
  return (
    <section className="border rounded-lg border-slate-300 h-fit p-4 m-auto w-1/2 mt-8">
      {children}
    </section>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
