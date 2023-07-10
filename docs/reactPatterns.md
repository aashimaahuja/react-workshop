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

---

### Hooks Pattern

React hooks are special type of functions which have state and can use lifecycle methods. Hooks enables usability and flexibilty of extracting common logic inside a hook.

The idea of hooks pattern is same as Container/Presentation pattern. Keep data component and view component separate.

> With Hooks, we no longer have to wrap Presentational components in Container components to pass data. Instead, we can directly use the Hook within the presentational component.

```js
export const useUserList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('/user')
      .then((res) => res.json())
      .then((data) => {
        setData(data.list);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
};
```

```js
export const UserList = () => {
  const { data, loading } = useUserList();

  if (isLoading) {
    return <h1>Loading</h1>;
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

---

### Compound Pattern

Compound pattern is commonly used in building complex UI components, like date-picker,dropdown menu, accordion etc when a component has multiple subcomponents.

For example `Card` component has multiple subcomponents which needs to be separately imported

```js
<Card>
  <CardHeader />
  <CardBody />
  <CardFooter />
</Card>
```

> When importing a compound component, we don't have to explicitly import the child components that are available on that component.

```js
<Card>
  <Card.Header />
  <Card.Body />
  <Card.Footer />
</Card>
```
