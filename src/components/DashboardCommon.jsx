import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardCommon = () => {
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
    </>
  );
};

export default DashboardCommon;
