import { Link } from "react-router-dom";
import loginBanner from "../../assets/others/authentication.gif";
import authImg from "../../assets/others/authentication1.png";
import { FaGoogle,FaFacebook,FaGithub } from 'react-icons/fa';

const Register = () => {
    return (
        <div>
      <div
        className="hero h-[550px]"
        style={{ backgroundImage: `url(${loginBanner})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Please Sign Up</h1>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <div className="text-center lg:text-left w-full p-5">
            <img src={authImg} alt="Auth Img" className="w-full" />
          </div>
          <div className="card w-full  shadow-2xl bg-base-300 m-8">
            <div className="card-body m-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#D1A054]">sign Up</button>
              </div>
              <p className="text-center font-medium py-2">Already have Bistro Boss Account?<Link to='/login' className="text-blue-700 font-bold"> Sign In</Link></p>
              <div>
                <p className="font-bold text-lg text-center">Or Sign Up with</p>
                <div className="flex justify-center py-3">
                    <button className="p-1 m-2 btn btn-circle bg-gray-300 hover:bg-[#D1A054] text-gray-900 text-2xl"><FaFacebook/></button>
                    <button className="p-1 m-2 btn btn-circle bg-gray-300 hover:bg-[#D1A054] text-gray-900 text-2xl"><FaGoogle/></button>
                    <button className="p-1 m-2 btn btn-circle bg-gray-300 hover:bg-[#D1A054] text-gray-900 text-2xl"><FaGithub/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;