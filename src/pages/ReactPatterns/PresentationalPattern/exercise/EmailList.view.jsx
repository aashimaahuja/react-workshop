import React from 'react';
import { EmailCard } from '../../../../common/components/EmailCard/EmailCard';

export const EmailListView = ({ data }) => {
  if (!data.length) {
    return <></>;
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
