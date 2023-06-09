import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <li className="text-2xl bg-white text-center py-2 font-black mb-8">
        Admin Dashboard
      </li>
      <li>
        <Link>Sidebar Item 1</Link>
      </li>
      <li>
        <Link>Sidebar Item 2</Link>
      </li>
    </div>
  );
};

export default Admin;
