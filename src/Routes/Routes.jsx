import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";

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
      path:'/menu',
      element:<Menu></Menu>
    },
    {
      path: '/orderFood',
      element: <OrderFood></OrderFood>
    }
 ]
  }
])

export default router;