import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { EmailCard } from '../../../../common/components/EmailCard/EmailCard';

export const EmailList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://flipkart-email-mock.now.sh/')
      .then((res) => res.json())
      .then((data) => {
        setData(data.list);
      });
  }, []);

  if (data == null) {
    return;
  }
  return (
    <ul className="grow">
      {data.map((item) => {
        const { id, subject, short_description, from } = item;
        return (
          <EmailCard
            key={id}
            name={from.name}
            email={from.email}
            subject={subject}
            description={short_description}
          />
        );
      })}
    </ul>
  );
};
