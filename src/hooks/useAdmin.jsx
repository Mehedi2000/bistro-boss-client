import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!localStorage.getItem("access-token"),
    // enabled: loading,
    /**
     * after getting the token the api will call , this line will check conditionally, if the token get from the local storage then the api will go for further operation
     * This line ensures that the query is only enabled (set to true) when there is an access token stored in the localStorage. The !! is a shorthand way of converting a truthy or falsy value to a boolean. If there is an access token, localStorage.getItem("accessToken") will be truthy, and !! will convert it to true. If there is no access token (or it is null or undefined), it will be falsy, and !! will convert it to false.
     */
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res?.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
