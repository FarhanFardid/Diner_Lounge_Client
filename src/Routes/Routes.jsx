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
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import UserReservation from "../Pages/DashBoard/UserReservation/UserReservation";
import UserBooking from "../Pages/DashBoard/UserBooking/UserBooking";
import UserPayment from "../Pages/DashBoard/UserPayment/UserPayment";
import UserReview from "../Pages/DashBoard/UserReview/UserReview";
import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import AdminAddItem from "../Pages/DashBoard/Admin/AdminAddItem";
import AdminManageItem from "../Pages/DashBoard/Admin/AdminManageItem";
import AdminManageBooking from "../Pages/DashBoard/Admin/AdminManageBooking";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers";
import AdminRoutes from "./AdminRoutes";

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
      element: <OrderFood></OrderFood>
    },
    {
      path: 'order/:category',
      element: <PrivateRoutes><OrderFood></OrderFood></PrivateRoutes>
    },
    {
      path: 'contact',
      element: <ContactUs></ContactUs>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'register',
      element: <Register></Register>
    }

      
      ]
     
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children: [
        {
          path:'myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path: 'userReservation',
          element: <UserReservation></UserReservation>
        },
        {
          path: 'userBooking',
          element:<UserBooking></UserBooking>
        },
        {
          path:'userPayment',
          element: <UserPayment></UserPayment>
        },
        {
          path: 'userReview',
          element:<UserReview></UserReview>
        },
        {
          path: 'adminHome',
          element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path: 'adminAddItem',
          element:<AdminRoutes><AdminAddItem></AdminAddItem></AdminRoutes>
        },
        {
          path: 'adminManageItem',
          element:  <AdminRoutes><AdminManageItem></AdminManageItem></AdminRoutes>
        },
        {
          path: 'adminManageBooking',
          element:<AdminRoutes><AdminManageBooking></AdminManageBooking></AdminRoutes>
        },
        
        {
          path: 'allUsers',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
         
        },
        
      ]
    }
  
    
 ]
  
)

export default router;