import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import useAuth from "../../hooks/useAuth";
import ActiveRoute from "../../routes/ActiveRoute";

const NavBar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  const navOptions = (
    <>
      <li className="text-xl font-nunito font-extrabold mr-7 hover:text-orange-500">
        <ActiveRoute to="/">Home</ActiveRoute>
      </li>
      <li className="text-xl font-nunito font-extrabold mr-7 hover:text-orange-500">
        <ActiveRoute to="/instructors">Instructors</ActiveRoute>
      </li>
      <li className="text-xl font-nunito font-extrabold mr-7 hover:text-orange-500">
        <ActiveRoute to="/classes">Classes</ActiveRoute>
      </li>
      {user && (
        <li className="text-xl font-nunito font-extrabold mr-7 hover:text-orange-500">
          <ActiveRoute to="/dashboard">Dashboard</ActiveRoute>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-white to-yellow-400 lg:px-10 py-3 ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <img className="w-12 h-12 object-cover object-top rounded-full border-2 border-white" src={user.photoURL} alt="" />
              <button onClick={() => handleLogOut()} className="btn-primary">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn-primary">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
