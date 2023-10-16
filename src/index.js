import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from './App';
import WatchfacesPrivacyPage from './pages/WatchfacesPrivacyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "WatchfacesPrivacy",
    element: <WatchfacesPrivacyPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
