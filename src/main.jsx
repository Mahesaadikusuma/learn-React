import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import ErrorPage from './pages/404.jsx';

const router = createBrowserRouter([
  // Contohnya
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage/>
  },

   {
    path:"/login",
    element: <Login/>
   },

   {
    path:"/register",
    element: <Register/>
   }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
