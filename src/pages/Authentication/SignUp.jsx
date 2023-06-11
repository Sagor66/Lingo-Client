import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const from = location?.state?.from.pathname || '/'

  const onSubmit = (data) => {
    data.role = "student"
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user
      toast.success('Successfully Signed Up!')
      console.log(loggedUser)
      updateUserProfile(data.name, data.photo)
      .then(() => {
        fetch('https://b7a12-summer-camp-server-side-sagor66.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            console.log()
          }
        })
        toast.success('Successfully Updated!')
        reset()
        navigate(from, { replace: true })
      })
    })
    .catch(error => console.log(error.message))
  };
  // console.log(errors);

  return (
    <div>
      <div className="py-40 min-h-screen relative bg-gradient-to-b from-yellow-400 to-white">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl shadow-2xl rounded-xl mx-auto bg-white bg-gradient-to-t from-yellow-100 to-orange-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", {required: true})}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {required: true})}
              />
            </div>
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {required: true})}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="confirm password"
                  className="input input-bordered"
                  {...register("confirmPassword", {required: true})}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                {...register("photo", {required: true})}
              />
            </div>
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="phone"
                  className="input input-bordered"
                  {...register("phone", {required: true})}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <input
                  type="text"
                  placeholder="gender"
                  className="input input-bordered"
                  {...register("gender", {required: true})}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered"
                {...register("address", {required: true})}
              />
            </div>
            <div className="form-control my-8">
              <input className="btn-primary" type="submit" value="Sign Up" />
            </div>
            <div className="label-text-alt">
              <p className="inline-block mr-2">Already have an account?</p>
              <Link to='/login' className="text-orange-500">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
