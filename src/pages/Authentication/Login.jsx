import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { GrFormViewHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hidePass, setHidePass] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  console.log(from);

  const { signInUser, googleSignIn } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    setError("")
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Logged in!");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  // console.log(errors);

  const handleHidePassword = () => {
    setHidePass(!hidePass);
    console.log(hidePass);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        const googleUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          phone: loggedInUser.phoneNumber,
          photo: loggedInUser.photoURL,
          role: "student"
        }
        fetch('https://b7a12-summer-camp-server-side-sagor66.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(googleUser)
        })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            console.log()
          }
        })
        navigate(from, { replace: true });
        console.log(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="py-40 min-h-screen relative bg-gradient-to-b from-yellow-400 to-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md shadow-2xl rounded-xl mx-auto bg-white pt-10 bg-gradient-to-t from-yellow-100 to-orange-100"
      >
        <button onClick={handleGoogleSignIn} className="text-xl flex items-center gap-3 px-4 py-2 border-2 rounded-lg max-w-xs mx-auto mb-4 font-bold font-nunito hover:bg-white orange-100 border-gray-600">
          <FcGoogle className="text-4xl"></FcGoogle>
          Sign in with Google
        </button>
        <button className="text-xl flex items-center gap-3 px-4 py-2 border-2 rounded-lg max-w-xs mx-auto font-bold font-nunito hover:bg-white border-gray-600">
          <FaGithub className="text-4xl"></FaGithub>
          Sign in with Github
        </button>
        <div className="divider w-5/6 mx-auto mb-0"></div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={hidePass ? "password" : "text"}
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            <div className="text-2xl absolute right-3 bottom-2">
              <button onClick={handleHidePassword}>
                {hidePass ? (
                  <GrFormViewHide></GrFormViewHide>
                ) : (
                  <BiShow></BiShow>
                )}
              </button>
            </div>
          </div>
          <div className="form-control my-8">
            <input className="btn-primary" type="submit" value="Login" />
          </div>
          <div className="label-text-alt">
            <p className="inline-block mr-2">Don't have an account?</p>
            <Link to="/signup" className="text-orange-500">
              Create New Account
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
