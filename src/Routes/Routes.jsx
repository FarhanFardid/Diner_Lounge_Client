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
        }
      ]
    }
  
    
 ]
  
)

export default router;