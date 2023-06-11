import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ColorRing } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="mx-auto my-40">
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
    )
  }

  if (user) {
    return children
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>

};

export default PrivateRoute;