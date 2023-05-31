import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Authentication/Login";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Register from "../Pages/Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";

  const router = createBrowserRouter([
    {
 path : '/',
 element:<Main></Main>,
 children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
      path:'menu',
      element:<Menu></Menu>
    },
    {
      path: 'order',
      element: <PrivateRoutes><OrderFood></OrderFood></PrivateRoutes>,
    },
    {
      path: 'order/:category',
      element: <OrderFood></OrderFood>
    },
    {
      path: 'contact',
      element: <ContactUs></ContactUs>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/register',
      element: <Register></Register>
    }

      
      ]
     
    }
  
    
 ]
  
)

export default router;