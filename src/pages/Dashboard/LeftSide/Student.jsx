import { Link } from "react-router-dom";
import { AiOutlineSelect } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import DashboardCommon from "../../../components/DashboardCommon";
import { TbHomeCheck } from "react-icons/tb";


const Student = () => {
  return (
    <div>
      <li className="text-2xl bg-white text-center py-2 font-black mb-8">
        Student Dashboard
      </li>
      <li>
        <Link to="/dashboard">
          <TbHomeCheck></TbHomeCheck>
          Student Home
        </Link>
      </li>
      <li>
        <Link to='/dashboard/selected-classes'>
          <AiOutlineSelect></AiOutlineSelect>
          Selected Classes
        </Link>
      </li>
      <li>
        <Link to='/dashboard/enrolled-classes'>
          <BiSelectMultiple></BiSelectMultiple>
          Enrolled Classes
        </Link>
      </li>
      <li>
        <Link to='/dashboard/payment-history'>
          <BiSelectMultiple></BiSelectMultiple>
          Payment History
        </Link>
      </li>
      <DashboardCommon></DashboardCommon>      
    </div>
  );
};

export default Student;
