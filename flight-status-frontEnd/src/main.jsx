import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Status from './Components/Status/Status.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Notification from './Components/Notification/Notification.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Status",
    element: <Status/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  },
  {
    path: "/Notification",
    element: <Notification />
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
