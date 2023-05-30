import { Link } from "react-router-dom";
import loginBanner from "../../assets/others/authentication.gif";
import authImg from "../../assets/others/authentication1.png";
import { FaGoogle,FaFacebook,FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { userSignIn,google,github} = useContext(AuthContext);

    const captchaRef = useRef(null);
    const [disable,setDisable] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleCaptcha = ()=>{
        const user_captcha_value = captchaRef.current.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)){
           setDisable(false)
        }
        else{
            setDisable(true)
        }
         }
         const handleLogin= event =>{
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email,password);
            userSignIn(email,password)
            .then(res=>{
              const loggedUser = res.user;
              form.reset()
              toast.success("Successfully Signed In")
              console.log(loggedUser);
            })
            .catch(error=> {
              console.log(error);
              toast.error("Sign In Failed")
            })

         }
         const googleHandle = () =>{
          google()
          .then(res =>{
            const createdUser = res.user; 
            toast.success("Successfully Signed In")
            console.log(createdUser);
          } )
          .catch(error=> {
            console.log(error);
            toast.error("Sign In Failed")
          })
        }
          const githubHandle = () =>{
            github()
            .then(res =>{
              const createdUser = res.user; 
              toast.success("Successfully Signed In")
              console.log(createdUser);
            } )
            .catch(error=> {
              console.log(error);
              toast.error("Sign In Failed")
            })
           
         
        }
        const fbHandle = () =>{
          toast.warning("Facebook Integration will implement soon..... ")
         }
  return (
    <div>
      <div
        className="hero h-[550px]"
        style={{ backgroundImage: `url(${loginBanner})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Please Sign In</h1>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center justify-center">
          <div className="text-center lg:text-left w-full p-5">
            <img src={authImg} alt="Auth Img" className="w-full" />
          </div>
          <div className="card w-full  shadow-2xl bg-base-300 m-8">
            <form onSubmit={handleLogin} className="card-body m-8">
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
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  placeholder="Type the text above"
                  name="captcha"
                  className="input input-bordered"
                />
                <button onClick={handleCaptcha} className="btn btn-xs btn-primary my-2">Validate Captcha</button>
              </div>
              <div className="form-control mt-6">
                
                <input type="submit" disabled={disable}  className="btn bg-[#D1A054]" value="Sign In" />
              </div>
              </form>
              <p className="text-center font-medium py-2">New to Bistro Boss?<Link to='/register' className="text-blue-700 font-bold"> Sign Up</Link></p>
              <div>
                <p className="font-bold text-lg text-center">Or Sign In with</p>
                <div className="flex justify-center py-3">
                    <button onClick={fbHandle} className="p-1 m-2 btn btn-circle bg-gray-300 hover:bg-[#D1A054] text-gray-900 text-2xl"><FaFacebook/></button>
                    <button onClick={googleHandle} className="p-1 m-2 btn btn-circle bg-gray-300 hover:bg-[#D1A054] text-gray-900 text-2xl"><FaGoogle/></button>
                    <button onClick={githubHandle} className="p-1 m-2 btn btn-circle bg-gray-300 hover:bg-[#D1A054] text-gray-900 text-2xl"><FaGithub/></button>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
