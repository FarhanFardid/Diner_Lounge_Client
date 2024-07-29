import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBanner from "../../assets/others/authentication.gif";
import authImg from "../../assets/others/authentication1.png";
import { FaGoogle,FaFacebook,FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userSignIn,google,github} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const [disable,setDisable] = useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])
    const handleCaptcha = (e)=>{
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value);
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
              toast.success("Successfully Signed In")
              // console.log(loggedUser);
              navigate(from, {replace:true})
              form.reset()
               const saveUser = {
                name: loggedUser.displayName
                  ? loggedUser.displayName
                  : "Name not available",
                email: loggedUser.email,
              };
              // console.log(saveUser);
              // fetch("http://localhost:5000/users", {
              fetch("https://diner-lounge-server.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    toast.success("User Successfully Added to DB ");
              
                    
                  }
                })
            } )
              
            
            
            .catch(error=> {
              console.log(error);
              toast.error("Sign In Failed")
            })

         }
         const googleHandle = () =>{
          google()
          .then(res =>{
            const loggedUser = res.user; 
            // console.log(loggedUser);
            toast.success("Successfully Signed In")
            navigate(from, {replace:true})
            const saveUser = {
              name: loggedUser.displayName
                ? loggedUser.displayName
                : "Name not available",
              email: loggedUser.email,
            };
            // console.log(saveUser);
            // fetch("http://localhost:5000/users", {
            fetch("https://diner-lounge-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success("User Successfully Added to DB ");
            
                  
                }
              })
          } )
          .catch(error=> {
            console.log(error);
            toast.error("Sign In Failed")
          })
        }
          const githubHandle = () =>{
            github()
            .then(res =>{
              const loggedUser = res.user; 
              toast.success("Successfully Signed In")
              navigate(from, {replace:true})
              console.log(loggedUser);
            } )
            .catch(error=> {
              console.log(error);
              toast.error("Sign In Failed")
            })
           
         
        }
        const fbHandle = () =>{
          toast.warning("Facebook Integration will be implemented soon..... ")
         }
  return (
    <div>
      <Helmet>
        <title>Diner Lounge | Login</title>
       
      </Helmet>
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
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                 onBlur={handleCaptcha}
                  placeholder="Type the text above"
                  name="captcha"
                  className="input input-bordered"
                />
              
              </div>
              <div className="form-control mt-6">
                
                <input type="submit" disabled={disable}  className="btn bg-slate-700 hover:bg-slate-900" value="Sign In" />
              </div>
              </form>
              <p className="text-center font-medium py-2">New to Diner Lounge?<Link to='/register' className="text-blue-700 font-bold"> Sign Up</Link></p>
              <div>
                <p className="font-bold text-lg text-center">Or Sign In with</p>
                <div className="flex justify-center py-3">
                    <button onClick={fbHandle} className="p-1 m-2 btn btn-circle  bg-gray-600 hover:bg-slate-800 text-white text-2xl"><FaFacebook/></button>
                    <button onClick={googleHandle} className="p-1 m-2 btn btn-circle  bg-gray-600 hover:bg-slate-800 text-white text-2xl"><FaGoogle/></button>
                    <button onClick={githubHandle} className="p-1 m-2 btn btn-circle  bg-gray-600 hover:bg-slate-800 text-white text-2xl"><FaGithub/></button>
                </div>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
