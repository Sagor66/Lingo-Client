import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardCommon = () => {
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className="divider"></div>
      <li>
        <Link to="/">
          <AiOutlineHome></AiOutlineHome>
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors">
          <BsPerson></BsPerson>
          Instructors
        </Link>
      </li>
      <li>
        <Link to="/classes">
          <MdOutlineClass></MdOutlineClass>
          Classes
        </Link>
      </li>
      <Link to="/">
        <button
          onClick={() => handleLogOut()}
          className="rounded-full font-nunito font-bold bg-black text-white px-4 py-3 w-full my-10 hover:text-black hover:bg-white"
        >
          Logout
        </button>
      </Link>
    </>
  );
};

export default DashboardCommon;
