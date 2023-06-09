import { Link } from "react-router-dom";
import Admin from "../pages/Dashboard/LeftSide/Admin";
import Instructor from "../pages/Dashboard/LeftSide/Instructor";
import Student from "../pages/Dashboard/LeftSide/Student";

const Dashboard = () => {

  const user = "student"


  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn-primary drawer-button mt-4 lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-orange-400 to-yellow-400 text-xl font-nunito font-bold">
            {/* Sidebar content here */}
            {user === "admin" && <Admin></Admin>}
            {user === "instructor" && <Instructor></Instructor>}
            {user === "student" && <Student></Student>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
