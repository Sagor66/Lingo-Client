import { Link } from "react-router-dom";
import { AiOutlineSelect } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import DashboardCommon from "../../../components/DashboardCommon";


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
      <DashboardCommon></DashboardCommon>      
    </div>
  );
};

export default Student;
