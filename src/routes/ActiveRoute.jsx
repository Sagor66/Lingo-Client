import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-orange-400" : "")}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveRoute;
