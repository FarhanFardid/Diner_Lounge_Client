import { Link, NavLink, Outlet } from "react-router-dom";
import Navigation from "../Shared/Navigation";
import Footer from "../Shared/Footer";

import {MdRateReview} from 'react-icons/md';
import {RiMessage2Fill} from 'react-icons/ri';
import {FaHome, FaShoppingCart,FaCalendarAlt,FaCalendarCheck,FaMoneyCheckAlt,FaBars,FaShopify} from 'react-icons/fa';


const DashBoard = () => {
    return (
      <>
      
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-slate-800 text-white ps-5 ">
            <h2 className="text-3xl font-semibold text-center text-orange-600 py-3">Bistro Boss Restaurant</h2>
              <h3 className="text-xl font-medium text-center p-2">User DashBoard</h3>
            <li><NavLink to="/dashboard/userHome"><FaHome className="w-6 h-6 text-cyan-500"></FaHome>User Home</NavLink></li>
            <li><NavLink to="/dashboard/myCart"><FaShoppingCart className="w-6 h-6 text-cyan-500"/>My Cart</NavLink></li>
            <li><NavLink to="/dashboard/userReservation"><FaCalendarAlt className="w-6 h-6 text-cyan-500"/>Reservation</NavLink></li>
            <li><NavLink to="/dashboard/userPayment"><FaMoneyCheckAlt className="w-6 h-6 text-cyan-500"/>Payment History</NavLink></li>
            <li><NavLink to="/dashboard/userBooking"><FaCalendarCheck className="w-6 h-6 text-cyan-500"/>My Booking</NavLink></li>
            <li><NavLink to="/dashboard/userReview"><MdRateReview className="w-6 h-6 text-cyan-500"/>Add Review</NavLink></li>
        
            <hr className="my-5"/>

            <li><Link to='/'><FaHome className="w-6 h-6 text-white"></FaHome>Home</Link></li>
            <li><Link to='/menu'><FaBars className="w-6 h-6 text-white"/>Menu</Link></li>
            <li><Link to='/order'><FaShopify className="w-6 h-6 text-white"/>Order</Link></li>
            <li><Link to='/contact'><RiMessage2Fill className="w-6 h-6 text-white"/>Contact</Link></li>
          </ul>
         
        </div>
     

      </div>
      <Footer></Footer>
      </>
    );
};

export default DashBoard;