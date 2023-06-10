import { BsJournalText, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import DashboardCommon from "../../../components/DashboardCommon";
import { TbHomeCheck } from "react-icons/tb";

const Admin = () => {
  return (
    <div>
      <li className="text-2xl bg-white text-center py-2 font-black mb-8">
        Admin Dashboard
      </li>
      <li>
        <Link to="/dashboard">
          <TbHomeCheck></TbHomeCheck>
          Admin Home
        </Link>
      </li>
      <li>
        <Link>
          <BsJournalText></BsJournalText>
          Manage Classes
        </Link>
      </li>
      <li>
        <Link>
          <BsPeople></BsPeople>
          Manage Users
        </Link>
      </li>
      <DashboardCommon></DashboardCommon>
    </div>
  );
};

export default Admin;
