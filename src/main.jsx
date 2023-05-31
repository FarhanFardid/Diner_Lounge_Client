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
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
    <ToastContainer/>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
 <RouterProvider router={router}></RouterProvider>
 </div>
    </QueryClientProvider>
    
 </HelmetProvider>
   </AuthProvider>
 
  </React.StrictMode>,
)
