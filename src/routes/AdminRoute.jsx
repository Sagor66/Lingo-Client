import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { ColorRing } from "react-loader-spinner";



const AdminRoute = ({ children }) => {

  const { user, loading } = useAuth()
  const [ isAdmin, isAdminLoading ] = useAdmin()
  const location = useLocation()

  if (loading || isAdminLoading) {
    return <div className="mx-auto my-40">
    <ColorRing
      visible={true}
      height="400"
      width="400"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#e15b64", "#f47e60", "#e15b64"]}
    />
  </div>
  }

  if (user && isAdmin) {
    return children
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>
  
};

export default AdminRoute;