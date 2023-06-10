import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
  const { user, loading } = useAuth()
  const [ axiosSecure ] = useAxiosSecure()
  const { refetch, data: newClasses = [] } = useQuery({
    queryKey: ['newClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/new-classes?email=${user?.email}`)
      return res.data
    }
  })

  return [ newClasses, refetch ]
};

export default useClasses;