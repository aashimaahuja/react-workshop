# Managing Routes

---

Routing allows you to create multiple pages in a single page application.

### Installing Router

Install react router and react-router-dom

```
npm install react-router
npm install react-router-dom

```

---

### Using JSX syntax

Create a separate file `Router.js` where you define all your routes and then use in `App.jsx` file

```js file=Router.js
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
```

By separating the routes into their own file, you can keep your App.jsx file clean while Router.js file handles all the configurations of the routes.

```js
import Router from "./Router";

function App() {
  return (
    <div>
      {/* Add your common components or layout here */}
      <Router />
      {/* Add more components or layout here */}
    </div>
  );
}

export default App;
```

### Using an array

You can create an array of route objects where each object represents a route with its path and corresponding component.

`publicRoutes.js`

```js
export const publicRoutes = [
  {
    path: "/",
    element: React.createElement(Home),
  },
  {
    path: "/about",
    element: React.createElement(About),
  },
];
```

`adminRoutes.js`

```js
export const adminRoutes = [
  {
    path: "/",
    element: React.createElement(Admin),
  },
  {
    path: "/emails",
    element: React.createElement(Emails),
  },
];
```

> Note you cab't use jsx syntax inside array because it can only be used inside react component.

`App.jsx`

```js
import { publicRoutes } from "./publicRoutes";
import { adminRoutes } from "./adminRoutes";

function App() {
  const router = createBrowserRouter([...publicRoutes, ...adminRoutes]);
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
```
