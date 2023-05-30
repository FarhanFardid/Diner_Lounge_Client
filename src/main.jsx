import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
    <ToastContainer/>
      <div className='max-w-screen-xl mx-auto'>
 <RouterProvider router={router}></RouterProvider>
 </div>
 </HelmetProvider>
   </AuthProvider>
 
  </React.StrictMode>,
)
