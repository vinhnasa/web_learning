import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'froute';
import ReactRouter from 'froute-react';
import ReactDom from 'react-dom';

const UserDetails = lazy(() => import("./ReactRouter/UserDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            HOME<Link to="/user-details">User Detail</Link>
          </div>
        ),
      },
      {
        path: "/user-details",
        element: (
          <Suspense fallback="loading">
            <UserDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDom.render(<ReactRouter router={router} />, document.getElementById('root'));
