import { Link, NavLink, Outlet } from "react-router-dom";

import Footer from "../Shared/Footer";

import {MdRateReview} from 'react-icons/md';
import {RiMessage2Fill} from 'react-icons/ri';
import {GiKnifeFork, GiNotebook} from 'react-icons/gi';
import {RxDragHandleHorizontal} from 'react-icons/rx';
import {FaHome,FaUsers, FaShoppingCart,FaCalendarAlt,FaCalendarCheck,FaMoneyCheckAlt,FaBars,FaShopify} from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const DashBoard = () => {
  const [cart] = useCart();
//  const isAdmin = true;
const [isAdmin] = useAdmin();
// without axiosSecure use  "const admin = isAdmin?.admin" and with axiosSecure use only "const [isAdmin] = useAdmin();"


// const admin = isAdmin?.admin;  
console.log(isAdmin)
    return (
      <>
      
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  items-center justify-center">
         <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-slate-800 text-white ps-5 ">
          <h2 className="text-3xl font-semibold text-center text-orange-600 py-3">Bistro Boss Restaurant</h2>
            {
              isAdmin ? <>
                  <h3 className="text-xl font-medium text-center p-2">Admin DashBoard</h3>
            <li><NavLink to="/dashboard/adminHome"><FaHome className="w-6 h-6 text-cyan-500"></FaHome>Admin Home</NavLink></li>
            <li><NavLink to="/dashboard/adminAddItem"><GiKnifeFork className="w-6 h-6 text-cyan-500"/>Add Items </NavLink></li>
            <li><NavLink to="/dashboard/adminManageItem"><RxDragHandleHorizontal className="w-6 h-6 text-cyan-500"/>Manage Items </NavLink></li>
            <li><NavLink to="/dashboard/adminManageBooking"><GiNotebook className="w-6 h-6 text-cyan-500"/>Manage Bookings</NavLink></li>
            <li><NavLink to="/dashboard/allUsers"><FaUsers className="w-6 h-6 text-cyan-500"/>All Users</NavLink></li>
          </> : <>
                  <h3 className="text-xl font-medium text-center p-2">User DashBoard</h3>
            <li><NavLink to="/dashboard/userHome"><FaHome className="w-6 h-6 text-cyan-500"></FaHome>User Home</NavLink></li>
            <li><NavLink to="/dashboard/myCart"><FaShoppingCart className="w-6 h-6 text-cyan-500"/>My Cart <span className="badge bg-white text-black font-bold">+{cart?.length}</span></NavLink></li>
            <li><NavLink to="/dashboard/userReservation"><FaCalendarAlt className="w-6 h-6 text-cyan-500"/>Reservation</NavLink></li>
            <li><NavLink to="/dashboard/userPayment"><FaMoneyCheckAlt className="w-6 h-6 text-cyan-500"/>Payment History</NavLink></li>
            <li><NavLink to="/dashboard/userBooking"><FaCalendarCheck className="w-6 h-6 text-cyan-500"/>My Booking</NavLink></li>
            <li><NavLink to="/dashboard/userReview"><MdRateReview className="w-6 h-6 text-cyan-500"/>Add Review</NavLink></li>
              </>
            }
           
          
        
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