import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icon/logo.png";
import { Tooltip } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Navigation = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logout");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout Failed");
      });
  };
  const navOptions = (
    <>
      <li>
        <Link to="/"> Home</Link>
      </li>

      <li>
        <Link to="/menu"> Our Menu</Link>
      </li>
      <li>
        <Link to="/order"> Order Food </Link>
      </li>
      <li>
        <Link to="/contact"> Contact Us </Link>
      </li>
    

      {user ? (
        <>
        
          {isAdmin ? (
        <li>
          <Link to="/dashboard/adminHome"> Dashboard </Link>
        </li>
      ) : (
        <>  <li>
        <Link to="/dashboard/userHome"> Dashboard </Link>
      </li><li>
          <Link to="/dashboard/myCart">
            <button className="btn text-xs bg-transparent w-fit gap-1">
              Cart <FaShoppingCart />
              <span className="badge badge-xs badge-info">+{cart?.length}</span>
            </button>
          </Link>
        </li></>
      
      )}
        
        </>
      ) : (
        <li></li>
      )}
    </>
  );
  return (
    <div className="navbar bg-slate-900 text-white bg-opacity-60 fixed z-10 max-w-screen-xl ">
      <div className="navbar-start">
        <a className=" normal-case  ">
          {" "}
          <img
            src={logo}
            alt="logo"
            className="md:w-20 md:h-20 md:p-1 w-12 h-12 bg-black text-white rounded-full md:mr-3 "
          />{" "}
        </a>
        <p className=" md:text-2xl text-lg font-bold ms-1  ">
          Diner Lounge{" "}
          <span className="text-lg block text-center">RESTAURANT</span>{" "}
        </p>
        <div className="dropdown navbar-center">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700  rounded-box w-52 font-bold text-xs"
          >
            {navOptions}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-xs">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            <Tooltip title={user?.displayName}>
              <img
                src={user?.photoURL}
                alt="User profile"
                className="md:w-12 md:h-12 w-8 h-8 rounded-full mr-3"
              />
            </Tooltip>
            <Link>
              <button
                className="btn btn-md  bg-slate-700 hover:bg-slate-900"
                onClick={handleLogout}
              >
                Logout
              </button>
            </Link>{" "}
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-md bg-slate-700 hover:bg-slate-900">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
