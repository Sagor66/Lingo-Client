import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";


const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {

  const { logOut } = useAuth()
  const navigate = useNavigate()



  return (
    <div>
            
    </div>
  );
};

export default useAxiosSecure;