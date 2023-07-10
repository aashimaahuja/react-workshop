### React Patterns

<b>Container/Presentational pattern</b>

We use the Container/Presentational pattern to separate the logic of a component from the view

We divide our component in two components

- **View component** , they are pure functions that only cares about displaying data to user.
- **Container component**, that takes care of all the data fetching logic , calculations and rest.

```js
export const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/user')
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
      {data.map((user) => {
        const { id, name, email, age, imageUrl } = user;
        return (
          <User key={id} name={name} email={email} age={age} image={imageUrl} />
        );
      })}
    </ul>
  );
};
```

**Container Component**

```js
import React from 'react';
import { useEffect, useState } from 'react';
import { UserListView } from './UserList.view';

export const EmailListContainer = () => {
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
  return <UserListView data={data} />;
};
```

**View Component**

```js
import React from 'react';
import { User } from '../components/User/User';

export const UserListView = ({ data }) => {
  return (
    <ul className="grow">
      {data.map((user) => {
        const { id, name, email, age, imageUrl } = user;
        return (
          <User key={id} name={name} email={email} age={age} image={imageUrl} />
        );
      })}
    </ul>
  );
};
```

**Pros**

- Separation of concerns
- Reusability
- Testing

**Cons**
Not so much used because of hooks
