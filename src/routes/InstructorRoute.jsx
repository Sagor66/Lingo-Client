import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ColorRing } from "react-loader-spinner";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [ isInstructor, isInstructorLoading ] = useInstructor()
  const location = useLocation()

  if (loading || isInstructorLoading) {
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

  if (user && isInstructor) {
    return children
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;