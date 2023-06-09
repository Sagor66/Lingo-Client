import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineSelect } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";

const Student = () => {
  return (
    <div>
      <li className="text-2xl bg-white text-center py-2 font-black mb-8">
        Student Dashboard
      </li>
      <li>
        <Link>
          <AiOutlineSelect></AiOutlineSelect>
          Selected Classes
        </Link>
      </li>
      <li>
        <Link>
          <BiSelectMultiple></BiSelectMultiple>
          Enrolled Classes
        </Link>
      </li>
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
    </div>
  );
};

export default Student;
