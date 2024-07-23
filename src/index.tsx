import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './screens/404 page';
import Dasboard from './screens/dashboard';
import Detail from './screens/detail';
import Register from './screens/Authentication screens/register';
import Login from './screens/Authentication screens/login';
import CheckAuth from './config/checkAuth';
import Upload from './screens/uploadProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Errorpage/>,
    children:[
      {
      path: "/Dashboard",loader:CheckAuth,
      element: <Dasboard/>,
    },
    {
      path: "/detail/:id",
      element: <Detail/>,
    },
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/upload",
      element: <Upload/>,
    },
  ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
