## Create routes using an array

Create two files `publicRoutes.js` and `adminRoutes.js`
Public routes should contain the routes `/home` and `/about`.
Admin routes should contain routes `/admin` and `/emails`

Include routes in App.jsx
`/home` should display text **Home Page**
`/about` -> **About Page**
`/admin` -> **Admin Page**
`/emails` -> **Email Page**

```js
const routes = [
  {
    path: '<specify_path_here>',
    element: <specify_element_here>,
  },
  ...
];
```

Include these routes in your `App.jsx` file.
Add Admin and Emails Tab in header
