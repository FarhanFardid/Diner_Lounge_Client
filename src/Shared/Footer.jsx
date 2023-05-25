import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import logo from '../assets/icon/logo.png'

const Footer = () => {
    return (
        <footer className=" grid md:grid-cols-4 bg-slate-900 md:p-12 p-5 text-white  ">
        <div className="footer__logo items-center justify-center flex flex-col space-y-2">
          <img src={logo} className='w-12 h-12 rounded-full mx-auto' alt="Bistro boss Logo" />
          <h2 className='text-lg font-bold text-white'>Bistro Boss Restaurant</h2>
        </div>
        <div className="footer__contact items-center justify-center flex flex-col space-y-2">
          <h3 className='font-bold text-red-600 text-base'>Contact Information</h3>
          <p className='text-xs font-medium'>Phone: 123-456-7890</p>
          <p className='text-xs font-medium'>Email: bistro@boss.com</p>
        </div>
        <div className="footer__social items-center justify-center flex flex-col space-y-2">
          <h3 className="font-bold text-red-600 text-base">Follow Us</h3>
          <ul className='flex '>
            <li className='pr-2'>
              <a href="#">
                <FaFacebookSquare className='w-4 h-4' />
              </a>
            </li>
            <li className='pr-2'>
              <a href="#">
               <FaInstagramSquare className='w-4 h-4'/>
              </a>
            </li>
            <li className='pr-2'>
              <a href="#" >
           <FaTwitterSquare className='w-4 h-4'/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__address items-center justify-center flex flex-col space-y-2">
          <h3 className="font-bold text-red-600 text-base">Address</h3>
          <p className='text-xs font-medium'>24/B Baker Street, London, UK</p>
        </div>
        <div className="md:mt-5 col-span-4 text-center">
          <p className="font-bold text-white  text-xl ">&copy; {new Date().getFullYear()} Bistro Boss. All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;