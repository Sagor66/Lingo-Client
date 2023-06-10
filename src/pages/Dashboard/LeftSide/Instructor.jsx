import { Link } from "react-router-dom";
import DashboardCommon from "../../../components/DashboardCommon";
import { GrAdd } from 'react-icons/gr';
import { BsJournals } from "react-icons/bs";
import { TbHomeCheck } from "react-icons/tb";


const Instructor = () => {
  return (
    <div>
      <li className="text-2xl bg-white text-center py-2 font-black mb-8">
        Instructor Dashboard
      </li>
      <li>
        <Link to="/dashboard">
          <TbHomeCheck></TbHomeCheck>
          Instructor Home
        </Link>
      </li>
      <li>
        <Link to="add-class">
        <GrAdd></GrAdd>
        Add Class
        </Link>
      </li>
      <li>
        <Link to='my-classes'>
        <BsJournals></BsJournals>
        My Classes
        </Link>
      </li>
      <DashboardCommon></DashboardCommon>
    </div>
  );
};

export default Instructor;
