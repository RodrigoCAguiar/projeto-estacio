import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './Login'
import Register from './Register'
import Password from './Password'
import Home from "../src/pages/Home";

import './index.css'
import './Register.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },

  {
    path: "register",
    element: <Register />
  },

  {
    path: "password",
    element: <Password />
  },

  {
    path: "home",
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
