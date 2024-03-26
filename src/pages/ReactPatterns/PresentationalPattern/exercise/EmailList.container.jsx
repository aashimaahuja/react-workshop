import React, { useState, useEffect } from 'react';
import { EmailListView } from './EmailList.view';

export const EmailListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://flipkart-email-mock.now.sh/')
      .then((res) => res.json())
      .then((data) => {
        setData(data.list);
      });
  }, []);

  return <EmailListView data={data} />;
};
