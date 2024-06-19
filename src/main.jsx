import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddService from './components/AddService.jsx';
import UpdateService from './components/UpdateService.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader : () => fetch('http://localhost:5000/services')
  },
  {
    path : '/addservice',
    element : <AddService></AddService>
  },
  {
    path : '/updateservice/:id',
    element : <UpdateService></UpdateService>,
    loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
