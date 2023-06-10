import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useClassesAll = () => {
  const { user, loading } = useAuth()
  const [ axiosSecure ] = useAxiosSecure()
  const { refetch, data: newClasses = [] } = useQuery({
    queryKey: ['newClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/new-classes/all?email=${user?.email}`)
      return res.data
    }
  })

  return [ newClasses, refetch ]
};

export default useClassesAll;