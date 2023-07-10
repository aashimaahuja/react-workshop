import React from 'react';
import { EmailCard } from '../../../../common/components/EmailCard/EmailCard';
import { useEmailList } from './useEmailList';

export const EmailList = () => {
  const { data, loading } = useEmailList();

  if (loading) {
    return <h1>Loading...</h1>;
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
