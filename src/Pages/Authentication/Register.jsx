import { Link, useNavigate } from "react-router-dom";
import loginBanner from "../../assets/others/authentication.gif";
import authImg from "../../assets/others/authentication1.png";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, userUpdate, google, github, logOut } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then(res => {
        const createdUser = res.user;
        toast.success("Successfully Signed Up");

        userUpdate(createdUser, data.name, data.photo)
          .then(() => {
            toast.success("User Profile Successfully Updated ");
            const saveUser = { name: data.name, email: data.email };
            // fetch("http://localhost:5000/users", {
            fetch("https://diner-lounge-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then(res => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success("User Successfully Added to DB ");
                  logOut();
                  navigate("/login");
                  reset();
                }
              });
          })
          .catch(() => {
            toast.error("User Profile Update Failed ");
          });

        // console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sign Up Failed");
      });
  };

  
  const googleHandle = () => {
    google()
      .then(res => {
        const createdUser = res.user;
      
        // console.log(createdUser);
        toast.success("Successfully Signed Up");
        logOut();
              navigate("/login");
        const saveUser = {
          name: createdUser.displayName
            ? createdUser.displayName
            : "Name not available",
          email: createdUser.email,
        };
        console.log(saveUser);
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
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sign Up Failed");
      });
  };
  const githubHandle = () => {
    github()
      .then((res) => {
        const createdUser = res.user;
        console.log(createdUser);
        toast.success("Successfully Signed Up");
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Sign Up Failed");
      });
  };
  const fbHandle = () => {
    toast.warning("Facebook Integration will implement soon ");
  };
  return (
    <div>
      <Helmet>
        <title>Diner Lounge | Register</title>
      </Helmet>
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
            {/* <form onSubmit={handleSignUp} className="card-body m-8"> */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body m-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-700">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter photo url"
                  name="photo"
                  {...register("photo", { required: true })}
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-700" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-700" role="alert">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-700" role="alert">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-700" role="alert">
                    Password must contain one uppercase, one lowercase, one
                    number and one special characters
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-slate-700 hover:bg-slate-900"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center font-medium py-2">
              Already have Diner Lounge Account?
              <Link to="/login" className="text-blue-700 font-bold">
                {" "}
                Sign In
              </Link>
            </p>
            <div>
              <p className="font-bold text-lg text-center">Or Sign Up with</p>
              <div className="flex justify-center py-3">
                <button
                  onClick={fbHandle}
                  className="p-1 m-2 btn btn-circle bg-gray-600 hover:bg-slate-800 text-white text-2xl"
                >
                  <FaFacebook />
                </button>
                <button
                  onClick={googleHandle}
                  className="p-1 m-2 btn btn-circle  bg-gray-600 hover:bg-slate-800 text-white text-2xl"
                >
                  <FaGoogle />
                </button>
                <button
                  onClick={githubHandle}
                  className="p-1 m-2 btn btn-circle  bg-gray-600 hover:bg-slate-800 text-white text-2xl"
                >
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
